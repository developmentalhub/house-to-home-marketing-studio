"use client";

type SocialEmbedProps = {
  url: string;
  caption?: string;
};

function getTikTokVideoId(url: string) {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : null;
}

function getInstagramEmbedUrl(url: string) {
  const cleanUrl = url.split("?")[0].replace(/\/$/, "");
  return `${cleanUrl}/embed/`;
}

export default function SocialEmbed({
  url,
  caption = "Social media video",
}: SocialEmbedProps) {
  const isTikTok = url.includes("tiktok.com");
  const isInstagram = url.includes("instagram.com");

  if (isTikTok) {
    const videoId = getTikTokVideoId(url);

    if (!videoId) {
      return (
        <div className="flex min-h-[500px] items-center justify-center bg-black p-8 text-center text-white">
          <div>
            <p className="font-semibold">TikTok video unavailable</p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-white/60 underline"
            >
              View on TikTok
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full overflow-hidden bg-black">
        <iframe
          src={`https://www.tiktok.com/player/v1/${videoId}?controls=1&progress_bar=1&play_button=1&volume_control=1&fullscreen_button=1&loop=0&autoplay=0`}
          title={caption}
          allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="aspect-[9/16] w-full border-0"
        />
      </div>
    );
  }

  if (isInstagram) {
    return (
      <div className="relative w-full overflow-hidden bg-white">
        <iframe
          src={getInstagramEmbedUrl(url)}
          title={caption}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="aspect-[9/16] w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-[400px] items-center justify-center bg-black p-8 text-center text-white">
      <div>
        <p className="font-semibold">Video preview unavailable</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-white/60 underline"
        >
          Open video
        </a>
      </div>
    </div>
  );
}