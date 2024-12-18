import React, { useState, useRef } from 'react';

export const FullscreenView = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const squareSize = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8);

  return (
    <div className="fullscreen-view">
      <div 
        className="image-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          position: 'relative',
          margin: '0 auto',
          marginTop: '50px'
        }}
      >
        <button 
          className="navigation-arrow prev-arrow" 
          onClick={handlePrev}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          ↜
        </button>
        <button 
          className="navigation-arrow next-arrow" 
          onClick={handleNext}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          ↝
        </button>
        {images[currentIndex] && (
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
