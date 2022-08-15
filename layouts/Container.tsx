import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar'

//Redux
import { useSelector } from 'react-redux';
import { selectTheme } from '../reducers/themeSlice';

const Container = ({children}:any) => {
  const value = useSelector(selectTheme);

  return (
    <div className={`container ${value?'dark':''} `}>
      <Head>
        <title>Pavitra.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      {children}
    
    </div>
  )
}

export default Container