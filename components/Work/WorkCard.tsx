import React from "react";
import Link from "next/link";
import HighText from "../About/HighText";

import { TbLink } from "react-icons/tb";

type props = {
  name: string;
  cer_link: string;
  date: string;
  proj: string;
  proj_link: string;
  description: string;
  tags: string[];
  points: string[];
};

const WorkCard: React.FC<props> = ({
  name,
  cer_link,
  date,
  proj,
  proj_link,
  description,
  tags,
  points,
}) => {
  return (
    <div className='bg-[#27272a]/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-neutral-400/70  font-noto text-base  md:text-base tracking-wide  ease-linear duration-100'>
      <div className='flex flex-col md:flex-row justify-between md:text-2xl text-xl ease-linear duration-150'>
        <div className='flex flex-row space-x-1 items-center ease-linear duration-100 text-[#b0b0b9] hover:text-[#e3e3eb] cursor-pointer'>
          <Link href={cer_link} target='_blank'>
            <div>{name}</div>
          </Link>
          <div className="hidden md:flex">
            <TbLink size={20} />
          </div>
        </div>
        <div className='ease-linear duration-100 text-xs md:text-base text-[#7d7d85] cursor-pointer'>
          {date}
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
      <div className='pl-8 text-[#7d7d85] pt-2'>
        <ul className='list-disc space-y-1'>
          {points.map((e, i) => {
            if (i == 0) {
              return (
                <li key={i}>
                  {e}{" "}
                  <Link href={proj_link} target='_blank'>
                    <HighText>{proj}</HighText>
                  </Link>
                </li>
              );
            } else {
              return <li key={i}>{e}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
