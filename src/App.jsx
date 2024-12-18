import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import { Navigation } from './components/Navigation';
import { WorkPage } from './components/work/WorkPage';
import { AmbientSoundscape } from './components/AmbientSoundscape';
import { Typography } from './components/Typography';
import { HomePage } from './components/home/HomePage';
import { AmbientSoundscapeProvider } from './components/AmbientSoundscapeContext';
import { VolumeControl } from './components/VolumeControl';
import { VerticalMenu } from './components/VerticalMenu';

export default function App() {
  const [currentView, setCurrentView] = useState('stills');

  return (
    <AmbientSoundscapeProvider>
      <GlobalStyles />
      <Navigation />
      <VerticalMenu 
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/work" 
          element={
            <WorkPage 
              initialView={currentView}
              onViewChange={setCurrentView}
            />
          } 
        />
        <Route path="/about" element={<Typography />} />
      </Routes>
      <VolumeControl />
      <AmbientSoundscape />
    </AmbientSoundscapeProvider>
  );
}
