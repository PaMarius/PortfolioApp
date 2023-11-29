import { AboutPage } from "@/components/about/AboutPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function About() {
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
      <AboutPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
