// Import the React library to enable the use of JSX syntax and React components.
import React from 'react';

// Import the "Container" component from the Material-UI (MUI) library.
import Container from '@mui/material/Container';

// Define a functional component called "CustomContainer" with destructured props.
const CustomContainer = ({ 
  maxWidth,          // Maximum width of the container.
  backgroundColor,  // Background color of the container.
  color,            // Text color inside the container.
  marginTop,        // Margin top for the container.
  marginBottom,     // Margin bottom for the container.
  children          // The child elements that will be rendered inside the container.
}) => {
  // Define the styles for the container using an object.
  const containerStyles = {
    backgroundColor: backgroundColor || '#36545d', // Set the background color or use a default color if not provided.
    color: color || 'white',                      // Set the text color or use white as the default color if not provided.
    marginTop: marginTop || 10,                  // Set the margin top or use 10px as the default if not provided.
    marginBottom: marginBottom || 3,             // Set the margin bottom or use 3px as the default if not provided.
    borderRadius: '30px',                        // Set the border radius of the container.
    overflow: 'hidden',                          // Hide any content that overflows the container.
    padding: '35px 100px',                       // Set the padding inside the container.
    fontSize: '25px',                            // Set the font size of the text inside the container.
  };

  // Return the "Container" component from MUI with the provided maxWidth and the custom styles.
  return (
    <Container maxWidth={maxWidth} sx={containerStyles}>
      {children}  {/* Render the child elements inside the container. */}
    </Container>
  );
};

// Export the "CustomContainer" component to make it available for other parts of the application.
export default CustomContainer;
