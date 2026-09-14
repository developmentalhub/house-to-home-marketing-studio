"use client";

import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh-CN", label: "中文" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  function changeLanguage(language: string) {
    if (language === "en") {
      window.location.href = pathname;
      return;
    }

    const currentPage = `https://www.realestatemediahouse.net${pathname}`;

    const translatedUrl =
      `https://translate.google.com/translate?sl=en&tl=${language}&u=` +
      encodeURIComponent(currentPage);

    window.location.href = translatedUrl;
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      <select
        aria-label="Translate website"
        defaultValue="en"
        onChange={(event) => changeLanguage(event.target.value)}
        className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-lg outline-none transition hover:border-rust"
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
          >
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}