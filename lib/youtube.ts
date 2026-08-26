export type YouTubeCarouselItem = {
  id: string;
  title: string;
  url: string;
  category: string;
  description?: string;
  orientation: "portrait" | "landscape";
};

// Your channel handle (the part after the @ in youtube.com/@rpimages), no @.
const CHANNEL_HANDLE = "rpimages";

/**
 * Fetches the most recent uploads from the channel using the YouTube Data API.
 * Uses `forHandle` so we never need to look up the raw channel ID (UC...).
 * Results are cached for an hour via Next.js's fetch cache to avoid burning
 * through the API's daily quota on every page load.
 */
export async function fetchLatestYouTubeVideos(
  maxResults = 6
): Promise<YouTubeCarouselItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn("YOUTUBE_API_KEY is not set; skipping live video fetch.");
    return [];
  }

  try {
    // 1. Resolve the channel's uploads playlist ID from its handle.
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!channelRes.ok) {
      throw new Error(`YouTube channel lookup failed: ${channelRes.status}`);
    }

    const channelData = await channelRes.json();
    const uploadsPlaylistId =
      channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      throw new Error("Could not resolve uploads playlist for channel.");
    }

    // 2. Fetch the most recent videos from that uploads playlist.
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (!playlistRes.ok) {
      throw new Error(`YouTube playlist fetch failed: ${playlistRes.status}`);
    }

    const playlistData = await playlistRes.json();

    return (playlistData.items ?? []).map((item: any) => {
      const videoId = item.snippet.resourceId.videoId;

      return {
        id: videoId,
        title: item.snippet.title as string,
        // Assumes uploads are Shorts, matching how @rpimages posts today.
        // Switch to `https://www.youtube.com/watch?v=${videoId}` if you
        // start posting standard landscape videos too.
        url: `https://www.youtube.com/shorts/${videoId}`,
        category: "Latest",
        description: item.snippet.description
          ? String(item.snippet.description).slice(0, 140)
          : undefined,
        orientation: "portrait" as const,
      };
    });
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    // Fail quietly so a YouTube API hiccup never breaks the page.
    return [];
  }
}