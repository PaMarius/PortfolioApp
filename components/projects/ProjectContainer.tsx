import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LeftArrowSVG, RightArrowSVG } from "../SVGs";

type ProjectContainerProps = {
  project: {
    text: string[];
    content: { imagePath: string; scale: "landscape" | "portrait" }[];
  };
  projectName: string;
};

export const ProjectContainer = ({
  project,
  projectName,
}: ProjectContainerProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/githubApp/landingPage.gif",
    "/githubApp/projectMenu.gif",
    "/githubApp/codeScreen.png",
    "/githubApp/codeEditorScreen.png",
    "/githubApp/commitsScreen.png",
  ];

  function capitalizeAndReplace(str: string): string {
    const words = str.split("_");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  }

  function extractFirstWordAndRest(text: string): [string, string] {
    const words = text.trim().split(/\s+/);
    const firstWord = words.length > 0 ? words[0] : "";
    const restOfText =
      words.length > 1 ? text.slice(words[0].length).trim() : "";
    return [firstWord, restOfText];
  }

  const handleIndex = (number: number) => {
    if (number > 0) {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    } else {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-3/5 h-[600px] bg-gray-300 shadow-gray-600 shadow-2xl rounded-xl flex flex-col justify-center items-center p-4 gap-2 ">
        <div className={`text-black font-bold text-lg font-mono`}>
          {capitalizeAndReplace(projectName)}
        </div>
        <div className="w-full h-full flex items-center justify-center gap-4 ">
          <div className="w-1/2 h-full bg-white rounded-lg flex items-center justify-between p-4 ">
            <div
              className="cursor-pointer"
              onClick={() => {
                handleIndex(-1);
              }}
            >
              <LeftArrowSVG width="30px" height="30px" />
            </div>
            <div
              className={`cursor-pointer flex items-center justify-center relative w-full h-full e ${
                project.content[currentImage].scale === "landscape"
                  ? "hover:scale-200"
                  : "hover:scale-150"
              }`}
            >
              <Image
                src={project.content[currentImage].imagePath}
                alt="Picture with my country map"
                quality={100}
                sizes="100vw"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleIndex(1);
              }}
            >
              <RightArrowSVG width="30px" height="30px" />
            </div>
          </div>
          <div className="w-1/2 h-full overflow-y-auto">
            <div className="w-full h-full bg-gray-600 rounded-lg  flex flex-col gap-2 p-4 overflow-y-auto">
              {project.text.map((text, index) => (
                <p key={index}>
                  <span className="ml-4">
                    {`${extractFirstWordAndRest(text)[0]} ${
                      extractFirstWordAndRest(text)[1]
                    }`}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
