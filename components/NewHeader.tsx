"use client";
import { getStorage } from "@/utils/getStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const NewHeader = ({ setThemeDark }) => {
  const isDarkTheme = getStorage("local", "darkTheme", "boolean");
  const [themeIsDark, setThemeIsDark] = useState<boolean>(isDarkTheme);
  console.log(themeIsDark);
  const router = useRouter();
  const setDarkTheme = (value: boolean) =>
    localStorage.setItem("darkTheme", JSON.stringify(value));

  // useEffect(() => {
  //   const isDarkThemeSet = getStorage("session", "darkTheme");
  //   if (isDarkThemeSet) {
  //     // setThemeIsDark(isDarkTheme);
  //     setThemeDark(isDarkTheme);
  //   } else {
  //     setDarkTheme(true);
  //   }
  // }, []);
  const headerItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Skills", path: "/skills" },
    { text: "Education", path: "/education" },
    { text: "Experience", path: "/experience" },
    { text: "Projects", path: "/projects" },
    { text: "Resume", path: "/resume" },
  ];
  const handleRoute = (pathName: string) => router.push(pathName);
  return (
    <div className="bg-[#28242c] w-full h-tenPercent flex justify-end items-center pr-6 gap-6 text-xl font-mono">
      {headerItems.map((item, index) => (
        <div
          key={index}
          className="group"
          onClick={() => handleRoute(item.path)}
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
