import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar'

//Redux
import { useSelector,useDispatch } from 'react-redux';
import {  selectTheme, toggle } from '../reducers/ThemeSlice';

const Container = ({children}:any) => {
  const value = useSelector(selectTheme);
  console.log(value)

  return (
    <div className={`container ${value?'dark':'light'}`}>
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