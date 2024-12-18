import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const WrapperCard = (props) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCard, setVisibleCard] = useState(null);

  useEffect(() => {
    if (!hoveredCard) {
      setVisibleCard(null); // Reset visible card when hover is gone
    } else {
      const timeoutId = setTimeout(() => setVisibleCard(hoveredCard), 10); // Delay to allow exit first
      return () => clearTimeout(timeoutId); // Cleanup on hover switch
    }
  }, [hoveredCard]);

  return (
    <div className='px-12 mt-14 flex gap-5 relative'>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          onHover: () => setHoveredCard(child.props.hoverText),
          onLeave: () => setHoveredCard(null),
        })
      )}
      <div className='h-28 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none overflow-hidden'>
        <h1 className='hoverheading flex text-[8vw] text-[#CDEA68] leading-none uppercase font-semibold font-["Founders_Grotesk_X"]'>
          <AnimatePresence mode="wait">
            {visibleCard && visibleCard.split("").map((e, index) => (
              <motion.span
                key={`${visibleCard}-${index}`} // Unique key for each character and card
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "110%" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.02,
                  // duration: 0.,
                }}
                className='inline-block'
              >
                {e}
              </motion.span>
            ))}
          </AnimatePresence>
        </h1>
      </div>
    </div>
  );
};

export default WrapperCard;
