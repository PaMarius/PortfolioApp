"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { NewHeader } from "./NewHeader";
import Image from "next/image";
import { LeftArrowSVG, RightArrowSVG } from "./SVGs";

type ExperiencePageProps = {
  setThemeDark: Dispatch<SetStateAction<boolean | null>>;
  themeDark: boolean | null;
};

export const ExperiencePage = ({
  setThemeDark,
  themeDark,
}: ExperiencePageProps) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <NewHeader setThemeDark={setThemeDark} themeDark={themeDark} />
      <div className="w-full h-bodyContent"></div>
    </div>
  );
};
