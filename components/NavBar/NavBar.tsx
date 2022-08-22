import React from "react";
import Link from "next/link";

//Framer Motion
import { motion } from "framer-motion";

//Components
import NavLink from "./NavLink";

//icons
import { MoonIcon, SunIcon, MenuAlt4Icon } from "@heroicons/react/outline";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggle } from "../../reducers/themeSlice";

const NAV_DATA = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/Projects",
    name: "Projects",
  },
  {
    href: "/Achivements",
    name: "Achivements",
  },
];
const NavBar = () => {
  const value = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className='flex w-full bg-neutral-100 dark:bg-neutral-900 justify-center p-2 dark:text-neutral-400 text-neutral-900 ease-linear  duration-150 shadow-xl sticky top-0'
    >
      <nav className='w-full max-w-5xl flex flex-row justify-between items-center'>
        <div className='flex md:hidden'>
          <MenuAlt4Icon className='h-6 w-6 ' />
        </div>
        <div className=' flex-row hidden md:flex'>
          {NAV_DATA.map((e, i) => {
            return <NavLink key={i} name={e.name} link={e.href} />;
          })}
        </div>
        <div>
          <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.7}}
            transition={{duration:0.2}}
            onClick={() => dispatch(toggle())}
            className='py-2 px-2 m-1 bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-lg text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 ease-linear duration-100'
          >
            {value ? (
              <SunIcon className='h-6 w-6 ' />
            ) : (
              <MoonIcon className='h-6 w-6' />
            )}
          </motion.button>
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
