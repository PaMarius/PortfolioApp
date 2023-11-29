export const getDarkThemeProps = (
  isDarkThemeActive: boolean | null,
  pageLayout: { blackTheme: string; whiteTheme: string }
) => {
  if (isDarkThemeActive) {
    return `${pageLayout.blackTheme} text-white transition duration-700 delay-150 ease-in-out`;
  } else {
    return "bg-white text-black transition duration-700 delay-150 ease-in-out";
  }
};
