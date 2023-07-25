import React from 'react';
import Box from '@mui/material/Box';

const CustomBox = ({ width, height, bgcolor, color, marginTop, marginBottom, children, padding, style, font }) => {
  const boxStyles = {
    width: width || 'auto',
    height: height || 'auto',
    backgroundColor: bgcolor || '#36545d',
    color: color || 'white',
    marginTop: marginTop || 10,
    marginBottom: marginBottom || 3,
    marginLeft: '120px',
    borderRadius: '30px',
    padding: padding || '20px', // Single prop for all sides, default is '20px'
    fontSize: font || '20px',
    ...style,
  };

  
  return (
    <Box sx={boxStyles}>
      {children}
    </Box>
  );
};

export default CustomBox;
