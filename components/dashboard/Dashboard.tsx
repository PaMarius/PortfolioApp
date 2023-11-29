"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { GreetingComponent } from "./GreetingComponent";
import { NewHeader } from "../NewHeader";
import { HomePage } from "../HomePage";
import { getStorage } from "@/utils/getStorage";

type DashboardProps = {
  setThemeDark: Dispatch<SetStateAction<boolean | null>>;
  themeDark: boolean | null;
};

export const Dashboard = ({ setThemeDark, themeDark }: DashboardProps) => {
  const greetings = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo", "Salut"];
  const isFirstRender = getStorage<boolean>("session", "firstRender");
  const [showHello, setShowHello] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [firstRender] = useState<boolean | null>(isFirstRender);

  useEffect(() => {
    if (firstRender === null) {
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
  return (
    <div className="flex h-full w-full justify-center items-center">
      {showHello && firstRender === null && (
        <GreetingComponent
          showHello={showHello}
          greetings={greetings}
          currentGreetingIndex={currentGreetingIndex}
        />
      )}
      {showOtherComponent && (
        <div
          className={`flex w-full h-full flex-col justify-center items-center ${
            firstRender === null ? "animate-slide-in" : null
          }`}
        >
          <NewHeader setThemeDark={setThemeDark} themeDark={themeDark} />
          <HomePage themeDark={themeDark} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
