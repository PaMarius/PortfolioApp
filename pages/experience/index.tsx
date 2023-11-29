import { ExperiencePage } from "@/components/ExperiencePage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Experiencec() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <ExperiencePage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
