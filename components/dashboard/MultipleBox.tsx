import { useState } from "react";
import {
  EmailSVG,
  FacebookSVG,
  InstagramSVG,
  LeftArrowSVG,
  LinkedinSVG,
  RightArrowSVG,
} from "../SVGs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Instagram, LinkedIn, Facebook, Mail } from "@mui/icons-material";

export const MultipleBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const classes = {
    defaultBox:
      "border-2 bg-[#f9faf8] border-[#c0bdb6] rounded-xl drop-shadow-lg",
    justifyBetWeen: "flex items-center justify-between",
  };
  const boxesToRender = {
    firstColumn: { socialMedia: {} },
    secondColumn: {},
  };
  return (
    <div className="h-full w-full text-white flex flex-col items-center justify-center gap-8 box-border mt-10 pb-14">
      <div className={`${classes.justifyBetWeen} gap-8 w-full h-2/6 px-4`}>
        <div
          className={`${classes.defaultBox} w-2/6 h-full flex flex-col items-center justify-evenly`}
        >
          <div className="w-full flex items-center justify-evenly ">
            <div className="cursor-pointer text-black">
              <Instagram color="inherit" fontSize="large" />
            </div>
            <div className="cursor-pointer text-black">
              <LinkedIn color="inherit" fontSize="large" />
            </div>
          </div>
          <div className="w-full flex items-center justify-evenly">
            <div className="cursor-pointer text-black">
              <Facebook color="inherit" fontSize="large" />
            </div>
            <div className="cursor-pointer text-black">
              <Mail color="inherit" fontSize="large" />
            </div>
          </div>
        </div>
        <div className={`${classes.defaultBox} w-4/6 h-full`}></div>
      </div>
      <div className={`${classes.justifyBetWeen} gap-8 w-full h-4/6 px-4`}>
        <div
          className={`${classes.defaultBox} w-3/4 h-full flex items-center justify-between p-4`}
        >
          <div
            className="cursor-pointer"
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          >
            <LeftArrowSVG width="50px" height="50px" />
          </div>
          {/* <div className="w-full h-full bg-red-900 mx-4"></div> */}
          <div className="w-full h-full bg-black">
            {/* <Image
              src="/videogif.gif"
              width={1000}
              height={100}
              alt="Picture with my country map"
            /> */}
            <Carousel
              selectedItem={currentIndex}
              onChange={handleChangeSlide}
              infiniteLoop={true}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
            >
              <div className=" h-full bg-red-400">
                <p>Proiect 1</p>
              </div>
              <div className="h-full bg-red-600">
                <p>Proiect 2</p>
              </div>
              <div className="h-full bg-yellow-600">
                <p>Proiect 2.5</p>
              </div>
              <div className="h-full bg-green-600">
                <p>Proiect 3</p>
              </div>
              <div className="h-full bg-blue-600">
                <p>Proiect 4</p>
              </div>
            </Carousel>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          >
            <RightArrowSVG width="50px" height="50px" />
          </div>
        </div>
        <div
          className={`w-1/4 h-full ${classes.justifyBetWeen} flex-col gap-8`}
        >
          <div className={`${classes.defaultBox} w-full h-1/2`}></div>
          <div className={`${classes.defaultBox} w-full h-1/2`}></div>
        </div>
      </div>
    </div>
  );
};
