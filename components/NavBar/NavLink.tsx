import Link from 'next/link';
import React from 'react';

//Framer Motion
import { motion } from "framer-motion";


//Props
type props = {
    name:string,
    link:string
}

const NavLink:React.FC<props> = ({link,name}) => {
  return (
    <Link href={link}>
        <motion.a 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          transition={{duration:0.1}}
          className={styles.navLink}>
            {name}
        </motion.a>
    </Link>
  )
}
const styles ={
  navLink: `text-lg select-none font-medium py-1 px-2 m-1 hover:bg-black/10  dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-50 hover:text-neutral-800   rounded-lg cursor-pointer ease-linear duration-100`
};


export default NavLink;