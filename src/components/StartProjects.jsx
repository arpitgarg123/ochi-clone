import React from 'react'
import BlackBtn from '../utils/BlackBtn'

const StartProjects = () => {
  return (
    <div className='w-full min-h-screen bg-[#CDEA68] text-[#212121] py-28 rounded-2xl'>
                  {["ready", "to start", "the project ?"].map((text,index)=>{
            return <div key={index} className="textUpper">
              <div className="text flex gap-4 justify-center">
            <h1 className='text-[14.5vw] font-["Founders_Grotesk_X"] leading-[0.79] uppercase font-medium'>{text}</h1>
            </div>
            </div>
          })}

          <div className="flex justify-center flex-col items-center gap-4">
           <BlackBtn text={"start the project"} />
           <h1>OR</h1>
           <BlackBtn text={"hello@ochi,design"} />
            
      </div>
    </div>
  )
}

export default StartProjects