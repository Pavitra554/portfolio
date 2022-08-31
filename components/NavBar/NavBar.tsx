import React from "react";

//Framer Motion
import { motion } from "framer-motion";

//Components
import NavLink from "./NavLink";
import MobileNav from "../MobileNav/MobileNav";

//icons
import { MoonIcon, SunIcon, MenuAlt4Icon } from "@heroicons/react/outline";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggle } from "../../reducers/themeSlice";

//Data
import { NAV_DATA } from "../../data/navlinks";

const NavBar = () => {
  const value = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={styles.mainNav}
    >
      <nav className='w-full max-w-5xl flex flex-row justify-between items-center'>
        <MobileNav />
        <div className=' flex-row hidden sm:flex'>
          {NAV_DATA.map((e, i) => {
            return <NavLink key={i} name={e.name} link={e.href} />;
          })}
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.2 }}
            onClick={() => dispatch(toggle())}
            className={styles.darkModeButton}
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

const styles = {
  mainNav: `flex w-full bg-white/30 dark:bg-black/25  justify-center p-2 dark:text-neutral-400 text-neutral-900 ease-linear  duration-150 shadow-xl fixed top-0 z-40 border-b dark:border-white/10 border-black/20`,
  darkModeButton: `py-2 px-2 m-1 border border-black/10 dark:border-white/10 dark:hover:bg-white/10 hover:bg-black/10 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-50 ease-linear duration-100`,
};

export default NavBar;
