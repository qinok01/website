import React, { useRef } from 'react';
import anime from 'animejs';

const Intro = ({ onAnimationComplete, children }) => {
  const overlayRef = useRef(null);

  const handleClick = (event) => {
    const x = event.pageX;
    const y = event.pageY;

    const overlayElement = overlayRef.current;

    if (overlayElement) {
      // Animate the clip-path of the overlay element
      anime({
        targets: overlayElement,
        clipPath: [
          { value: `circle(0% at ${x}px ${y}px)`, duration: 0 },
          { value: `circle(150% at ${x}px ${y}px)`, duration: 1000, easing: 'easeInOutQuad' }
        ],
        complete: onAnimationComplete, 
      });
    }
  };

  return (
    <div
      className="intro"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
      }}
    >

      {children}

      <div
        ref={overlayRef}
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black', // Overlay color
          clipPath: 'circle(100% at 50% 50%)',
        }}
      >
        <h1
          style={{
            opacity: 1, // Initial opacity
            transition: 'opacity 0.5s ease-in-out',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          Hello
        </h1>
      </div>
    </div>
  );
};

export default Intro;
