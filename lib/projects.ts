export type ProjectConfig = {
  id: string;
  name: string;
  subtitle: string;
  storageFolder: string;
  panoramaFile: string;
  presentationFiles: string[];
};

export const projects: Record<string, ProjectConfig> = {
  bs549: {
    id: "bs549",
    name: "Beach St – Kitchen",
    subtitle: "Interactive architectural design presentation",
    storageFolder: "customers/beach-street",
    panoramaFile: "Pano-BeachSt.jpg",
    presentationFiles: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
    ],
  },
};

export function getProject(projectId: string) {
  return projects[projectId];
}