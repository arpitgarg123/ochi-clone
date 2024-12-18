import React from 'react'
import ReviewsText from '../utils/ReviewsText'

const Reviews = () => {
  return (
    <div className='w-full py-20'>
          <h1 className='ml-12 text-[3.7vw] font-thin'>Clients' reviews</h1>
          <div className='w-full border-t-[1px] border-t-zinc-700 mt-10'>
            <div className="upper  border-b-[1px] border-b-zinc-700 ">
            <div className='w-full px-12 py-5 flex items-center justify-between'>
    <h1 className='capitalize text-base'>Karman Ventures</h1>
    <h2 className='capitalize text-base font-extralight'>Services:</h2>
    <h2 className='capitalize text-base font-extralight'>William Barnes</h2>
    <h3 className='uppercase text-lg'>read</h3>
</div>
<div className='upperInfo w-full flex'>
    <div className="left w-1/2 p-20 flex flex-col items-end">
    <div className='flex flex-col gap-3 items-start mr-24'>
    <button className='px-3 py-1 border-[1px] border-white rounded-full uppercase text-sm font-thin tracking-wide'>
             investor deck
            </button>
    <button  className='px-3 py-1 border-[1px] border-white rounded-full uppercase text-sm font-thin tracking-wide'>
              sales deck
            </button>
    </div>
    </div>
    <div className="right w-1/2 py-20 flex flex-col items-start ">
    <img className='w-[6.8vw] h-[6.8vw] rounded-lg object-cover mb-6' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
    <p className='w-[55%]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
    </div>
</div>
            </div>
        {[
            {work : "Planetly",client : "Nina Walloch"},
            {work : "Workiz Easy",client : "Tomer Levy"},
            {work : "Premium Blend",client : "Ellen Kim"},
            {work : "Hypercare Systems",client : "Brendan Goss"},
            {work : "Officevibe",client : "Raff Labrie"},
            {work : "Orderlion",client : "Stefan Strohmer"},
            {work : "Black Book",client : "Jaci Smith"},
            {work : "Trawa Energy",client : "David Budde"},
        ].map((text) =>{
            return <ReviewsText key={text.work} work={text.work} client={text.client}/>
        })}
          </div>
    </div>
  )
}

export default Reviews