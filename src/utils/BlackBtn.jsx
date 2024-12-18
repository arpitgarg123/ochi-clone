import React from 'react'

const BlackBtn = (props) => {
  return (
    <div>
            <button className='flex items-center gap-5 bg-[#212121] text-white px-6 py-4 rounded-full uppercase text-base'>
               {props.text}
             <div className='p-1 rounded-full bg-white'></div>
            </button>
    </div>
  )
}

export default BlackBtn