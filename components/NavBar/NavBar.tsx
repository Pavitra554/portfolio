import React from 'react';
import Link from 'next/link';

//Components
import NavLink from './NavLink';

//icons
import {MoonIcon} from '@heroicons/react/outline'


//Redux
import { useDispatch } from 'react-redux';
import { toggle } from '../../reducers/themeSlice';

const NAV_DATA = [
    {
        href:'/',
        name:'Home',
    },
    {
        href:'/Projects',
        name:'Projects',
    },
    {
        href:'/Achivements',
        name:'Achivements',
    },
]
const NavBar = () => {
    
    const dispatch = useDispatch();
  return (
    <div className='flex w-full bg-white dark:bg-neutral-900 justify-center p-2 border-b'>
        <nav className='w-full max-w-5xl flex flex-row justify-between items-center'>
            <div className=' flex-row hidden md:flex'>
               {NAV_DATA.map((e,i)=>{
                return(
                    <NavLink key={i} name={e.name} link={e.href}/>
                )
               })}
            </div>
            <div>
                <button onClick={()=>dispatch(toggle())} className='py-2 px-2 m-1 bg-neutral-100 hover:bg-neutral-200 rounded-lg ease-linear duration-150 active:scale-90 hover:scale-105'>
                    <MoonIcon className='h-6 w-6 text-neutral-600'/>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;