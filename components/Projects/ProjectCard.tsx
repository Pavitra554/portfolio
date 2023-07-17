import React from "react";
import Image from "next/image";
import HighText from "../About/HighText";

import { TbLink } from "react-icons/tb";
import Link from "next/link";

type props = {
  name: string;
  tags: string[];
  description: string;
  github: string;
  demo: string;
  link: any;
};

const ProjectCard: React.FC<props> = ({
  name,
  tags,
  description,
  github,
  demo,
  link,
}) => {
  return (
    <div className='flex gap-4 flex-col md:flex-row bg-[#27272a]/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-neutral-400/70  font-noto text-base  md:text-base tracking-wide md:hover:scale-110 ease-linear duration-100'>
      <div className="w-full overflow-hidden rounded-md">
        <Image
          src={link}
          alt=''
          height={600}
          className='rounded-sm'
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className='flex flex-col md:flex-row justify-between md:text-2xl text-xl ease-linear duration-150'>
          <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#b0b0b9] '>
            <div>{name}</div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap '>
          {tags.map((e, i) => {
            return (
              <div key={i} className='flex flex-row my-1 mr-2'>
                <div className='bg-[#27272a] text-[#b0b0b9] items-center px-1.5 py-1 rounded-md font-noto font-medium text-xs md:text-sm select-none'>
                  {e}
                </div>
              </div>
            );
          })}
        </div>
        <div className='pt-2 text-[#7d7d85] leading-6'>{description}</div>
        {/* <div className='pl-8 text-[#7d7d85] pt-2'>
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
      </div> */}
        <div className='flex flex-row space-x-3 text-[#7d7d85] pt-4'>
          <Link href={github} target='_blank'>
            <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#7d7d85] hover:text-[#e3e3eb] cursor-pointer'>
              <div>Github</div>
              <div>
                <TbLink size={20} />
              </div>
            </div>
          </Link>
          {demo !== "" && (
            <Link href={demo} target='_blank'>
              <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#7d7d85] hover:text-[#e3e3eb] cursor-pointer'>
                <div>Demo</div>
                <div>
                  <TbLink size={20} />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
