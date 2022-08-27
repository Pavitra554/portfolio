import React from "react";

//Framer Motion
import { motion } from "framer-motion";

//Components

//icons
import { MoonIcon, SunIcon, MenuAlt4Icon,XIcon } from "@heroicons/react/outline";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectNavOpen, togglenav } from "../../reducers/navToggleSlice";

//Data
import { NAV_DATA } from "../../data/navlinks";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
  const value = useSelector(selectNavOpen);
  const dispatch = useDispatch();
  return (
    <div className='w-full flex sm:hidden '>
      <button onClick={() => dispatch(togglenav())} className='ml-2 z-50'>
        {value?<XIcon className='h-6 w-6 ' />:<MenuAlt4Icon className='h-6 w-6 ' />}
      </button>
      {value && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={() => dispatch(togglenav())}
            className='h-screen w-full absolute bg-neutral-900 left-0 top-0 dark:bg-opacity-5 bg-opacity-20 backdrop-blur-md'
          ></motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2, type: "tween" }}
            className='h-screen w-[70%] absolute bg-neutral-100 dark:bg-neutral-900 left-0 top-0 '
          >
            <div className='h-full mx-5 mt-12 flex flex-col'>
              {NAV_DATA.map((e, i) => {
                return <MobileNavLink key={i} i={i} name={e.name} link={e.href} />;
              })}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
