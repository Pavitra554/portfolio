import Link from "next/link";
import React from "react";
import { projects_data } from "../../data/projects._data";
import ProjectCard from "./ProjectCard";

const ProjectWork = () => {
  return (
    <div className='font-noto w-full'>
      <div className=' font-semibold px-1 pb-5 text-xl md:text-2xl text-slate-100 select-none'>
        Projects
      </div>
      <div className='flex flex-col space-y-4  md:space-y-6'>
        {projects_data.map((e, i) => {
          return (
            <ProjectCard
              key={i}
              name={e.name}
              description={e.description}
              tags={e.tags}
              github={e.github}
              demo={e.demo}
              link={e.link}
            />
          );
        })}
      </div>
      <Link href={'https://github.com/Pavitra554?tab=repositories'} target="_blank">
        <div className="w-44 py-3 tracking-wider mx-auto mt-6 bg-[#27272a] hover:bg-[#27272a]/40 p-1.5 rounded-md flex justify-center items-center  text-neutral-100 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer">
          View More
        </div>
      </Link>
    </div>
  );
};

export default ProjectWork;
