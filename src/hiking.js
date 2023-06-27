import React from 'react';
import hiking from './image/hiking.jpg';

const Hiking = () => {
  const containerStyle = {
    background: `url(${hiking})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // Add relative positioning to the container
    zIndex: -1, // Set a negative z-index to move the container behind other components
    width: "937.5px",
    height: '625px', // Set the desired height for the background image container
  };

  return (
    <div>
      <div style={containerStyle} />
     
    </div>
  );
}

export default Hiking;
