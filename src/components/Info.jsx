import React from 'react'
import BlackBtn from '../utils/BlackBtn'

const Info = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 px-12 py-20'>
        <div className='cardContainer w-full flex gap-4'>
            <div className="card w-1/2 h-96 bg-[#004D43] rounded-xl relative flex items-end p-8">
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='py-1 px-3 rounded-full border-[1px] border-[#C9E766] text-[#C9E766]'>©2019–2022</button>
            </div>
            <div className="card w-1/2 h-96 rounded-xl overflow-hidden flex gap-4">
            <div className='w-1/2 h-full bg-[#212121] rounded-xl flex items-end p-8 relative'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button  className='px-3 py-1 border-[1px] border-white rounded-full uppercase text-sm font-thin tracking-wide'>
              rating 5.0 on clutch
            </button>
            </div>
            <div className='w-1/2 h-full bg-[#212121] rounded-xl flex items-end p-8 relative'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button  className='px-3 py-1 border-[1px] border-white rounded-full uppercase text-sm font-thin tracking-wide'>
             business bootcamp alumni
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Info