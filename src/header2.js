import React from 'react';

function header2() {
  const headerStyle = {
    backgroundColor: '#36545d',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    height: '75px',
  };

  const h1Style = {
    margin: '0', // Adjust the margin to reduce the gap
  };

  const divStyle = {
    marginTop: '5px', // Adjust the margin or padding to reduce the gap
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>STUDENT EXERCISE 2</h1>
      <div style={divStyle}>[13 minutes]</div>
    </header>
  );
}

export default header2;

