import Image from "next/image";
import { LineBarMenu } from "./LineBarMenu";
import { MultipleBox } from "./MultipleBox";

export const TopSection = () => {
  return (
    <div className="h-screen w-full bg-[#ecede7] flex flex-col gap-4 items-center justify-between">
      <div className="w-full h-3/4 flex items-center justify-between gap-2">
        <div className="w-1/4 h-full flex flex-col items-start justify-around">
          <div className="h-1/2 w-full "></div>
          <div className="h-1/2 w-full ">
            <div className="bg-[#1c1d20] h-1/3 w-1/2 rounded-r-3xl flex items-center justify-between font-mono">
              <div className="h-full w-1/2 flex items-center justify-center">
                Located in Romania
              </div>
              <div className="h-full w-1/2 flex justify-center items-center">
                <div className="bg-[#edeef0] h-3/4 w-3/4 rounded-full flex items-center justify-center hover:animate-spin">
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
        </div>
        <div className="h-full w-2/4">
          <MultipleBox />
        </div>
        <div className="w-1/4 bg-blasck h-full">
          <LineBarMenu />
        </div>
      </div>
      <div className="h-1/4 w-full text-presentationName leading-none font-light text-gray-500 animate-bounce">
        Hello
      </div>
    </div>
  );
};
