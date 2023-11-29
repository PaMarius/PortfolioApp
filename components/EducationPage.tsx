import React, { Dispatch, SetStateAction } from "react";
import { NewHeader } from "./NewHeader";

type EducationPageProps = {
  setThemeDark: Dispatch<SetStateAction<boolean | null>>;
  themeDark: boolean | null;
};

export const EducationPage = ({
  setThemeDark,
  themeDark,
}: EducationPageProps) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <NewHeader setThemeDark={setThemeDark} themeDark={themeDark} />
      <div className="w-full h-bodyContent"></div>
    </div>
  );
};
