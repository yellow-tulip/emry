import React, { useRef, useState, useEffect } from 'react';

export const HomePage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Video play error:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Video play error:", error);
        });
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="home-page" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <style>{`
        .video-container {
          position: relative;
          cursor: default;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
        }

        .video-container:hover .video-overlay {
          background: rgba(0, 0, 0, 0.1);
        }

        .play-pause-icon {
          opacity: 0;
          color: white;
          font-size: 48px;
          transition: opacity 0.3s ease;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .video-container:hover .play-pause-icon {
          opacity: 0.8;
        }
      `}</style>
      <div 
        className="video-container" 
        style={{
          width: '100%',
          maxWidth: '70vw',
          marginLeft: '100px',
          position: 'relative',
          top: '-50px'
        }}
        onClick={togglePlayPause}
      >
        <div className="video-overlay">
          <div className="play-pause-icon">
            {isPlaying ? '*' : '+'}
          </div>
        </div>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          autoPlay
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain'
          }}
        >
          <source 
            src="https://7fe5987958bc81b9670fdb584bccf58c.r2.cloudflarestorage.com/portfolio/videos/homemovie.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
