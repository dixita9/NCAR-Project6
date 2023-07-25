import React from 'react';

const Hiking = ({ imageUrl, height, width, imagePosition, creditPosition }) => {
  const getImagePositionValue = (value) => {
    if (typeof value === 'number') {
      return `${value}px`; // Use pixels for numerical values
    }
    return value; // If the value is not a number, assume it's a string like "center", "left", "right", etc.
  };

  const containerStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: imagePosition
      ? `${getImagePositionValue(imagePosition[0])} ${getImagePositionValue(imagePosition[1])}`
      : 'right', // Use the first value for horizontal and the second value for vertical positioning; use 'right' as the default value if not provided
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: -1,
    width: width ? width : '750px',
    height: height ? height : '500px',
  };

  const imageCreditStyle = {
    position: 'relative',
    bottom: creditPosition?.bottom ? `${creditPosition.bottom}px` : '10px', // Use the creditPosition prop to set the bottom position; use '10px' as the default value if not provided
    right: creditPosition?.right ? `${creditPosition.right}px` : '10px', // Use the creditPosition prop to set the right position; use '10px' as the default value if not provided
    background: 'rgba(0, 0, 0, 0)',
    color: '#000',
    padding: '25px 500px',
    fontSize: '10px',
    borderRadius: '4px',
    marginLeft: '100px',
  };

  return (
    <div>
      <div style={containerStyle} />
      <div style={imageCreditStyle}>
        Image by storyset on Freepik
      </div>
    </div>
  );
};

export default Hiking;
