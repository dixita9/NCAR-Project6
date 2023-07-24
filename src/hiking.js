import React from 'react';

import Second_Of_Five from './image/hiking.jpg';

const Hiking = () => {
  const containerStyle = {
    background: `url(${Second_Of_Five})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // Add relative positioning to the container
    zIndex: -1, // Set a negative z-index to move the container behind other components
    width: "750px",
    height: '500px', // Set the desired height for the background image container
    

  };

  return (
    <div>
      <div style={containerStyle} />
     
    </div>
  );
}

export default Hiking;
