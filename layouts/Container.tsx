import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar'

//Redux
import { useSelector } from 'react-redux';
import { selectTheme } from '../reducers/themeSlice';

//Framer motion
import { motion } from 'framer-motion';

const Container = ({children}:any) => {
  const value = useSelector(selectTheme);

  return (
    <div className={`container ${value?'dark':''} `}>
      <Head>
        <title>Pavitra.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='dark:bg-black bg-white ease-linear duration-150'>
      <motion.div 
        initial={{opacity:0,y:50}}
        animate={{opacity:0.2,y:0}}
        transition={{delay:0.3}}
        className='w-full h-full rounded-full bg-violet-600 opacity-20 blur-3xl absolute -top-96   right-0 z-10 flex'></motion.div>
        <NavBar/>
        {children}

      </main>
    </div>
  )
}

export default Container