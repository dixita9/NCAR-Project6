import React from 'react'; // Importing the React library
import IconButton from '@mui/material/IconButton';// Importing the IconButton component from the Material-UI library
import { Tooltip } from '@material-ui/core';  // Importing the Tooltip component from the Material-UI library
import HelpIcon from '@mui/icons-material/Help';  // Importing the HelpIcon component from the Material-UI library

//Defining a functional component called CustomTooltip that accepts two props: title and placement (with a default value of 'top')
export default function CustomTooltip({ title, placement = 'top' }) {
  return (
    <div style={{ margin: '1px' }}>
      <Tooltip title={title} placement={placement}>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
