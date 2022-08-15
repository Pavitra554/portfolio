import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar'

//Redux
import { useSelector,useDispatch } from 'react-redux';

const Container = ({children}:any) => {

  return (
    <div className={`container `}>
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