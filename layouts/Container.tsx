import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";

//Redux
import { useSelector } from "react-redux";
import { selectTheme } from "../reducers/themeSlice";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

//vercel analytics
import { Analytics } from '@vercel/analytics/react';


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
        <title>Pavitra</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <meta name="description" content="Pavitra's portfolio showcasing his development skills and projects."></meta> */}
        <meta name="author" content="Pavitra Behara"></meta>
        <meta name="keywords" content="Pavitra,pavitra554,pavitra.ts,Development,Android Development,Web Development, portfolio,TailwindCSS,React.js,react,github, Next.js,Redux,Framer Motion, projects, skills"></meta>
      </Head>
      <Analytics />

      <NavBar />
      {children}
      <Footer/>
    </motion.div>
  );
};

export default Container;
