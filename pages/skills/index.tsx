import { SkillsPage } from "@/components/SkillsPage";
import { useState } from "react";

export default function Skills() {
  const [themeDark, setThemeDark] = useState<boolean>(true);
  return (
    <div
      className={`h-screen text-center ${themeDark ? "bg-black" : "bg-white"}`}
    >
      <SkillsPage setThemeDark={setThemeDark} />
    </div>
  );
}
