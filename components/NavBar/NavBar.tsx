import React from "react";

//Framer Motion
import { AnimateSharedLayout, motion } from "framer-motion";

//Components
import NavLink from "./NavLink";
import MobileNav from "../MobileNav/MobileNav";
import SocialButton from "../Buttons/SocialButton";

//icons
import { MoonIcon, SunIcon, MenuAlt4Icon } from "@heroicons/react/outline";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggle } from "../../reducers/themeSlice";

//Data
import { NAV_DATA } from "../../data/navlinks";
import { SOCIAL_DATA } from "../../data/socialLinks";
import SocialButtonNormal from "../Buttons/SocialButtonNormal";

const NavBar = () => {
  const value = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <AnimateSharedLayout>
      <div
        className={`mt-12 flex flex-col justify-between max-w-screen-md mx-8 md:mx-auto font-noto selection:bg-[#3dda84] selection:text-n9`}
      >
        <div className='max-h-10 flex flex-row justify-between'>
          <div className='text-neutral-100 text-3xl font-semibold'>
            Pavitra Behara
          </div>
          {/*----------Social Links for Desktop----------- */}
          <motion.div layout className='hidden md:flex flex-row space-x-2'>
            {SOCIAL_DATA.map((e, i) => {
              return <SocialButton key={i} link={e.link} name={e.name} />;
            })}
          </motion.div>
        </div>
        <div className='text-neutral-400 text-sm tracking-wider leading-4 font-mono'>
          Developer / Programmer
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
