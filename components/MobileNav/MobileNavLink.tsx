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
};

const MobileNavLink: React.FC<props> = ({ link, name }) => {
  const value = useSelector(selectNavOpen);
  const dispatch = useDispatch();
  return (
    <Link href={link} className='cursor-pointer'>
      <div
        className='py-4 m-1 border-b border-neutral-300  dark:border-neutral-500'
        onClick={() => dispatch(togglenav())}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className='text-lg font-normal text-neutral-800 dark:text-neutral-200  rounded-lg cursor-pointer '
        >
          {name}
        </motion.a>
      </div>
    </Link>
  );
};

export default MobileNavLink;
