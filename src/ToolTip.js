import HelpIcon from '@mui/icons-material/Help';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function ToolTip() {
  return (
    <div style={{margin: '100px'}}>
    <Tooltip title="Zoom In">
      <IconButton>
      
      </IconButton>
    </Tooltip>
    </div>
  );
}

