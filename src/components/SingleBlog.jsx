import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import myImg from "./img1.jpg"



function SingleBlog() {

  const cardStyles = {
    width: "300px",
    background: "white",
    color: "gray"
  };

  return (
    <>
          <Card style={cardStyles}>
      <CardMedia
          component="img"
        alt="Blog 1"
          height="140"
          image={myImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blog 1
        </Typography>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam exercitationem accusantium provident autem ducimus odio labore repudiandae maiores earum! 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined'>Edit</Button>
              <Button variant="outlined" size='small' startIcon={<DeleteIcon />}>
        Delete
      </Button>

      </CardActions>
    </Card>

    </>
  )
}

export default SingleBlog
