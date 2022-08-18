import React from 'react';
import Link from 'next/link';

//Components
import NavLink from './NavLink';

//icons
import {MoonIcon,SunIcon} from '@heroicons/react/outline'


//Redux
import { useDispatch,useSelector } from 'react-redux';
import { selectTheme, toggle } from '../../reducers/themeSlice';

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
    const value = useSelector(selectTheme);
    const dispatch = useDispatch();
  return (
    <div className='flex w-full bg-white dark:bg-neutral-800 justify-center p-2 border-b  dark:border-b-neutral-800 dark:text-neutral-400 text-neutral-900 ease-linear  duration-150'>
        <nav className='w-full max-w-5xl flex flex-row justify-between items-center'>
            <div className=' flex-row hidden md:flex'>
               {NAV_DATA.map((e,i)=>{
                return(
                    <NavLink key={i} name={e.name} link={e.href}/>
                )
               })}
            </div>
            <div>
                <button onClick={()=>dispatch(toggle())} className='py-2 px-2 m-1 bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-200 rounded-lg ease-linear duration-150 active:scale-90 hover:scale-105 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'>
                    {value?<SunIcon className='h-6 w-6 '/>:<MoonIcon className='h-6 w-6'/>}
                </button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;