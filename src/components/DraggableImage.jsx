import React, { useState, useEffect, useRef } from 'react';

export const DraggableImage = ({ src, alt, className, style }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  
  const dragInfo = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  });

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setPosition({ x: 0, y: 0 });
        if (imageRef.current) {
          imageRef.current.style.transform = 'translate3d(0px, 0px, 0)';
        }
      }
    };

    let animationFrameId;
    
    const updatePosition = (clientX, clientY) => {
      if (dragInfo.current.isDragging) {
        const dx = clientX - dragInfo.current.startX;
        const dy = clientY - dragInfo.current.startY;
        
        if (imageRef.current) {
          imageRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        }
        
        dragInfo.current.lastX = dx;
        dragInfo.current.lastY = dy;
        
        animationFrameId = requestAnimationFrame(() => {
          setPosition({ x: dx, y: dy });
        });
      }
    };

    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      if (dragInfo.current.isDragging) {
        dragInfo.current.isDragging = false;
        setPosition({
          x: dragInfo.current.lastX,
          y: dragInfo.current.lastY
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    dragInfo.current = {
      isDragging: true,
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
      lastX: position.x,
      lastY: position.y
    };
  };

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        willChange: 'transform',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        touchAction: 'none',
        ...style
      }}
      onMouseDown={handleMouseDown}
    />
  );
};
