import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Projects() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  const pageLayout: { blackTheme: string; whiteTheme: string } = {
    blackTheme: "bg-black",
    whiteTheme: "bg-white",
  };

  return (
    <div
      className={`h-full w-full ${getDarkThemeProps(themeDark, pageLayout)}`}
    >
      <ProjectsPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
