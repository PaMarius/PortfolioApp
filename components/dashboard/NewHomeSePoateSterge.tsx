import { HomePage } from "../HomePage";
import { NewHeader } from "../NewHeader";

export const NewHome = () => {
  return (
    <div className="w-full h-screen bg-white">
      <NewHeader />
      <HomePage />
    </div>
  );
};
