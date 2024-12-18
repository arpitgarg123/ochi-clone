import React from 'react'
import BlackBtn from '../utils/BlackBtn'

function About() {
  return (
    <div  className='w-full py-20 bg-[#CDEA68] rounded-t-3xl text-[#212121]'>
        <div className='px-12'>
        <h1 className='w-[85%] text-[3.5vw] leading-[1]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
       <div className='textContainer w-full px-12 py-4 border-t-[1px] border-[#899c4c] mt-16 flex items-start justify-between text-[1.1vw] font-thin'>
           <h1>What you can expect:</h1>
           <div className='left flex gap-40'>
            <div className='w-72 flex flex-col gap-16'>
                <p>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
        <div className='w-72 flex flex-col justify-end gap-5'>
        <h1>S:</h1>
  <div className='flex flex-col gap-1'>
  {["Instagram","Behance" ,"Facebook","Linkedin"].map((item,index)=>{
    return <a key={index} className='' href="">{item}</a>
            })}
  </div>
        </div>
           </div>
       </div>
       <div className='AboutLast w-full px-12 py-4 border-t-[1px] border-[#899c4c] mt-16 flex justify-between'>
        <div>
            <h1 className='text-[3.8vw] leading-none'>Our approach:</h1>
        <BlackBtn text={"read more"} />
        </div>
        <div className='w-1/2 h-[70vh] rounded-xl overflow-hidden'>
             <img className='w-full h-full object-cover' src="/images/homePage.jpg" alt="" />
        </div>
       </div>
    </div>
  )
}

export default About