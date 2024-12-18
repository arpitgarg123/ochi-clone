import { motion } from 'framer-motion'
import React from 'react'

function  Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] py-20 rounded-t-3xl' >
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1  initial={{x : 0}} animate={{x : "-100%"}} transition={{repeat : Infinity, ease : "linear", duration : 10}} className='text-[28vw] font-["Founders_Grotesk_x"] font-semibold uppercase leading-none -mb-36 mt-4 pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x : 0}} animate={{x : "-100% "}} transition={{repeat : Infinity, ease : "linear", duration : 10}} className='text-[28vw] font-["Founders_Grotesk_x"] font-semibold uppercase leading-none -mb-36 mt-4 pr-20'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default  Marque