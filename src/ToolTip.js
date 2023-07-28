import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: '20px', // Change this value to your desired font size
    color: 'white', // Additional custom styles for the tooltip
  },
}));

export default function CustomTooltip({ title, placement = 'top' }) {
  const classes = useStyles();

  return (
    <div style={{ margin: '1px' }}>
      <Tooltip title={title} placement={placement} classes={{ tooltip: classes.customTooltip }}>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
