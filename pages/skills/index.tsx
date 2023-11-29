import { SkillsPage } from "@/components/SkillsPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Skills() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <SkillsPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
