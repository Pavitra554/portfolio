import Image from 'next/image';
import React from 'react';

type props = {
    link:any,
    text:string
}
const Badge:React.FC<props> = ({text,link}) => {
  return (
    <span className={'bg-[#27272a] text-[#c4c4cc] flex flex-row justify-center items-center space-x-2 m-1 px-1.5 py-1 rounded-md font-noto text-sm select-none '}>
        <Image src={link} alt="" height={23} width={23} className='rounded-sm'/>
        <div>{text}</div>
    </span>
  )
}

export default Badge