import { Dashboard } from "@/components/dashboard/Dashboard";
import { getDarkThemeProps } from "@/utils/getDarkThemeProps";
import { getStorage } from "@/utils/getStorage";
import { useState } from "react";

export default function Home() {
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
      <Dashboard setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
}
