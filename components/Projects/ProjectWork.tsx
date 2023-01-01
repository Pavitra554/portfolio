import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectWork = () => {
  return (
    <div className='font-noto w-full'>
      <div className=' font-semibold px-1 pb-5 text-xl md:text-2xl text-slate-100 select-none'>
        Projects
      </div>
      <div className='flex flex-col  space-y-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectWork;
