import Link from "next/link";
import React from "react";

//Framer Motion
import { motion } from "framer-motion";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectNavOpen, togglenav } from "../../reducers/navToggleSlice";

type props = {
  name: string;
  link: string;
  i:number
};

const MobileNavLink: React.FC<props> = ({ link, name,i }) => {
  const value = useSelector(selectNavOpen);
  const dispatch = useDispatch();
  return (
    <Link href={link} className='cursor-pointer'>
      <motion.div
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.4+( i/10),duration:0.4}}
        className='py-4 m-1 border-b border-neutral-300  dark:border-neutral-900'
        onClick={() => dispatch(togglenav())}
      >
        <a
          className='text-lg font-normal text-neutral-800 dark:text-neutral-300  rounded-lg cursor-pointer '
        >
          {name}
        </a>
      </motion.div>
    </Link>
  );
};

export default MobileNavLink;
