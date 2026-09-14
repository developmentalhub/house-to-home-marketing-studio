import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = body?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const downloadUrl =
      "https://www.realestatemediahouse.net/property-animation-prompt-pack/download";

    const { data, error } = await resend.emails.send({
      from: "Real Estate Media House <rob@realestatemediahouse.net>",
      to: email,
      subject: "Your Property Reel Animation Prompt Pack",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f7f5f1; padding:40px 20px; color:#1f1f1f;">
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:24px; overflow:hidden; border:1px solid #e8e3dc;">

            <div style="background:#1f1f1f; padding:36px 32px;">
              <p style="margin:0 0 12px; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#d5a15b;">
                Real Estate Media House
              </p>

              <h1 style="margin:0; font-size:34px; line-height:1.15; color:#ffffff;">
                Your Property Reel Animation Prompt Pack is ready.
              </h1>
            </div>

            <div style="padding:36px 32px;">
              <p style="margin:0 0 18px; font-size:17px; line-height:1.7; color:#555555;">
                Thanks for your purchase. Your 10 property animation prompts are ready to download.
              </p>

              <p style="margin:0 0 28px; font-size:16px; line-height:1.7; color:#666666;">
                Use the prompts as starting points and adapt the camera movement, atmosphere and property details to suit the image you are working with.
              </p>

              <a
                href="${downloadUrl}"
                style="display:inline-block; background:#1f1f1f; color:#ffffff; text-decoration:none; padding:16px 24px; border-radius:999px; font-weight:700;"
              >
                Download your prompt pack
              </a>

              <p style="margin:28px 0 0; font-size:14px; line-height:1.7; color:#888888;">
                Keep this email somewhere easy to find so you can return to the download whenever you need it.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Email could not be sent." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Send prompt pack error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}