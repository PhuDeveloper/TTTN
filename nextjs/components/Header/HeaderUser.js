import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';
export default function HeaderUser() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <WorkIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MYJOB
        </Typography>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}
