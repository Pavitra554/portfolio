import React from "react";

//Framer Motion
import { motion } from "framer-motion";

//React icons
import { BsGithub, BsFillFileEarmarkPdfFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=' h-screen w-full flex items-center pb-20 sm:pb-0 justify-center backdrop-blur-3xl mx-auto  sm:px-4 lg:px-0 z-20'>
      <div className='max-w-screen-lg flex flex-col md:flex-row justify-between px-4'>
        <div className='w-full md:w-[60%]'>
          {/* Name  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className='text-6xl  font-bold'
          >
            Pavitra
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className='text-base font-medium pl-1 text-violet-600 tracking-wider'
          >
            Developer / Programmer
          </motion.div>
          {/*Description*/}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className='text-lg pl-1 text-neutral-600 dark:text-neutral-400 pt-6'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugiat quam, ducimus nisi ullam impedit beatae sit
            iusto perspiciatis optio enim ad facilis praesentium placeat
            reiciendis. Consequuntur cumque totam praesentium.
          </motion.div>
          {/*Buttons*/}
          <div className='flex flex-row mt-8 h-12'>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
              className='flex flex-row items-center border-2 border-violet-700 bg-violet-700 ho//:bg-violet-900 ease-linear duration-150 text-base m-1 px-4 py-5 rounded-lg'
            >
              <BsFillFileEarmarkPdfFill size={25} />
              <div className='ml-2'>Resume</div>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.3 }}
              className='flex flex-row items-center border-2 border-violet-700  text-base m-1 px-4 py-5 rounded-lg ease-linear duration-150'
            >
              <BsGithub size={25} />
              <div className='ml-2'>Github</div>
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className='h-72 w-72 hidden md:flex rounded-full bg-neutral-200 dark:bg-neutral-900 '
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
