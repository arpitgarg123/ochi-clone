import React from 'react'

const ReviewsText = (props) => {
  return (
    <div className='w-full px-12 py-5 flex items-center justify-between border-b-[1px] border-b-zinc-700 '>
    <h1 className='capitalize text-base'>{props.work}</h1>
    <h2 className='capitalize text-base font-extralight'>{props.client}</h2>
    <h3 className='uppercase text-lg'>read</h3>
</div>
  )
}

export default ReviewsText