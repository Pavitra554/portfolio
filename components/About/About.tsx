import React from "react";
import HighText from "./HighText";

const About = () => {
  return (
    <div className='font-noto'>
      <div className=' font-semibold px-1 py-2 text-xl md:text-2xl text-neutral-100 select-none'>
        About
      </div>
      <div className='bg-neutral-800/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-neutral-400/70  text-noto text-base  md:text-base tracking-wide  ease-linear duration-100'>
        <div className='pb-2'>
          Hey, I'm <HighText>Pavitra 👋</HighText>. I am a passionate <HighText>Developer 👨🏻‍💻</HighText> who loves to build awesome <HighText>Web Apps💻 / Apps📱</HighText>. I also love to participating in <HighText>Hackathons 🚀</HighText> so be sure to look out for me if you want a <HighText>Team Mate</HighText>.
          
        </div>
        <div>
          I'm a 3rd year <HighText>Computer Science & Engineering</HighText> Undergraduate Student looking for <HighText>Internship Opportunities</HighText>.
        </div>
      </div>
    </div>
  );
};

export default About;
