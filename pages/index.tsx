import { Dashboard } from "@/components/dashboard/Dashboard";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Home() {
  const isDarkTheme = getStorage("session", "darkTheme");

  const [themeDark, setThemeDark] = useState<boolean>(isDarkTheme);

  return (
    <div className={`h-screen text-center ${getDarkThemeProps(themeDark)}`}>
      <Dashboard setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
