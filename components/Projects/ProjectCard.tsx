import React from "react";
import HighText from "../About/HighText";

import { TbLink } from "react-icons/tb";

const ProjectCard = () => {
  return (
    <div className='bg-[#27272a]/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-neutral-400/70  font-noto text-base  md:text-base tracking-wide  ease-linear duration-100'>
      <div className='flex flex-col md:flex-row justify-between md:text-2xl text-xl ease-linear duration-150'>
        <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#b0b0b9] hover:text-[#e3e3eb] cursor-pointer'>
          <div>Project name</div>
        </div>
      </div>
      <div className='flex flex-row my-1'>
        <div className='bg-[#27272a] text-[#b0b0b9] items-center px-1.5 py-1 rounded-md font-noto font-medium text-sm select-none'>
          Next.js
        </div>
      </div>
      <div className='pt-2 text-[#7d7d85] leading-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        officiis dolore autem magnam doloremque, debitis perferendis amet
        explicabo quo. Velit libero nemo cumque corporis doloribus.
      </div>
      <div className='pl-8 text-[#7d7d85] pt-2'>
        <ul className='list-disc space-y-1'>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            harum. Tenetur, modi?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            harum. Tenetur, modi?
          </li>
        </ul>
      </div>
      <div className='flex flex-row space-x-3 text-[#7d7d85] pt-4'>
        <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#7d7d85] hover:text-[#e3e3eb] cursor-pointer'>
          <div>Github</div>
          <div>
            <TbLink size={20} />
          </div>
        </div>
        <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#7d7d85] hover:text-[#e3e3eb] cursor-pointer'>
          <div>Demo</div>
          <div>
            <TbLink size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
