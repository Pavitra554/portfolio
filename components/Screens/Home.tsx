import React from "react";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import About from "../About/About";
import TechStack from "../Tech/TechStack";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='font-noto mt-10 '
      >
        <About/>
        <TechStack/>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
