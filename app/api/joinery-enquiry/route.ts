import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  createClient,
} from "@supabase/supabase-js";

import { Resend } from "resend";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
);

const resend = new Resend(
  RESEND_API_KEY,
);

function cleanString(
  value: FormDataEntryValue | null,
) {
  if (
    !value ||
    typeof value !== "string"
  ) {
    return "";
  }

  return value.trim();
}

function escapeHtml(
  value: string,
) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeFileName(
  fileName: string,
) {
  return fileName
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(
  request: NextRequest,
) {
  try {
    if (
      !SUPABASE_URL ||
      !SUPABASE_SERVICE_ROLE_KEY
    ) {
      return NextResponse.json(
        {
          error:
            "Supabase server configuration is missing.",
        },
        {
          status: 500,
        },
      );
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Email server configuration is missing.",
        },
        {
          status: 500,
        },
      );
    }

    const formData =
      await request.formData();

    const name =
      cleanString(
        formData.get("name"),
      );

    const businessName =
      cleanString(
        formData.get(
          "businessName",
        ),
      );

    const email =
      cleanString(
        formData.get("email"),
      ).toLowerCase();

    const phone =
      cleanString(
        formData.get("phone"),
      );

    const projectType =
      cleanString(
        formData.get(
          "projectType",
        ),
      );

    const imageCount =
      cleanString(
        formData.get(
          "imageCount",
        ),
      );

    const panoramaCount =
      cleanString(
        formData.get(
          "panoramaCount",
        ),
      );

    const projectDetails =
      cleanString(
        formData.get(
          "projectDetails",
        ),
      );

    const deadline =
      cleanString(
        formData.get("deadline"),
      );

    const privateProjectPage =
      formData.get(
        "privateProjectPage",
      ) === "yes";

    const qrCode =
      formData.get(
        "qrCode",
      ) === "yes";

    const printableSheets =
      formData.get(
        "printableSheets",
      ) === "yes";

    const ipadPresentation =
      formData.get(
        "ipadPresentation",
      ) === "yes";

    if (!name) {
      return NextResponse.json(
        {
          error:
            "Please enter your name.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !email ||
      !email.includes("@")
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (!projectType) {
      return NextResponse.json(
        {
          error:
            "Please select a project type.",
        },
        {
          status: 400,
        },
      );
    }

    if (!imageCount) {
      return NextResponse.json(
        {
          error:
            "Please select the approximate number of joinery views.",
        },
        {
          status: 400,
        },
      );
    }

    const enquiryId =
      crypto.randomUUID();

    const folderName =
      `${new Date()
        .toISOString()
        .slice(0, 10)}-${enquiryId}`;

    const uploadedFiles: {
      fileName: string;
      path: string;
      signedUrl: string;
    }[] = [];

    const files =
      formData.getAll("files");

    for (const entry of files) {
      if (!(entry instanceof File)) {
        continue;
      }

      if (entry.size === 0) {
        continue;
      }

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "application/pdf",
      ];

      if (
        !allowedTypes.includes(
          entry.type,
        )
      ) {
        return NextResponse.json(
          {
            error:
              "Files must be JPG, PNG, WEBP or PDF.",
          },
          {
            status: 400,
          },
        );
      }

      if (
        entry.size >
        15 * 1024 * 1024
      ) {
        return NextResponse.json(
          {
            error:
              "Each uploaded file must be smaller than 15 MB.",
          },
          {
            status: 400,
          },
        );
      }

      const fileName =
        safeFileName(
          entry.name,
        );

      const storagePath =
        `joinery-enquiries/${folderName}/${fileName}`;

      const bytes =
        await entry.arrayBuffer();

      const {
        error: uploadError,
      } =
        await supabase.storage
          .from("customers")
          .upload(
            storagePath,
            bytes,
            {
              contentType:
                entry.type,
              upsert: false,
            },
          );

      if (uploadError) {
        console.error(
          "Upload error:",
          uploadError.message,
        );

        return NextResponse.json(
          {
            error:
              "One of the project files could not be uploaded.",
          },
          {
            status: 500,
          },
        );
      }

      const {
        data: signedUrlData,
        error: signedUrlError,
      } =
        await supabase.storage
          .from("customers")
          .createSignedUrl(
            storagePath,
            60 * 60 * 24 * 7,
          );

      if (
        signedUrlError ||
        !signedUrlData?.signedUrl
      ) {
        console.error(
          "Signed URL error:",
          signedUrlError?.message,
        );

        continue;
      }

      uploadedFiles.push({
        fileName,
        path: storagePath,
        signedUrl:
          signedUrlData.signedUrl,
      });
    }

    const presentationOptions = [
      privateProjectPage
        ? "Private client project page"
        : null,

      qrCode
        ? "QR code"
        : null,

      printableSheets
        ? "Printable presentation sheets"
        : null,

      ipadPresentation
        ? "iPad-friendly presentation"
        : null,
    ].filter(Boolean);

    const fileLinksHtml =
      uploadedFiles.length > 0
        ? uploadedFiles
            .map(
              (file) => `
                <li style="margin-bottom:8px;">
                  <a
                    href="${file.signedUrl}"
                    style="color:#9c4a2e;"
                  >
                    ${escapeHtml(file.fileName)}
                  </a>
                </li>
              `,
            )
            .join("")
        : "<li>No files uploaded</li>";

    const optionsHtml =
      presentationOptions.length > 0
        ? presentationOptions
            .map(
              (item) =>
                `<li>${escapeHtml(
                  String(item),
                )}</li>`,
            )
            .join("")
        : "<li>No additional options selected</li>";

    const {
      error: emailError,
    } =
      await resend.emails.send({
        from:
          "Real Estate Media House <rob@realestatemediahouse.net>",

        to: [
          "rob@realestatemediahouse.net",
        ],

        replyTo: email,

        subject:
          `New joinery quote request - ${businessName || name}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 700px;
              margin: 0 auto;
              padding: 30px;
              color: #222222;
              line-height: 1.6;
            "
          >
            <h1>
              New Joinery Quote Request
            </h1>

            <h2>
              Customer
            </h2>

            <p>
              <strong>Name:</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Business:</strong><br />
              ${escapeHtml(
                businessName ||
                  "Not provided",
              )}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${escapeHtml(
                phone ||
                  "Not provided",
              )}
            </p>

            <hr />

            <h2>
              Project
            </h2>

            <p>
              <strong>Type:</strong><br />
              ${escapeHtml(
                projectType,
              )}
            </p>

            <p>
              <strong>Joinery images / views:</strong><br />
              ${escapeHtml(
                imageCount,
              )}
            </p>

            <p>
              <strong>360° panorama spaces:</strong><br />
              ${escapeHtml(
                panoramaCount ||
                  "1",
              )}
            </p>

            <p>
              <strong>Preferred deadline:</strong><br />
              ${escapeHtml(
                deadline ||
                  "Not specified",
              )}
            </p>

            <h2>
              Presentation options
            </h2>

            <ul>
              ${optionsHtml}
            </ul>

            <h2>
              Project details
            </h2>

            <p>
              ${escapeHtml(
                projectDetails ||
                  "No extra details provided.",
              ).replace(
                /\n/g,
                "<br />",
              )}
            </p>

            <h2>
              Uploaded project files
            </h2>

            <ul>
              ${fileLinksHtml}
            </ul>

            <p
              style="
                margin-top:30px;
                font-size:13px;
                color:#777777;
              "
            >
              File links expire after 7 days.
            </p>
          </div>
        `,
      });

    if (emailError) {
      console.error(
        "Email error:",
        emailError,
      );

      return NextResponse.json(
        {
          error:
            "Your files uploaded, but the enquiry email could not be sent.",
        },
        {
          status: 500,
        },
      );
    }

    await resend.emails.send({
      from:
        "Real Estate Media House <rob@realestatemediahouse.net>",

      to: [email],

      subject:
        "We received your joinery project",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 620px;
            margin:0 auto;
            padding:30px;
            color:#222222;
            line-height:1.7;
          "
        >
          <h1>
            Thanks ${escapeHtml(
              name.split(" ")[0],
            )}
          </h1>

          <p>
            We&apos;ve received your
            joinery project and any
            sketches or files you
            uploaded.
          </p>

          <p>
            We&apos;ll review the
            number of views, project
            complexity and presentation
            requirements before sending
            you a quote.
          </p>

          <p>
            You don&apos;t need to
            prepare anything else for
            now.
          </p>

          <p>
            Real Estate Media House
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Joinery enquiry error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "We could not send your project. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}