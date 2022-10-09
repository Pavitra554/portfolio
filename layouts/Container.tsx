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
    <div className={``}>
      <Head>
        <title>Pavitra⚡</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Container;
