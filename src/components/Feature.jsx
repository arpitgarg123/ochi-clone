import React from 'react'
import Card from '../utils/Card'
import WrapperCard from '../utils/WrapperCard'
import BlackBtn from '../utils/BlackBtn'


function Feature() {
  return (
    <div className='w-full min-h-screen py-20'>
      <h1 className='ml-12 text-[3.7vw] font-thin'>Featured projects</h1>
      <div className='w-full border-t-[1px] border-t-zinc-700 mt-10'>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"images/img1.png"} buttonList ={["branded template" , "sales deck", "social media templates"]} hoverText={"cardboard spaceship"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"images/img2.png"} buttonList ={["pitch deck"]} hoverText={"AH2 & Matt Horn"} />
       </WrapperCard>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"images/img3.png"} buttonList ={["audit","copywriting","sales deck","slides design"]} hoverText={"fyde"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"images/img4.jpg"} buttonList ={["agency","company presentation"]} hoverText={"vise"} />
       </WrapperCard>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"images/img5.jpg"} buttonList ={["brand identity","design research","investor deck"]} hoverText={"trawa"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"images/img6.png"} buttonList ={["branded template"]} hoverText={"premium blend"} />
       </WrapperCard>
      </div>
      <div className='w-full  flex justify-center mt-20'>
      < BlackBtn text={"view all case studies"} />
      </div>
    </div>
  )
}

export default Feature