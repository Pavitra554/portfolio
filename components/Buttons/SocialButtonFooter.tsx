import React from "react";
import Link from "next/link";

//React Icons
import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter,SiGmail} from "react-icons/si";
import { RiTwitterXLine} from "react-icons/ri";

type props = {
  link: string;
  name: string;
};

const SocialButtonNormal: React.FC<props> = ({ link, name }) => {
  return (
    <Link href={link} target="_blank">
        <div className='flex flex-row items-center rounded-md text-[#b0b0b9] select-none hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer font-noto'>
          <div >
            { name === 'Leetcode' && <SiLeetcode size={18} /> }
            { name === 'Github' && <SiGithub size={18} /> }
            { name === 'LinkedIn' && <SiLinkedin size={18} /> }
            { name === 'X' && <RiTwitterXLine size={18} /> }
            { name === 'Mail' && <SiGmail size={18} /> }
          </div>
        </div>
    </Link>
  );
};

export default SocialButtonNormal;
