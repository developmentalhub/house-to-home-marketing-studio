"use client";

import {
  FormEvent,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  ArrowRight,
  FolderOpen,
  LockKeyhole,
  X,
} from "lucide-react";

export default function ProjectAccessPanel() {
  const router = useRouter();

  const [open, setOpen] =
    useState(false);

  const [projectCode, setProjectCode] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const cleanedCode =
      projectCode
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    if (!cleanedCode) {
      setError(
        "Please enter your project code.",
      );

      return;
    }

    const validProjectCode =
      /^[a-z]{2}\d{3}$/.test(
        cleanedCode,
      );

    if (!validProjectCode) {
      setError(
        "Project codes look like BS549 or GA201.",
      );

      return;
    }

    setError("");

    router.push(
      `/${cleanedCode}`,
    );
  }

  return (
    <>
      {/* DESKTOP TAB */}
      <button
        type="button"
        onClick={() =>
          setOpen(true)
        }
        className="fixed right-0 top-1/2 z-[90] hidden -translate-y-1/2 rounded-l-2xl border border-r-0 border-white/10 bg-[#171717] px-4 py-6 text-white shadow-2xl transition hover:bg-rust lg:flex lg:flex-col lg:items-center lg:gap-3"
        aria-label="Access your project"
      >
        <FolderOpen
          size={20}
        />

        <span
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{
            writingMode:
              "vertical-rl",
            transform:
              "rotate(180deg)",
          }}
        >
          Access your project
        </span>
      </button>

      {/* MOBILE BUTTON */}
      <button
        type="button"
        onClick={() =>
          setOpen(true)
        }
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3.5 font-semibold text-white shadow-2xl lg:hidden"
      >
        <FolderOpen
          size={17}
        />

        Project access
      </button>

      {/* BACKDROP */}
      {open && (
        <button
          type="button"
          aria-label="Close project access"
          onClick={() =>
            setOpen(false)
          }
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* SIDE PANEL */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-full w-full max-w-md flex-col bg-[#f4f1eb] shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-rust">
              Existing client
            </p>

            <p className="mt-1 font-display text-xl font-semibold text-[#181818]">
              Project access
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setOpen(false)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#181818] transition hover:bg-[#171717] hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center px-7 py-10 md:px-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-white">
            <LockKeyhole
              size={20}
            />
          </div>

          <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-rust">
            Find your presentation
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#181818]">
            Already have a project with us?
          </h2>

          <p className="mt-5 leading-7 text-black/55">
            Enter the project code
            provided with your
            presentation.
          </p>

          <p className="mt-2 text-sm leading-6 text-black/40">
            For example: BS549 or
            GA201.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >
            <label
              htmlFor="project-code"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
            >
              Project code
            </label>

            <input
              id="project-code"
              type="text"
              value={projectCode}
              onChange={(
                event,
              ) => {
                setProjectCode(
                  event.target.value,
                );

                setError("");
              }}
              autoComplete="off"
              autoCapitalize="characters"
              placeholder="e.g. GA201"
              className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-lg font-semibold uppercase tracking-[0.08em] text-[#181818] outline-none transition placeholder:font-normal placeholder:normal-case placeholder:tracking-normal placeholder:text-black/25 focus:border-rust"
            />

            {error && (
              <p className="mt-3 text-sm text-rust">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-4 font-semibold text-white transition hover:bg-rust"
            >
              Open my project

              <ArrowRight
                size={18}
              />
            </button>
          </form>

          <div className="mt-8 border-t border-black/10 pt-6">
            <p className="text-sm leading-6 text-black/40">
              Your project code
              takes you to your
              presentation. You may
              then be asked for the
              private access code
              supplied with your
              project.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}