import React from "react";

//Framer Motion
import { motion, AnimatePresence } from "framer-motion";

//React Spinner
import PulseLoader from "react-spinners/PulseLoader";

//React Icons
import {BsFillLightningChargeFill} from 'react-icons/bs';

const LoadingAnimation = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-screen flex flex-col justify-center items-center font-noto'
      >
        <div className='flex flex-row items-center italic text-base md:text-xl text-center text-[#c4c4cc] select-nones'>
          Learning in Lightning speed <BsFillLightningChargeFill className="ml-2 text-[#3ddc84]" size={20}/>
          
          {/* "Make it work, Make it right, Make it fast ⚡" */}
        </div>
        <div>
          <PulseLoader
            // height={6}
            // width={120}
            className='rounded-full m-4'
            color='#c4c4cc'
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
