import React from "react";
import Link from "next/link";

//React Icons
import { SiVercel } from "react-icons/si";
const Footer = () => {
  return (
    <>
      {/* <div className='flex items-center'>
      <div className='max-w-screen-md mt-6 mx-5 md:mx-auto w-full h-[1px] bg-[#27272a]'>
        
      </div>
    </div> */}
      <div
        className={` flex flex-col justify-center items-center max-w-screen-md mx-4 md:mx-auto mt-10 mb-4 font-noto ease-linear duration-100`}
      >
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='text-sm text-[#6e6e78] '>
            Made By
            <Link
              href='https://www.linkedin.com/in/pavitra-behara/'
              target='_blank'
            >
              <span className='text-[#c4c4cc] pl-1 hover:text-zinc-100 italic ease-linear duration-100'>
                Pavitra
              </span>
            </Link>
          </div>
          <div className='text-[#6e6e78] px-2 md:flex hidden'>|</div>
          <div className='flex flex-row items-center text-sm text-[#6e6e78]'>
            <div>Deployed By </div>
            <Link href='https://vercel.com' target='_blank'>
              <span className=' flex flex-row space-x-1 text-[#c4c4cc] pl-1 hover:text-zinc-100 ease-linear duration-100'>
                <SiVercel size={15} />
                <div>Vercel</div>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
