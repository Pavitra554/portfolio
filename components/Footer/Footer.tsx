import React from 'react';
import Link from 'next/link';

//React Icons
import {SiVercel} from 'react-icons/si';
import { SOCIAL_DATA } from '../../data/socialLinks';
import SocialButtonFooter from '../Buttons/SocialButtonFooter';
import {BsFillLightningChargeFill} from 'react-icons/bs';


const Footer = () => {
  return (
    <>
    <div className='flex items-center'>
      <div className='max-w-screen-md mt-12 mx-5 md:mx-auto w-full h-[1px] bg-[#27272a]'>
        
      </div>
    </div>
    <div
      className={`bg-[#27272a]/40 hover:bg-[#27272a]/50 shadow-md mb-6 p-4 rounded-lg relative bottom-0 mt-4 flex flex-col justify-between max-w-screen-md mx-4 md:mx-auto font-noto ease-linear duration-100`}
    >
      <div className='flex flex-col md:flex-row justify-between mb-5'>
        <div className=' flex flex-row space-x-2 items-center text-md text-neutral-500'>
          <div className='flex justify-center items-center h-6 w-6 rounded-full bg-[#3ddc84]/10'>
            <BsFillLightningChargeFill className="text-[#3ddc84] animate-pulse" size={15}/>
          </div>
          <div className='text-[#c4c4cc]'>Learning REST</div>
          <div className='text-[#6e6e78]'>- Status</div>
        </div>

        <div className='flex flex-row mt-4 md:mt-0 space-x-3'>
          {SOCIAL_DATA.map((e, i) => {
            return <SocialButtonFooter key={i} link={e.link} name={e.name} />;
          })}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='text-sm text-[#6e6e78] '>
          Made By
          <Link href='https://www.linkedin.com/in/pavitra-behara/'>
            <span className='text-[#c4c4cc] pl-1 hover:text-neutral-100 italic ease-linear duration-100'>
              @Pavitra
            </span>
          </Link>
        </div>

        <div className='flex flex-row items-center text-sm text-[#6e6e78]'>
          <div>Deployed By </div>
          <Link href='https://vercel.com'>
            <span className=' flex flex-row space-x-1 text-[#c4c4cc] pl-1 hover:text-neutral-100 ease-linear duration-100'>
              <SiVercel size={15} />
              <div>Vercel</div>
            </span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer