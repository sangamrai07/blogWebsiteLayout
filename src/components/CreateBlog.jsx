import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CreateBlog() {
  
   const buttonStyles = {
    color: 'white', // 
  
    width: '200px', 
   };
  
    const cardStyles = {
    color: 'gray', // 
  
      width: '600px', 
      
      
    };
  

  return (
    <>
      <Typography fontSize="32px" variant="overline" display="block" gutterBottom>
        CREATE BLOG
      </Typography>
      
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    
    >

    <Card elevation={4} style={cardStyles}>
      <CardContent>
        <form >
          <TextField
            
            fullWidth
            label="Name"
            name="name"
          
            margin="normal"
          />
          <TextField
            fullWidth
            
            label="Description"
            name="description"
           
            margin="normal"
          />
          <TextField
            fullWidth
            variant="filled" 
            type="file"
        
          
            // You can handle image upload logic here if needed
            margin="normal"
          />
          <Button type="submit" size="large" style={buttonStyles} variant="contained" color="primary">
            Save
          </Button>
        </form>
      </CardContent>
      </Card>
      </Box>
      </>
  );
}

export default CreateBlog;
