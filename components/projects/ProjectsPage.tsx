import React, { Dispatch, SetStateAction } from "react";
import { NewHeader } from "../NewHeader";
import { ProjectContainer } from "./ProjectContainer";
import { projects } from "@/constants/projectsContent";

type ProjectsPageProps = {
  setThemeDark: Dispatch<SetStateAction<boolean | null>>;
  themeDark: boolean | null;
};

export const ProjectsPage = ({
  setThemeDark,
  themeDark,
}: ProjectsPageProps) => {
  return (
    <div className="flex flex-col h-full w-full justify-between items-center">
      <NewHeader setThemeDark={setThemeDark} themeDark={themeDark} />
      <div className="w-full h-full flex flex-col overflow-y-auto">
        <div className="text-center w-auto font_vivaSans mt-4 font-bold ">
          Personal projects
        </div>
        <div className="w-full h-full flex flex-col items-center gap-16 mt-10 mb-32">
          {Object.entries(projects).map((project, index) => (
            <ProjectContainer
              project={project[1]}
              projectName={project[0]}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
