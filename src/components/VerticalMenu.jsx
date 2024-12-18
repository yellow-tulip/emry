import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const viewModeSymbols = {
  stills: '✢',
  sketches: '。',
  sounds: 'ᕯ'
};

export const VerticalMenu = ({ currentView, onViewChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkPage = location.pathname === '/work';

  const handleClick = (mode) => {
    if (!isWorkPage) {
      navigate('/work');
    }
    if (onViewChange) {
      onViewChange(mode);
    }
  };

  return (
    <>
      <style>{`
        .vertical-menu {
          position: fixed;
          top: 220px;
          left: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          background: transparent;
          width: auto;
          pointer-events: auto;
        }

        .menu-item {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          font-size: 26px;
          line-height: 0.5;
          width: 100%;
          text-align: left;
          white-space: nowrap;
          transition: all var(--transition-timing);
          color: var(--fill-color);
          -webkit-text-stroke: 1px var(--outline-color);
          text-stroke: 1px var(--outline-color);
          opacity: 0.6;
        }

        .menu-item.active {
          opacity: 1;
        }

        .menu-item:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .vertical-menu {
            top: auto;
            bottom: calc(var(--grid-unit) * 3);
          }
        }
      `}</style>
      <div className="vertical-menu">
        {['stills', 'sketches', 'sounds'].map((mode) => (
          <button 
            key={mode}
            onClick={() => handleClick(mode)}
            className={`menu-item ${currentView === mode && isWorkPage ? 'active' : ''}`}
          >
            {viewModeSymbols[mode]}
          </button>
        ))}
      </div>
    </>
  );
};
