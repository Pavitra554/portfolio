import Link from 'next/link';
import React from 'react';

type props = {
    name:string,
    link:string
}

const NavLink:React.FC<props> = ({link,name}) => {
  return (
    <Link href={link}>
        <a className='text-lg font-medium py-1 px-2 m-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-800 active:scale-90  rounded-lg cursor-pointer ease-linear duration-150'>
            {name}
        </a>
    </Link>
  )
}

export default NavLink