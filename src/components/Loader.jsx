import { easeInOut, motion } from 'framer-motion'
import React from 'react'

const Loader = () => {
  
  return (
    <motion.div 
    transition={{easeInOut, duration: 0.2}}
   
    className="flex items-center justify-center h-screen">
    <div className="relative flex justify-center items-center flex-col">
        <div className="h-12 w-12 rounded-full border-t-4 border-b-4 border-[#121211]"></div>
        <div className=" top-0 left-0 h-12 w-12 rounded-full border-t-4 border-b-4 border-[white] animate-spin">
        </div>
        <span className='my-4 text-sm'>JUST A MOMENT...</span>
    </div>
  </motion.div>
  )
}

export default Loader