import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const PROJECT_ACCESS_CODE = "BEACH-549";

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.error(
        "Missing Supabase server environment variables.",
      );

      return NextResponse.json(
        {
          error:
            "Supabase server configuration is missing.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const enteredCode = String(
      body?.code ?? "",
    )
      .trim()
      .toUpperCase();

    if (enteredCode !== PROJECT_ACCESS_CODE) {
      return NextResponse.json(
        {
          error: "Invalid access code.",
        },
        { status: 401 },
      );
    }

    const supabaseAdmin = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const files = [
      "beach-street/Pano-BeachSt.jpg",
      "beach-street/1.jpg",
      "beach-street/2.jpg",
      "beach-street/3.jpg",
      "beach-street/4.jpg",
    ];

    const { data, error } =
      await supabaseAdmin.storage
        .from("customers")
        .createSignedUrls(
          files,
          60 * 60,
        );

    if (error) {
      console.error(
        "Supabase signed URL error:",
        error.message,
      );

      return NextResponse.json(
        {
          error:
            "Could not load the project files.",
        },
        { status: 500 },
      );
    }

    const panoramaUrl =
      data?.[0]?.signedUrl ?? "";

    const presentationUrls =
      data
        ?.slice(1)
        .map((item) => item.signedUrl)
        .filter(Boolean) ?? [];

    return NextResponse.json({
      panoramaUrl,
      presentationUrls,
    });
  } catch (error) {
    console.error(
      "Project asset route error:",
      error instanceof Error
        ? error.message
        : "Unknown error",
    );

    return NextResponse.json(
      {
        error:
          "Could not load the project.",
      },
      { status: 500 },
    );
  }
}