import React, { useState, useEffect } from "react";
import { DraggableImage } from './DraggableImage';

const kawaiiFaces = [
  '♡', '✧', '*', '~', '!', '@', '#', '✿', '★', 
  '☆', '❀', '✮', '<3', '✩', '✫', '>', '<', 
  ':', ';', '*', '+', '.', '°', '`', '´',
];

const textSets = {
  first: {
    main: [
      'emry g is a multidisciplinary artist',
      'capturing the tender disquiet',
      'through intimate electronic soundscapes'
    ],
    secondary: 'contact me ⤳ emrygorder (at) proton (dot) me'
  },
  second: {
    main: [
      'the sound of moving water',
      'a shallow basin with a rough surface and gently sloping sides',
      'a shady spot under a tree'
    ],
    secondary: 'documenting quiet moments and close encounters'
  }
};

export const Typography = () => {
  const [positions, setPositions] = useState(kawaiiFaces.map(() => ({
    x: Math.random() * (window.innerWidth - 300) + 270,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 360,
    scale: 0.8 + Math.random() * 0.4,
    speed: {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    }
  })));

  const [currentSet, setCurrentSet] = useState('first');

  useEffect(() => {
    const moveCharacters = () => {
      setPositions(prev => prev.map(pos => {
        let newX = pos.x + pos.speed.x;
        let newY = pos.y + pos.speed.y;

        if (newX < 270 || newX > window.innerWidth - 50) {
          pos.speed.x *= -1;
          newX = pos.x + pos.speed.x;
        }
        if (newY < 0 || newY > window.innerHeight - 50) {
          pos.speed.y *= -1;
          newY = pos.y + pos.speed.y;
        }

        return {
          ...pos,
          x: newX,
          y: newY,
          rotation: pos.rotation + (Math.random() - 0.5) * 2,
        };
      }));
    };

    const interval = setInterval(moveCharacters, 16);
    return () => clearInterval(interval);
  }, []);

  const toggleTextSet = () => {
    setCurrentSet(prev => prev === 'first' ? 'second' : 'first');
  };

  return (
    <div className="typography-container" role="main" aria-label="About page content">
      <style dangerouslySetInnerHTML={{ __html: `
        .typography-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          background: #fff;
          padding: 20px;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .text-content {
          width: 100%;
          max-width: 500px;
          text-align: left;
          padding: calc(var(--grid-unit) * 3);
          margin-left: var(--menu-width);
          margin-top: calc(var(--grid-unit) * 3);
          position: relative;
          z-index: 2;
          -webkit-text-stroke: 0.25px;
          text-stroke: 0.25px;
          line-height: 0.75;
        }

        .main-text {
          background: transparent;
          border: none;
          color: #000;
          padding: 0;
          text-align: left;
          width: auto;
          font-size: 16px;
        }

        .main-text span {
          display: block;
          margin-bottom: calc(var(--grid-unit));
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .main-text span:hover {
          opacity: 0;
          transition-delay: 0s;
        }

        .main-text span:not(:hover) {
          transition-delay: 2s;
        }

        .secondary-text {
          background: transparent;
          border: none;
          color: #000;
          padding: 0;
          text-align: left;
          width: auto;
          margin-top: calc(var(--grid-unit) * 2);
          margin-bottom: calc(var(--grid-unit) * 2);
          font-size: 16px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .secondary-text:hover {
          opacity: 0;
          transition-delay: 0s;
        }

        .secondary-text:not(:hover) {
          transition-delay: 2s;
        }

        .highlight-text {
          color: #464655;
          font-weight: normal;
        }

        .kawaii-char {
          position: fixed;
          font-size: 20px;
          transition: transform 0.3s ease-out;
          color: #CDDFFA;
          opacity: 0.6;
          pointer-events: none;
          z-index: 1;
        }

        .draggable-container {
          width: 300px;
          height: 300px;
          margin-left: var(--menu-width);
          margin-top: calc(var(--grid-unit) * 2);
          z-index: 3;
          border-radius: 12px;
          overflow: hidden;
          align-self: flex-start;
        }

        .draggable-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

       

        .text-toggle {
          position: fixed;
          top: 220px;
          left: 140px;
          background: none;
          border: none;
          padding: calc(var(--grid-unit));
          cursor: pointer;
          z-index: 1000;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: var(--fill-color);
          -webkit-text-stroke: 1px var(--outline-color);
          text-stroke: 1px var(--outline-color);
        }

        @media (max-width: 768px) {
          .typography-container {
            padding: 10px;
          }

          .text-content {
            margin-left: 0;
            padding: calc(var(--grid-unit) * 2);
            margin-top: calc(var(--grid-unit) * 8);
            max-width: 100%;
          }

          .main-text,
          .secondary-text {
            font-size: 16px;
            line-height: 1.4;
          }

          .kawaii-char {
            font-size: 16px;
          }

        

        

          .text-toggle {
            top: auto;
            bottom: calc(var(--grid-unit) * 3);
            left: auto;
            right: calc(var(--grid-unit) * 3);
          }

          .draggable-container {
            width: 200px;
            height: 200px;
            margin: 20px auto;
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          .typography-container {
            padding: 5px;
          }

          .text-content {
            padding: var(--grid-unit);
            margin-top: calc(var(--grid-unit) * 6);
          }

          .main-text,
          .secondary-text {
            font-size: 14px;
          }

          .kawaii-char {
            font-size: 14px;
          }

        
          .draggable-container {
            width: 150px;
            height: 150px;
          }
        }
      `}} />
      <button onClick={toggleTextSet} className="text-toggle">*</button>
      {kawaiiFaces.map((char, i) => (
        <div
          key={i}
          className="kawaii-char"
          style={{
            left: `${positions[i].x}px`,
            top: `${positions[i].y}px`,
            transform: `rotate(${positions[i].rotation}deg) scale(${positions[i].scale})`,
          }}
        >
          {char}
        </div>
      ))}
      <div className="text-content">
        <div className="main-text">
          {textSets[currentSet].main.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
        <div className="secondary-text">
          {textSets[currentSet].secondary}
        </div>
      </div>
      <DraggableImage
        src={currentSet === 'first' ? '/images/me/emrygorder.jpeg' : '/images/me/img_4434.jpeg'}
        alt={currentSet === 'first' ? 'Emry portrait 1' : 'Emry portrait 2'}
        className="draggable-container"
      />
 
    </div>
  );
};
