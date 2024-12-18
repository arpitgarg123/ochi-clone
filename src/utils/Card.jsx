import { motion } from 'framer-motion';
import React from 'react';
const Card = (props) => {
  return (
    <div className="cardContainer w-[50%] relative" 
         onMouseEnter={props.onHover} 
         onMouseLeave={props.onLeave}>
      <div className='card group'>
        <h1 className='flex items-center gap-2 uppercase text-[1vw] font-thin'>
          <div className='w-[0.7vw] h-[0.7vw] rounded-full bg-zinc-200'></div> 
          {props.heading}
        </h1>
        <div className='imageContainer w-full h-[80vh] rounded-xl overflow-hidden mt-5 group-hover:scale-[.95]  transition-all duration-[0.3s] ease-in'>
          <img className='w-full h-full object-cover' src={props.imgSrc} alt="" />
        </div>
        <div className='buttonContainer mt-5 flex gap-4'>
          {props.buttonList.map((text, index) => (
            <button key={index} className='px-3 py-1 border-[1px] border-white rounded-full uppercase text-sm font-thin tracking-wide'>
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
