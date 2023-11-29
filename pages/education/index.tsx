import { EducationPage } from "@/components/education/EducationPage";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Education() {
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const [themeDark, setThemeDark] = useState<boolean | null>(isDarkTheme);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <EducationPage setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
