import React from "react";
import HighText from "../About/HighText";
import WorkCard from "./WorkCard";

const Experience = () => {
  return (
    <div className='font-noto w-full'>
      <div className=' font-semibold px-1 pb-5 text-xl md:text-2xl text-slate-100 select-none'>
        Work Experience / Hackathons
      </div>
      <div className="flex flex-col  space-y-4">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <div className=' font-semibold px-1 py-5 text-xl md:text-2xl text-slate-100 select-none'>
        Volentring Experience
      </div>
      <div className="flex flex-col  space-y-4">
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default Experience;
