// Import the necessary React library
import React from 'react';

// Define a functional component 'Hiking' that takes props as input
const Hiking = ({ imageUrl, height, width, imagePosition, creditPosition }) => {
  
  // Helper function to get the image position value for CSS
  const getImagePositionValue = (value) => {
    if (typeof value === 'number') {
      return `${value}px`; // Use pixels for numerical values
    }
    return value; // If the value is not a number, assume it's a string like "center", "left", "right", etc.
  };

  // Styling for the container that holds the hiking image
  const containerStyle = {
    background: `url(${imageUrl})`, // Set the background image using the provided 'imageUrl' prop
    backgroundSize: 'contain', // Scale the image to fit the container while preserving its aspect ratio
    backgroundPosition: imagePosition
      ? `${getImagePositionValue(imagePosition[0])} ${getImagePositionValue(imagePosition[1])}`
      : 'right', // Use the first value for horizontal and the second value for vertical positioning; use 'right' as the default value if not provided
    backgroundRepeat: 'no-repeat', // Do not repeat the background image
    position: 'relative', // Make the container a positioned element
    zIndex: -1, // Set the z-index to -1 to position the container behind other elements
    width: width ? width : '750px', // Use the provided width prop or default to '750px'
    height: height ? height : '500px', // Use the provided height prop or default to '500px'
  };

  // Styling for the image credit text
  const imageCreditStyle = {
    position: 'relative', // Make the text position relative to its container
    bottom: creditPosition?.bottom ? `${creditPosition.bottom}px` : '10px', // Use the creditPosition prop to set the bottom position; use '10px' as the default value if not provided
    right: creditPosition?.right ? `${creditPosition.right}px` : '10px', // Use the creditPosition prop to set the right position; use '10px' as the default value if not provided
    background: 'rgba(0, 0, 0, 0)', // Set the background color to transparent
    color: '#000', // Set the text color to black
    padding: '25px 500px', // Set padding for the text
    fontSize: '10px', // Set the font size of the text
    borderRadius: '4px', // Add rounded corners to the text box
    marginLeft: '100px', // Add a left margin to the text box
  };

  // Return the JSX for the Hiking component
  return (
    <div>
      <div style={containerStyle} /> {/* Render the hiking image container */}
      <div style={imageCreditStyle}>
        Image by storyset on Freepik {/* Display the image credit text */}
      </div>
    </div>
  );
};

// Export the Hiking component to be used in other parts of the application
export default Hiking;
