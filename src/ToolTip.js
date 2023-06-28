import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@material-ui/core';
import HelpIcon from '@mui/icons-material/Help';

export default function CustomTooltip() {
  
  return (
    <div style={{ margin: '1px' }}>
      <Tooltip title = "A really good explanantion of rate and Throughput">
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

