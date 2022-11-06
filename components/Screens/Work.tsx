import React from "react";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='text-2xl text-neutral-600 select-none text-center'
      >
        {" "}
        <div>Works Screen</div>
        <div>Build Under Developement ⚠️</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
