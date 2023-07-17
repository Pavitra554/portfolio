import React from "react";
import Link from "next/link";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { home, projects, selectNav, work } from "../../reducers/navToggleSlice";

//React Icons
import { TbHome, TbCode, TbFileCertificate } from "react-icons/tb";
import { CgWorkAlt,CgClose } from "react-icons/cg";
import { BsFillLightningChargeFill, BsStar } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";

//React Hot Toast
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast('Under Developement!',
{
  icon: '🚧',
  style: {
    borderRadius: '8px',
    background: '#27272a',
    color: '#fff',
  },
}
);

const Navigation = () => {
  const value = useSelector(selectNav);
  const dispatch = useDispatch();
  return (
    <div className='mt-12 pb-2 flex flex-row justify-between border-b-[1px] border-[#27272a] font-noto tracking-wide'>
      <div className='flex flex-row select-none ease-linear duration-100'>
        <div
          onClick={() => dispatch(home())}
          className={
            value === "home"
              ? "flex justify-center items-center bg-[#27272a] text-zinc-100 p-2 mr-2  rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
              : "hover:bg-[#27272a]/40 p-2 mr-2  rounded-md flex justify-center items-center  text-zinc-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
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
              ? "flex justify-center items-center bg-[#27272a] text-zinc-100 p-2 mr-2  rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
              : "hover:bg-[#27272a]/40 p-2 mr-2  rounded-md flex justify-center items-center  text-zinc-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <div>
              <CgWorkAlt size={20} />
            </div>
            <div className='hidden md:flex'>Work Experience / Hackathons</div>
          </div>
        </div>

        <div
          onClick={() => dispatch(projects())}
          className={
            value === "projects"
              ? "flex justify-center items-center bg-[#27272a] text-zinc-100 p-2 mr-2  rounded-md active:scale-95 ease-linear duration-100 cursor-pointer"
              : "hover:bg-[#27272a]/40 p-2 mr-2  rounded-md flex justify-center items-center  text-zinc-400 shadow-md select-none hover:brightness-125 active:scale-95 ease-linear duration-100 cursor-pointer"
          }
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <div>
              <TbCode size={20} />
            </div>
            <div className='hidden md:flex'>Projects</div>
          </div>
        </div>
      </div>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          // Default options for specific types
        }}
      />
      <button
        onClick={notify}
        className='flex p-2 px-2.5 justify-center items-center rounded-md bg-zinc-200/10 shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer font-noto '
      >
        <BsFillLightningChargeFill
          className='text-zinc-200 animate-pulse '
          size={20}
        />
      </button>
    </div>
  );
};

export default Navigation;

//text-[#3ddc84]
