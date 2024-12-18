import React from 'react';

export const ViewToggle = ({ isGalleryView, onClick }) => (
  <>
    <style>{`
      .view-toggle {
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
        transition: none;
      }
    `}</style>
    <button 
      className="view-toggle"
      onClick={onClick}
      aria-label={isGalleryView ? 'Switch to fullscreen view' : 'Switch to gallery view'}
    >
      *
    </button>
  </>
);
