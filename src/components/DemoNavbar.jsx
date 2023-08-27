import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

function DemoNavbar() {

   const appBarStyle = {
    backgroundColor: 'black', 
   };
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

 const listStyle = {
    width: '250px', // Set the width of the list
    backgroundColor: 'white', // Background color
  };

  const listItemStyle = {
    padding: '16px 32px', // Padding for each list item
    borderBottom: '1px solid #ccc', // Add a border between items
  };

  const list = (
    <div style={listStyle}>
      <List>
        <ListItem style={listItemStyle}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem style={listItemStyle}>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem style={listItemStyle}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  
  return (
    <div>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Blogs Website
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
     
    </div>
  );
}

export default DemoNavbar;

