
import React from 'react';//import React
import Container from '@mui/material/Container';

const CustomContainer = ({ maxWidth, backgroundColor, color, marginTop, marginBottom, children }) => {
  const containerStyles = {
    backgroundColor: backgroundColor || '#36545d',
    color: color || 'white',
    marginTop: marginTop || 10,
    marginBottom: marginBottom || 10,
    borderRadius: '30px',
    overflow: 'hidden',
    padding: '35px',
    fontSize: '25px',

  };

  return (
    <Container maxWidth={maxWidth} sx={containerStyles}>
      {children}
    </Container>
  );
};

export default CustomContainer;



