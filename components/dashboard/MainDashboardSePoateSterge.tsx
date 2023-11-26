import { NewHome } from "./NewHomeSePoateSterge";
import { TopSection } from "./TopSection";

export const MainDashboard = () => {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center animate-slide-in text-white">
      <NewHome />
      {/* <TopSection /> */}
    </div>
  );
};
