import React from 'react';
import Box from '@mui/material/Box';

const CustomBox = ({ bgcolor, color, marginTop, marginBottom, children, padding}) => {
  const boxStyles = {
    width: "500px",
    height: "550px",
    backgroundColor: bgcolor || '#36545d',
    color: color || 'white',
    marginTop: marginTop || 10,
    marginBottom: marginBottom || 3,
    marginLeft: "120px",
    borderRadius: '30px',
    padding: padding ||'35px' ,
    fontSize: '20px',
  };
  

  return (
    
    <Box sx={boxStyles}>
      {children}
    </Box>
  );
};

export default CustomBox;
