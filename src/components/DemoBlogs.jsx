import React, { useEffect, useState } from 'react'
import axios from 'axios'




function DemoBlogs() {

    const [blogs, setBlogs] = useState([])

    useEffect(async () => {
   
        const response = await axios.get("https://test-api-hunchha089.onrender.com/blogs")
        console.log(response.data)
        if (response.data.status == 200) {
            setBlogs(response.data.blogs)
        }

    }, [])
    console.log(blogs)

  
    return (
        <>
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog._id}>
                        <Card sx={{ maxWidth: 300 }} >
              
                            <CardMedia
                                component="img"
                                alt="Blog 1"
                                height="140"
                                image={blog.image}
                            />
                             <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {blog.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {blog.description}
                            </Typography>
                            </CardContent>
                             <CardActions>
                            <Button size="small">Edit</Button>
                                <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                            </div>
                    )
                })
            }
        </>
    )
}

export default DemoBlogs