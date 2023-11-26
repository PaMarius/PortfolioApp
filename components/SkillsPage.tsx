import { NewHeader } from "./NewHeader";

export const SkillsPage = ({ setThemeDark }) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <NewHeader setThemeDark={setThemeDark} />
      <div className="w-full h-bodyContent"></div>
    </div>
  );
};
