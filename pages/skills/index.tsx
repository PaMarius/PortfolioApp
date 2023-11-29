import { SkillsPage } from "@/components/skills/SkillsPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Skills() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  const pageLayout: { blackTheme: string; whiteTheme: string } = {
    blackTheme: "bg-black",
    whiteTheme: "bg-white",
  };

  return (
    <div
      className={`h-screen text-center ${getDarkThemeProps(
        themeDark,
        pageLayout
      )}`}
    >
      <SkillsPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
