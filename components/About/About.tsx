import React from 'react'
import HighText from "./HighText";

const About = () => {
  return (
    <div className=''>
        <div className='text-noto font-semibold px-3 md:px-4 py-2 text-lg md:text-2xl text-neutral-100 select-none'>
            About
        </div>
       <div className='bg-neutral-800/40 hover:brightness-125 p-3 md:p-4 rounded-lg text-neutral-400/70  text-noto text-base  md:text-lg tracking-wide  ease-linear duration-100'>
            <div className='pb-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, perferendis <HighText>Highlighted Text ♻️💠</HighText> error itaque error ullam praesentium  totam ratione nulla omnis voluptatibus quasi similique eaque libero sint nostrum <HighText>TypeScript⚡</HighText> quas qui voluptates nam, dolorem id. Ex nulla corporis repellendus aspernatur necessitatibus, deserunt est maiores labore facere nobis veritatis odit eos ab <HighText>Pavitra ⚜️</HighText> autem doloribus.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, perferendis error praesentium <HighText>Highlighted Text 🦄</HighText>  ullam  
            </div>
       </div>
    </div>
  )
}

export default About