import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

function safeFileName(fileName: string) {
  return fileName
    .trim()
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

function getSupabaseAdmin() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is not configured.",
    );
  }

  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not configured.",
    );
  }

  return createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

function getResend() {
  const apiKey =
    process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured.",
    );
  }

  return new Resend(apiKey);
}

export async function POST(
  request: NextRequest,
) {
  try {
    const formData =
      await request.formData();

    const name = String(
      formData.get("name") ?? "",
    ).trim();

    const businessName = String(
      formData.get("businessName") ?? "",
    ).trim();

    const email = String(
      formData.get("email") ?? "",
    ).trim();

    const phone = String(
      formData.get("phone") ?? "",
    ).trim();

    const projectType = String(
      formData.get("projectType") ?? "",
    ).trim();

    const imageCount = String(
      formData.get("imageCount") ?? "",
    ).trim();

    const panoramaCount = String(
      formData.get("panoramaCount") ?? "",
    ).trim();

    const projectDetails = String(
      formData.get("projectDetails") ?? "",
    ).trim();

    const deadline = String(
      formData.get("deadline") ?? "",
    ).trim();

    const presentationOptions =
      formData
        .getAll("presentationOptions")
        .map((value) =>
          String(value).trim(),
        )
        .filter(Boolean);

    const files =
      formData
        .getAll("files")
        .filter(
          (item): item is File =>
            item instanceof File &&
            item.size > 0,
        );

    if (!name) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Please enter your name.",
        },
        {
          status: 400,
        },
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Please enter your email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (!projectType) {
      return NextResponse.json(
        {
          ok: false,
          message:
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
          ok: false,
          message:
            "Please select the approximate number of joinery images or views.",
        },
        {
          status: 400,
        },
      );
    }

    for (const file of files) {
      if (
        !ALLOWED_FILE_TYPES.includes(
          file.type,
        )
      ) {
        return NextResponse.json(
          {
            ok: false,
            message: `${file.name} is not a supported file type. Please upload JPG, PNG, WEBP or PDF files.`,
          },
          {
            status: 400,
          },
        );
      }

      if (
        file.size >
        MAX_FILE_SIZE
      ) {
        return NextResponse.json(
          {
            ok: false,
            message: `${file.name} is larger than 15 MB.`,
          },
          {
            status: 400,
          },
        );
      }
    }

    const supabase =
      getSupabaseAdmin();

    const resend =
      getResend();

    const enquiryId =
      crypto.randomUUID();

    const today =
      new Date()
        .toISOString()
        .slice(0, 10);

    const folder =
      `joinery-enquiries/${today}-${enquiryId}`;

    const uploadedFiles: {
      name: string;
      url: string;
    }[] = [];

    for (
      let index = 0;
      index < files.length;
      index++
    ) {
      const file = files[index];

      const cleanName =
        safeFileName(file.name);

      const storageName =
        `${String(index + 1).padStart(
          2,
          "0",
        )}-${cleanName}`;

      const storagePath =
        `${folder}/${storageName}`;

      const arrayBuffer =
        await file.arrayBuffer();

      const {
        error: uploadError,
      } = await supabase.storage
        .from("customers")
        .upload(
          storagePath,
          arrayBuffer,
          {
            contentType:
              file.type,
            upsert: false,
          },
        );

      if (uploadError) {
        console.error(
          "Joinery enquiry upload error:",
          uploadError,
        );

        throw new Error(
          `Could not upload ${file.name}.`,
        );
      }

      const {
        data: signedData,
        error:
          signedUrlError,
      } = await supabase.storage
        .from("customers")
        .createSignedUrl(
          storagePath,
          60 * 60 * 24 * 7,
        );

      if (
        signedUrlError ||
        !signedData?.signedUrl
      ) {
        console.error(
          "Signed URL error:",
          signedUrlError,
        );

        throw new Error(
          `Could not create a secure link for ${file.name}.`,
        );
      }

      uploadedFiles.push({
        name: file.name,
        url: signedData.signedUrl,
      });
    }

    const optionsText =
      presentationOptions.length
        ? presentationOptions.join(
            ", ",
          )
        : "None selected";

    const fileLinksHtml =
      uploadedFiles.length
        ? uploadedFiles
            .map(
              (file) => `
                <li style="margin-bottom: 10px;">
                  <a
                    href="${file.url}"
                    style="color: #9b4b37;"
                  >
                    ${file.name}
                  </a>
                </li>
              `,
            )
            .join("")
        : `
            <li>
              No files uploaded
            </li>
          `;

    const ownerEmail =
      await resend.emails.send({
        from:
          "Real Estate Media House <rob@realestatemediahouse.net>",

        to: [
          "rob@realestatemediahouse.net",
        ],

        replyTo: email,

        subject:
          `New joinery enquiry — ${businessName || name}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto; color: #222;">
            <h1 style="font-size: 28px; margin-bottom: 24px;">
              New joinery presentation enquiry
            </h1>

            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Name</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Business</td>
                  <td style="padding: 8px 0;">${businessName || "Not supplied"}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email</td>
                  <td style="padding: 8px 0;">${email}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Phone</td>
                  <td style="padding: 8px 0;">${phone || "Not supplied"}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Project type</td>
                  <td style="padding: 8px 0;">${projectType}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Joinery images / views</td>
                  <td style="padding: 8px 0;">${imageCount}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">360° spaces</td>
                  <td style="padding: 8px 0;">${panoramaCount || "Not selected"}</td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Deadline</td>
                  <td style="padding: 8px 0;">${deadline || "Not supplied"}</td>
                </tr>
              </tbody>
            </table>

            <hr style="margin: 28px 0; border: 0; border-top: 1px solid #ddd;" />

            <h2 style="font-size: 20px;">
              Presentation options
            </h2>

            <p>
              ${optionsText}
            </p>

            <h2 style="font-size: 20px; margin-top: 28px;">
              Project details
            </h2>

            <p style="white-space: pre-wrap;">
              ${projectDetails || "No additional details supplied."}
            </p>

            <h2 style="font-size: 20px; margin-top: 28px;">
              Uploaded files
            </h2>

            <ul>
              ${fileLinksHtml}
            </ul>

            <p style="margin-top: 30px; font-size: 12px; color: #777;">
              Secure file links expire after 7 days.
            </p>
          </div>
        `,
      });

    if (ownerEmail.error) {
      console.error(
        "Owner enquiry email error:",
        ownerEmail.error,
      );

      throw new Error(
        "The enquiry was uploaded but the notification email could not be sent.",
      );
    }

    const customerEmail =
      await resend.emails.send({
        from:
          "Real Estate Media House <rob@realestatemediahouse.net>",

        to: [email],

        subject:
          "We received your joinery project",

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #222;">
            <h1 style="font-size: 28px;">
              Thanks ${name}
            </h1>

            <p style="font-size: 16px; line-height: 1.7;">
              We've received your joinery presentation enquiry.
            </p>

            <p style="font-size: 16px; line-height: 1.7;">
              We'll review the sketches, project information and the number of visualisation views you need before preparing the next steps.
            </p>

            <p style="font-size: 16px; line-height: 1.7;">
              You do not need to prepare polished 3D drawings for us. The sketches, measurements, references and project information you already use are exactly where we can start.
            </p>

            <p style="margin-top: 32px; font-size: 16px; line-height: 1.7;">
              Real Estate Media House
            </p>
          </div>
        `,
      });

    if (
      customerEmail.error
    ) {
      console.error(
        "Customer receipt email error:",
        customerEmail.error,
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Thanks. Your project has been sent through and we'll be in touch.",
    });
  } catch (error) {
    console.error(
      "Joinery enquiry error:",
      error,
    );

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}