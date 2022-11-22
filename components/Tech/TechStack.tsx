import React from "react";
import Badge from "./Badge";

const TechStack = () => {
  return (
    <div className='mt-10'>
      <div className='text-noto font-semibold px-3 md:px-4 py-2 text-lg md:text-2xl text-neutral-100 select-none'>
        Tech Stack
      </div>
      <div className='flex flex-row flex-wrap  bg-neutral-800/20 hover:bg-neutral-800/30 p-3 md:p-4 rounded-lg text-neutral-400/70  text-noto text-base tracking-wide  ease-linear duration-100'>
        <Badge colors="bg-gray-400/10 text-gray-300" text="Next.js"/>
        <Badge colors="bg-blue-400/10 text-blue-400" text="React Native"/>
        <Badge colors="bg-sky-400/10 text-sky-400" text="React.js"/>
        <Badge colors="bg-blue-500/10 text-blue-500" text="Flutter"/>
        <Badge colors="bg-slate-400/10 text-slate-300" text="Express.js"/>
        <Badge colors="bg-green-600/10 text-green-500" text="Node.js"/>
        <Badge colors="bg-green-400/10 text-green-300" text="MongoDB"/>
        <Badge colors="bg-sky-400/10 text-sky-400" text="Tailwind Css"/>
        <Badge colors="bg-pink-500/10 text-pink-500" text="Framer Motion"/>
        <Badge colors="bg-purple-500/10 text-purple-500" text="Redux"/>
        <Badge colors="bg-blue-500/10 text-blue-500" text="Dart"/>
        <Badge colors="bg-yellow-400/10 text-yellow-300" text="Javascript"/>
        <Badge colors="bg-orange-400/10 text-orange-300" text="Git"/>
        <Badge colors="bg-blue-600/10 text-blue-600" text="Typescript"/>
        <Badge colors="bg-red-500/10 text-red-500" text="Java"/>
        <Badge colors="bg-orange-400/10 text-orange-300" text="Firebase"/>
      </div>
    </div>
  );
};

export default TechStack;
