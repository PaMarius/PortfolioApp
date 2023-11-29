import { AboutPage } from "@/components/about/AboutPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function About() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <AboutPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
