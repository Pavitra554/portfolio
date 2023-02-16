import React from "react";
import { work_exp } from "../../data/work_exp";
import HighText from "../About/HighText";
import WorkCard from "./WorkCard";

const Experience = () => {
  return (
    <div className='font-noto w-full'>
      <div className=' font-semibold px-1 pb-5 text-xl md:text-2xl text-slate-100 select-none'>
        Experience
      </div>
      <div className="flex flex-col space-y-4  md:space-y-6">
        {work_exp.map((e,i)=>{
          return(
            <WorkCard 
              name={e.name} 
              cer_link={e.cer_link} 
              date={e.date} 
              description={e.description}
              proj_link={e.proj_link}
              tags={e.tags}
              points={e.points}
              proj={e.proj}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Experience;
