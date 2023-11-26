export const getDarkThemeProps = (isDarkThemeActive: boolean) => {
  if (isDarkThemeActive) {
    return "bg-black text-white transition duration-700 delay-150 ease-in-out";
  } else {
    return "bg-white text-black transition duration-700 delay-150 ease-in-out";
  }
};
