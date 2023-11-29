import {
  Instagram,
  LinkedIn,
  Facebook,
  Mail,
  GitHub,
} from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type HomePageProps = { themeDark: boolean | null };

export const HomePage = ({ themeDark }: HomePageProps) => {
  const socialMedia = {
    linkedin: { icon: LinkedIn },
    github: { icon: GitHub },
    email: { icon: Mail },
    instagram: { icon: Instagram },
    facebook: { icon: Facebook },
  };
  const textToDisplay = "A Javascript Developer";
  const [displayedText, setDisplayedText] = useState<string>(textToDisplay[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [delayUpdate, setDelayUpdate] = useState<boolean>(true);

  useEffect(() => {
    if (delayUpdate) {
      setTimeout(() => {
        setDelayUpdate(false);
      }, 1000);
    } else if (currentIndex < textToDisplay.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + textToDisplay[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentIndex, textToDisplay, delayUpdate]);

  return (
    <div className="w-full h-bodyContent flex flex-col justify-center items-center gap-2 text-4xl relative">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-8xl leading-none font-medium">Hello</p>
        <p className="font-medium">I am Mariussss</p>
        <p className="font-medium">{displayedText}</p>
      </div>
      <div className="flex gap-6 items-center justify-center mt-10">
        {Object.values(socialMedia).map((socialMediaItem, index) => (
          <div key={index} className="cursor-pointer">
            <socialMediaItem.icon color="inherit" fontSize="large" />
          </div>
        ))}
      </div>
      <div
        className={`border-2 h-tenPercent w-1/6 rounded-r-3xl flex items-center justify-between font-mono absolute top-3/6 left-0 ${
          themeDark ? "bg-[#28242c]" : "bg-gray-400"
        }`}
      >
        <div className="h-full w-1/2 flex items-center justify-center text-lg">
          Located in Romania
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <div className="bg-white h-3/4 w-3/4 rounded-full flex items-center justify-center hover:animate-spin">
            <Image
              src="/romania.png"
              width={70}
              height={50}
              alt="Picture with my country map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
