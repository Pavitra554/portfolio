import React from "react";
import Image from "next/image";

//Framer Motion
import { AnimateSharedLayout, motion } from "framer-motion";

//Components
import SocialButton from "../Buttons/SocialButton";

//Data
import { SOCIAL_DATA } from "../../data/socialLinks";
import SocialButtonNormal from "../Buttons/SocialButtonNormal";

//Profile Picture
import me from "../../public/me.jpg";

const NavBar = () => {
  return (
    <AnimateSharedLayout>
      <div
        className={`mt-12 flex flex-col justify-between max-w-screen-md mx-4 md:mx-auto font-noto`}
      >
        <div className=' flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <div className='rounded-full overflow-hidden'>
              <Image src={me} alt='' height={56} width={56} />
            </div>
            <div className="">
              <div className='text-neutral-100 text-3xl font-semibold'>
                Pavitra Behara
              </div>
              <div className='text-[#6e6e78] text-sm tracking-wider leading-1 font-mono'>
                Full Stack Developer
              </div>
            </div>
          </div>
          {/*----------Social Links for Desktop----------- */}
          <motion.div layout className='hidden md:flex flex-row space-x-2'>
            {SOCIAL_DATA.map((e, i) => {
              return <SocialButton key={i} link={e.link} name={e.name} />;
            })}
          </motion.div>
        </div>

        {/*----------Social Links for Mobile----------- */}
        <motion.div layout className='mt-6 flex md:hidden flex-row space-x-2'>
          {SOCIAL_DATA.map((e, i) => {
            return <SocialButtonNormal key={i} link={e.link} name={e.name} />;
          })}
        </motion.div>
      </div>
    </AnimateSharedLayout>
  );
};

export default NavBar;
