import React, { useEffect, useState } from 'react';

function Eyes() {
  const [eyePositions, setEyePositions] = useState({ left: {}, right: {} });
  const [angles, setAngles] = useState({ left: 0, right: 0 });
  let animationFrameId = null;

  // Calculate eye center positions once on load and on resize
  useEffect(() => {
    const calculateEyePositions = () => {
      const leftEye = document.getElementById('left-eye');
      const rightEye = document.getElementById('right-eye');

      if (leftEye && rightEye) {
        const leftEyeRect = leftEye.getBoundingClientRect();
        const rightEyeRect = rightEye.getBoundingClientRect();

        const leftEyeCenter = {
          x: leftEyeRect.left + leftEyeRect.width / 2,
          y: leftEyeRect.top + leftEyeRect.height / 2,
        };

        const rightEyeCenter = {
          x: rightEyeRect.left + rightEyeRect.width / 2,
          y: rightEyeRect.top + rightEyeRect.height / 2,
        };

        setEyePositions({ left: leftEyeCenter, right: rightEyeCenter });
      }
    };

    calculateEyePositions();
    window.addEventListener('resize', calculateEyePositions);

    return () => {
      window.removeEventListener('resize', calculateEyePositions);
    };
  }, []);

  // Handle mouse movement using requestAnimationFrame for smooth animations
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (eyePositions.left && eyePositions.right) {
        // Calculate angle for the left eye
        const leftEyeDeltaX = mouseX - eyePositions.left.x;
        const leftEyeDeltaY = mouseY - eyePositions.left.y;
        const leftEyeAngle = Math.atan2(leftEyeDeltaY, leftEyeDeltaX) * (180 / Math.PI);

        // Calculate angle for the right eye
        const rightEyeDeltaX = mouseX - eyePositions.right.x;
        const rightEyeDeltaY = mouseY - eyePositions.right.y;
        const rightEyeAngle = Math.atan2(rightEyeDeltaY, rightEyeDeltaX) * (180 / Math.PI);

        // Use requestAnimationFrame to schedule the state update
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(() => {
            setAngles({ left: leftEyeAngle, right: rightEyeAngle });
            animationFrameId = null;
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [eyePositions]);

  return (
   <div className='eyes w-full h-screen overflow-hidden'>
     <div data-scroll data-scroll-speed="-.7" className="w-full h-screen bg-[url('/images/topImage.jpg')] bg-center bg-cover relative">
      <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
        {/* Left Eye */}
        <div id="left-eye" className="circle w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center">
          <div className="inner_black_circle w-[58%] h-[58%] rounded-full bg-zinc-900 relative">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${angles.left - 180}deg)` }}
              className="w-full h-4 line absolute top-1/2 left-1/2"
            >
              <div className="eye_spot w-5 h-5 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div id="right-eye" className="circle w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center">
          <div className="inner_black_circle w-[58%] h-[58%] rounded-full bg-zinc-900 relative">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${angles.right - 180}deg)` }}
              className="w-full h-4 line absolute top-1/2 left-1/2"
            >
              <div className="eye_spot w-5 h-5 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Eyes;
