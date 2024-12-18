import React from 'react'
import Card from '../utils/card'
import WrapperCard from '../utils/WrapperCard'
import BlackBtn from '../utils/BlackBtn'


function Feature() {
  return (
    <div className='w-full min-h-screen py-20'>
      <h1 className='ml-12 text-[3.7vw] font-thin'>Featured projects</h1>
      <div className='w-full border-t-[1px] border-t-zinc-700 mt-10'>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"} buttonList ={["branded template" , "sales deck", "social media templates"]} hoverText={"cardboard spaceship"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"} buttonList ={["pitch deck"]} hoverText={"AH2 & Matt Horn"} />
       </WrapperCard>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"} buttonList ={["audit","copywriting","sales deck","slides design"]} hoverText={"fyde"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"} buttonList ={["agency","company presentation"]} hoverText={"vise"} />
       </WrapperCard>
       <WrapperCard>
       <Card heading={"Cardboard Spaceship"} imgSrc={"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"} buttonList ={["brand identity","design research","investor deck"]} hoverText={"trawa"} />
       <Card heading={"AH2 & Matt Horn"} imgSrc={"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"} buttonList ={["branded template"]} hoverText={"premium blend"} />
       </WrapperCard>
      </div>
      <div className='w-full  flex justify-center mt-20'>
      < BlackBtn text={"view all case studies"} />
      </div>
    </div>
  )
}

export default Feature