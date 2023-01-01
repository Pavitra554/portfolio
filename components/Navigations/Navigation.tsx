import React from "react";
import Link from "next/link";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  achievements,
  home,
  projects,
  selectNav,
  work,
} from "../../reducers/navToggleSlice";

//React Icons
import { TbHome, TbCode, TbFileCertificate } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { BsStar } from "react-icons/bs";

const Navigation = () => {
  const value = useSelector(selectNav);
  const dispatch = useDispatch();
  return (
    <div className='mt-12 pb-2 flex flex-row justify-between border-b-[1px] border-[#27272a] font-noto tracking-wide'>
      <div className='flex flex-row space-x-3 select-none ease-linear duration-100'>
        <div
          onClick={() => dispatch(home())}
          className={
            value === "home"
              ? "flex justify-center items-center bg-[#27272a] text-neutral-100 p-1.5 rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
              : "hover:bg-[#27272a]/40 p-1.5 rounded-md flex justify-center items-center  text-neutral-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <div>
              <TbHome size={20} />
            </div>
            <div className='hidden md:flex'>Home</div>
          </div>
        </div>

        <div
          onClick={() => dispatch(work())}
          className={
            value === "work"
            ? "flex justify-center items-center bg-[#27272a] text-neutral-100 p-1.5 rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
            : "hover:bg-[#27272a]/40 p-1.5 rounded-md flex justify-center items-center  text-neutral-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <div>
              <CgWorkAlt size={20} />
            </div>
            <div className='hidden md:flex'>Work</div>
          </div>
        </div>

        <div
          onClick={() => dispatch(projects())}
          className={
            value === "projects"
            ? "flex justify-center items-center bg-[#27272a] text-neutral-100 p-1.5 rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
            : "hover:bg-[#27272a]/40 p-1.5 rounded-md flex justify-center items-center  text-neutral-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <div>
              <TbCode size={20} />
            </div>
            <div className='hidden md:flex'>Projects</div>
          </div>
        </div>

        <div
          onClick={() => dispatch(achievements())}
          className={
            value === "achivements"
            ? "flex justify-center items-center bg-[#27272a] text-neutral-100 p-1.5 rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
            : "hover:bg-[#27272a]/40 p-1.5 rounded-md flex justify-center items-center  text-neutral-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center space-x-2'>
            <div>
              <TbFileCertificate size={20} />
            </div>
            <div className='hidden md:flex'>Achievements</div>
          </div>
        </div>
      </div>
      <Link href={"https://github.com/Pavitra554"}>
        <div
          className={
            "bg-[#27272a] p-1.5 flex justify-center items-center rounded-md text-neutral-400 hover:text-orange-400 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer font-noto "
          }
        >
          <BsStar size={20} />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
