import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>
        
        <div className="textContainer mt-40 px-12">

          {["we create ", "eye-opening", "presentations"].map((text,index)=>{
            return <div key={index} className="textUpper">
              <div className="text flex gap-4">
              {index === 1 && (
                <motion.div 
                initial={{width: 0}}
                animate={{width : "9vw"}}
                transition={{ease : [0.76, 0, 0.24, 1], duration : 1}}
                className="videoPartText w-[9vw] h-[5.7vw] relative -top-[1vw] rounded-lg bg-red-900 overflow-hidden">
                  <img className="w-full h-full object-cover" src="images/content-image01.jpg" alt="" />
                </motion.div>
              )}
            <h1  className='text-[9vw] font-["Founders_Grotesk_X"] leading-[0.79] uppercase font-medium'>{text}</h1>
            </div>
            </div>
          })}

        </div>
       <div className="endingPart w-full border-t-[1px] border-t-zinc-700 px-12 mt-20 flex justify-between items-center py-3">
   {["For public and private companies", "From the first pitch to IPO"].map((text,index)=>{
  return <p key={index} className="text-md tracking-wide font-light">{text}</p>
   })}
     <div className="start flex  items-center gap-2">
      <button className="uppercase px-3 py-1 rounded-full border-[1px] border-white text-sm font-light tracking-wider">start the project</button>
      <div className="circle border-[1px] border-white h-8 w-8 rounded-full flex items-center justify-center ">
      <span className="rotate-[-45deg]">
      <FaArrowRight />
      </span>
      </div>
     </div>
       </div>
    </div>
  )
}

export default LandingPage