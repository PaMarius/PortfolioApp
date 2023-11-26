"use client";

import { AboutPage } from "@/components/AboutPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { useState } from "react";

export default function About() {
  const [themeDark, setThemeDark] = useState<boolean>(true);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <AboutPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
