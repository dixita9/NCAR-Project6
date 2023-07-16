import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@material-ui/core';
import HelpIcon from '@mui/icons-material/Help';

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
