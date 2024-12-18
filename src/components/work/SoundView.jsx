import React from 'react';

export const SoundView = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        gap: '40px',
        padding: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <iframe
            style={{
              border: 0,
              width: '350px',
              height: '470px'
            }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4103168189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://snowfinch.bandcamp.com/album/resting-place-nest">resting-place, nest by snow finch</a>
          </iframe>
      
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <iframe
            style={{
              border: 0,
              width: '350px',
              height: '470px'
            }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2541905902/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://snowfinch.bandcamp.com/album/01">01 by snow finch</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};
