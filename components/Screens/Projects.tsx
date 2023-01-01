import React from "react";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import ProjectWork from "../Projects/ProjectWork";

const Projects = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='font-noto mt-10 w-full'
      >
        <ProjectWork/>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
