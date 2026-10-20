export type PreviewProject = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  demoCode: string;
  panoramaUrl: string;
  imageUrls: string[];
};

const SUPABASE_PUBLIC_URL =
  "https://icnplmgegficqmmsoqxt.supabase.co/storage/v1/object/public/website-images";

export const previewProjects: Record<
  string,
  PreviewProject
> = {
  kitchen: {
    id: "kitchen",
    name: "Kitchen Cabinetry Presentation",
    shortName: "Kitchen",
    description:
      "Explore an interactive kitchen presentation with a 360 degree panorama and four detailed client presentation views.",
    demoCode: "KITCHEN-DEMO",
    panoramaUrl:
      `${SUPABASE_PUBLIC_URL}/preview/kitchen/Panorama-BeachSt.jpg`,
    imageUrls: [
      `${SUPABASE_PUBLIC_URL}/preview/kitchen/1.jpg`,
      `${SUPABASE_PUBLIC_URL}/preview/kitchen/2.jpg`,
      `${SUPABASE_PUBLIC_URL}/preview/kitchen/3.jpg`,
      `${SUPABASE_PUBLIC_URL}/preview/kitchen/4.jpg`,
    ],
  },

  bathroom: {
    id: "bathroom",
    name: "Bathroom Cabinetry Presentation",
    shortName: "Bathroom",
    description:
      "Explore a bathroom cabinetry presentation with a 360 degree panorama and four detailed client presentation views.",
    demoCode: "BATHROOM-DEMO",
    panoramaUrl:
      `${SUPABASE_PUBLIC_URL}/preview/bathroom/bathroom-cabinetry-panorama-green-ave.jpg`,
    imageUrls: [
      `${SUPABASE_PUBLIC_URL}/preview/bathroom/1.png`,
      `${SUPABASE_PUBLIC_URL}/preview/bathroom/2.png`,
      `${SUPABASE_PUBLIC_URL}/preview/bathroom/3.png`,
      `${SUPABASE_PUBLIC_URL}/preview/bathroom/4.png`,
    ],
  },

  "walk-in-robe": {
    id: "walk-in-robe",
    name: "Walk-In Robe Presentation",
    shortName: "Walk-In Robe",
    description:
      "Explore a walk-in robe presentation with a 360 degree panorama and four detailed client presentation views.",
    demoCode: "ROBE-DEMO",
    panoramaUrl:
      `${SUPABASE_PUBLIC_URL}/preview/walk-in-robe/PanoWIRViz.jpg`,
    imageUrls: [
      `${SUPABASE_PUBLIC_URL}/preview/walk-in-robe/1.png`,
      `${SUPABASE_PUBLIC_URL}/preview/walk-in-robe/2.png`,
      `${SUPABASE_PUBLIC_URL}/preview/walk-in-robe/3.png`,
      `${SUPABASE_PUBLIC_URL}/preview/walk-in-robe/4.png`,
    ],
  },
};

export function getPreviewProject(
  projectId: string,
) {
  return previewProjects[projectId];
}