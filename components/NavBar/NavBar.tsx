import React from 'react';
import Link from 'next/link';

//Components
import NavLink from './NavLink';

//Redux
import { useDispatch } from 'react-redux';

import {  toggle } from '../../reducers/ThemeSlice';

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
    <div className='flex w-full dark:bg-slate-700 justify-center p-2 border-b'>
        <nav className='w-full max-w-5xl flex flex-row justify-between items-center'>
            <div className='flex flex-row'>
               {NAV_DATA.map((e,i)=>{
                return(
                    <NavLink key={i} name={e.name} link={e.href}/>
                )
               })}
            </div>
            <div>
                <button onClick={()=>dispatch(toggle())}>dark</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;