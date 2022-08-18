import Link from 'next/link';
import React from 'react';

//Framer Motion
import { motion } from "framer-motion";

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
          transition={{duration:0.3}}
          className='text-lg font-medium py-1 px-2 m-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-800   rounded-lg cursor-pointer ease-linear duration-100'>
            {name}
        </motion.a>
    </Link>
  )
}

export default NavLink