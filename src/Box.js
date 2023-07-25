import React from 'react'; // Import the React library
import Box from '@mui/material/Box'; // Import the Box component from the Material-UI library

// Define a custom reusable component called CustomBox with props
const CustomBox = ({
  width,         // Width of the box (if not provided, default is 'auto')
  height,        // Height of the box (if not provided, default is 'auto')
  bgcolor,       // Background color of the box (if not provided, default is '#36545d')
  color,         // Text color of the box (if not provided, default is 'white')
  marginTop,     // Top margin of the box (if not provided, default is 10)
  marginBottom,  // Bottom margin of the box (if not provided, default is 3)
  children,      // Content of the box passed as children
  padding,       // Padding of the box (if not provided, default is '20px' on all sides)
  style,         // Additional styles passed as an object to merge with default styles
  font           // Font size of the text (if not provided, default is '20px')
}) => {
  // Define the styles for the box
  const boxStyles = {
    width: width || 'auto', // Set the width of the box
    height: height || 'auto', // Set the height of the box
    backgroundColor: bgcolor || '#36545d', // Set the background color of the box
    color: color || 'white', // Set the text color of the box
    marginTop: marginTop || 10, // Set the top margin of the box
    marginBottom: marginBottom || 3, // Set the bottom margin of the box
    marginLeft: '120px', // Set the left margin of the box
    borderRadius: '30px', // Set the border radius of the box
    padding: padding || '20px', // Set the padding of the box (default is '20px' on all sides)
    fontSize: font || '20px', // Set the font size of the text
    ...style, // Merge any additional styles passed in the "style" prop
  };

  // Render the Box component from Material-UI with the calculated styles
  return (
    <Box sx={boxStyles}>
      {children} {/* Render the content passed as children */}
    </Box>
  );
};

export default CustomBox; // Export the CustomBox component to be used in other parts of the application
