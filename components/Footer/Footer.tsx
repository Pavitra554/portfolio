import React from 'react';
import Link from 'next/link';

//React Icons
import {SiVercel,SiSpotify} from 'react-icons/si';
import { SOCIAL_DATA } from '../../data/socialLinks';
import SocialButtonFooter from '../Buttons/SocialButtonFooter';


const Footer = () => {
  return (
    <>
    <div className='max-w-screen-md mt-12 mx-auto w-full h-[1px] bg-neutral-700/80'></div>
    <div
      className={`bg-neutral-800/40 hover:bg-neutral-800/60 shadow-md mb-6 p-4 rounded-lg relative bottom-0 mt-6 flex flex-col justify-between max-w-screen-md mx-6 md:mx-auto font-noto ease-linear duration-100`}
    >
      <div className='flex flex-col md:flex-row justify-between mb-5'>
        <div className=' flex flex-row space-x-2 items-center text-md text-neutral-500'>
          <SiSpotify color='#1DB954' size={25} />
          <div className='text-neutral-200'>Not Playing</div>
          <div>- Spotify</div>
        </div>

        <div className='flex flex-row mt-4 md:mt-0 space-x-3'>
          {SOCIAL_DATA.map((e, i) => {
            return <SocialButtonFooter key={i} link={e.link} name={e.name} />;
          })}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='text-sm text-neutral-500 '>
          Made By
          <Link href='https://www.linkedin.com/in/pavitra-behara/'>
            <span className='text-neutral-400 pl-1 hover:text-neutral-100 italic ease-linear duration-100'>
              @Pavitra
            </span>
          </Link>
        </div>

        <div className='flex flex-row items-center text-sm text-neutral-500'>
          <div>Deployed By </div>
          <Link href='https://vercel.com'>
            <span className=' flex flex-row space-x-1 text-neutral-400 pl-1 hover:text-neutral-100 ease-linear duration-100'>
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