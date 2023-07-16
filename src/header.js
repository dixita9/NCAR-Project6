import React from 'react';

// Header component begins here, it takes Title and Subtitle as parameters
function Header({ title, subtitle }) {
  // Styling for the header component
  const headerStyle = {
    backgroundColor: '#36545d', // Background color of the header
    color: 'white', // Text color of the header
    padding: '20px', // Padding around the header content
    textAlign: 'center', // Center alignment of the header content
    height: '75px', // Height of the header
  };

  // Styling for the h1 element within the header
  const h1Style = {
    margin: '0', // Remove any margin around the h1 element
  };

  // Styling for the Subtitle
  const divStyle = {
    marginTop: '5px', // Add some top margin to the div element
  };

  // Render the header component
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>{title}</h1>
      <div style={divStyle}>{subtitle}</div>
    </header>
  );
}

export default Header; // Export the Header component as the default export



