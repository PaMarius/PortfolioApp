import "@/styles/globals.css";
import { getStorage } from "@/utils/getStorage";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const setDarkTheme = (value: boolean) =>
    localStorage.setItem("darkTheme", JSON.stringify(value));
  const isDarkTheme = getStorage<boolean>("local", "darkTheme", "boolean");
  const isFirstRender = getStorage<boolean>("session", "firstRender");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("works");
    if (!isDarkTheme && isFirstRender === null) {
      setDarkTheme(true);
      console.log("dont work");
    }
  }, []);

  if (!isMounted) return;

  return <Component {...pageProps} />;
}
