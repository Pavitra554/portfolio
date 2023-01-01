import React from "react";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import Experience from "../Work/Experience";

const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='font-noto mt-10 w-full'
      >
        <Experience/>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
