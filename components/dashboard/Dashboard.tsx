"use client";
import React, { useState, useEffect } from "react";
import { GreetingComponent } from "./GreetingComponent";
import { NewHeader } from "../NewHeader";
import { HomePage } from "../HomePage";
import { getStorage } from "@/utils/getStorage";

export const Dashboard = ({ setThemeDark, themeDark, isDarkThemeInitial }) => {
  console.log(isDarkThemeInitial, "aiciicii");
  const greetings = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo", "Salut"];
  const [showHello, setShowHello] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  <div className="w-full h-bodyContent">About </div>;

  useEffect(() => {
    if (firstRender) {
      setShowHello(true);
      const interval = setInterval(
        () => {
          if (currentGreetingIndex < greetings.length - 1) {
            setCurrentGreetingIndex(currentGreetingIndex + 1);
          } else {
            clearInterval(interval);
            setTimeout(() => {
              sessionStorage.setItem("firstRender", JSON.stringify(false));
              setShowOtherComponent(true);
              setShowHello(false);
            }, 2000);
          }
        },
        currentGreetingIndex === 0 ? 700 : 200
      );
      return () => clearInterval(interval);
    } else {
      setShowOtherComponent(true);
    }
  }, [currentGreetingIndex, greetings.length, firstRender]);

  useEffect(() => {
    const isFirstRender = getStorage("session", "firstRender");

    if (getStorage("session", "firstRender")) {
      const parsedData = JSON.parse(isFirstRender as string);
      setFirstRender(parsedData);
    }
  }, []);

  const isDarkTheme = getStorage("session", "darkTheme", "boolean");
  console.log(isDarkTheme);

  return (
    <div className="flex h-full w-full justify-center items-center">
      {showHello && firstRender && (
        <GreetingComponent
          showHello={showHello}
          greetings={greetings}
          currentGreetingIndex={currentGreetingIndex}
        />
      )}
      {showOtherComponent && (
        <div
          className={`flex w-full h-full flex-col justify-center items-center ${
            firstRender ? "animate-slide-in" : null
          }`}
        >
          <NewHeader setThemeDark={setThemeDark} isDarkTheme={isDarkTheme} />
          <HomePage themeDark={themeDark} />
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const isDarkThemeInitial = getStorage("session", "darkTheme", "boolean");

  return {
    props: { isDarkThemeInitial },
  };
};

export default Dashboard;
