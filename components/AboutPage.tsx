"use client";
import { getStorage } from "@/utils/getStorage";
import { NewHeader } from "./NewHeader";

export const AboutPage = ({ setThemeDark, themeDark }) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <NewHeader setThemeDark={setThemeDark} />
      <div className="w-full h-bodyContent">About page</div>
    </div>
  );
};
