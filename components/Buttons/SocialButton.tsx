import React from "react";
import Link from "next/link";
//Framer Motion
import { AnimatePresence, useAnimation, motion } from "framer-motion";

//React Icons
import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter,SiGmail} from "react-icons/si";
import { RiTwitterXLine} from "react-icons/ri";


type props = {
  link: string;
  name: string;
};

const SocialButton: React.FC<props> = ({ link, name }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();
  function handleMouseEnter() {
    setIsHovered(true);
    controls.start("hover");
  }

  function handleMouseLeave() {
    setIsHovered(false);
    controls.start("initial");
  }
  return (
    <Link href={link} target="_blank">
      <motion.div
        layout
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <motion.div className='flex flex-row items-center p-2 rounded-md bg-[#27272a] text-[#b0b0b9] shadow-md select-none hover:brightness-150 active:scale-90 ease-linear duration-100 cursor-pointer font-noto'>
          <motion.div layout>
            { name === 'Leetcode' && <SiLeetcode size={20} /> }
            { name === 'Github' && <SiGithub size={20} /> }
            { name === 'LinkedIn' && <SiLinkedin size={20} /> }
            { name === 'X' && <RiTwitterXLine size={20} /> }
            { name === 'Mail' && <SiGmail size={20} /> }
          </motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                layout
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.08, delay: 0.299 }}
                className='font-semibold text-sm pl-1.5 '
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default SocialButton;
