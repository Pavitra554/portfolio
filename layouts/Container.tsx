import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";

//Redux
import { useSelector } from "react-redux";
import { selectTheme } from "../reducers/themeSlice";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

const Container = ({ children }: any) => {
  const value = useSelector(selectTheme);

  return (
    <motion.div 
        className={``}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
      >
      <Head>
        <title>Pavitra⚡</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      {children}
      <Footer/>
    </motion.div>
  );
};

export default Container;
