import React, { useState, useEffect } from 'react';
import { useWorkImages } from './useWorkImages';
import { GalleryView } from './GalleryView';
import { FullscreenView } from './FullscreenView';
import { ViewToggle } from './ViewToggle';
import { SketchesView } from './SketchesView';
import { SoundView } from './SoundView';

export const WorkPage = ({ initialView = 'stills', onViewChange }) => {
  const [isGalleryView, setIsGalleryView] = useState(true);
  const [viewMode, setViewMode] = useState(initialView);
  const { images, sketchImages } = useWorkImages();

  useEffect(() => {
    setViewMode(initialView);
  }, [initialView]);

  useEffect(() => {
    if (onViewChange) {
      onViewChange(viewMode);
    }
  }, [viewMode, onViewChange]);

  const currentImages = viewMode === 'stills' ? images : sketchImages;

  const renderContent = () => {
    if (viewMode === 'sounds') {
      return <SoundView />;
    }
    
    if (viewMode === 'sketches' && isGalleryView) {
      return <SketchesView images={sketchImages} />;
    }
    
    return isGalleryView ? (
      <GalleryView images={currentImages} />
    ) : (
      <FullscreenView images={currentImages} />
    );
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative'
    }}>
      <style>{`
        .toggle-container {
          position: fixed;
          top: 220px;
          left: 120px;
          opacity: ${viewMode === 'sounds' ? 0 : 1};
          visibility: ${viewMode === 'sounds' ? 'hidden' : 'visible'};
          height: 24px;
          z-index: 1000;
        }

        @media (max-width: 768px) {
          .toggle-container {
            top: auto;
            bottom: calc(var(--grid-unit) * 3);
          }
        }
      `}</style>
      {renderContent()}

      <div className="toggle-container">
        <ViewToggle 
          isGalleryView={isGalleryView} 
          onClick={() => setIsGalleryView(!isGalleryView)} 
        />
      </div>
    </div>
  );
};
