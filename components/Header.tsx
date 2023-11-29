import { headerItems } from "@/constants/header";
import { downloadFile } from "@/utils/donwloadFile";
import { useRouter } from "next/router";
import { useState, Dispatch, SetStateAction } from "react";

type HeaderProps = {
  setThemeDark: Dispatch<SetStateAction<boolean | null>>;
  themeDark: boolean | null;
};

export const Header = ({ setThemeDark, themeDark }: HeaderProps) => {
  const [themeIsDark, setThemeIsDark] = useState<boolean | null>(themeDark);
  const router = useRouter();
  const setDarkTheme = (value: boolean) =>
    localStorage.setItem("darkTheme", JSON.stringify(value));

  const handleRoute = (pathName: string) => router.push(pathName);

  return (
    <div className="bg-[#28242c] w-full h-tenPercent flex justify-end items-center pr-6 gap-6 text-xl font-mono">
      {headerItems.map((item, index) => (
        <div
          key={index}
          className="group"
          onClick={() =>
            item.text === "Resume"
              ? downloadFile("resume.pdf", "Marius Palade Resume")
              : handleRoute(item.path)
          }
        >
          <div className="cursor-pointer text-gray-300 hover:text-white">
            {item.text}
          </div>
          <div
            className={`bg-blue-400 w-0 ${
              router.pathname === item.path ? "w-full" : "group-hover:w-1/2"
            } h-1 transition-all duration-300`}
          ></div>
        </div>
      ))}
      <div
        className={`cursor-pointer ${
          themeIsDark ? "bg-[#101340]" : "bg-[#72c7ff]"
        } h-6 w-12 rounded-full inline-flex items-center mr-6 transition duration-700 delay-150 ease-in-out`}
        onClick={() => {
          setDarkTheme(!themeIsDark);
          setThemeIsDark(!themeIsDark);
          setThemeDark(!themeIsDark);
        }}
      >
        <div
          className={`h-full w-1/2 border-[1px] rounded-full ${
            themeIsDark ? "bg-[#eafaf9]" : "bg-[#fcef87]"
          }  ${
            !themeIsDark ? "translate-x-full" : ""
          } transition duration-700 delay-150 ease-in-out`}
        />
      </div>
    </div>
  );
};
