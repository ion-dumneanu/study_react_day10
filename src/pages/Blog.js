import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Blog = ()=>{

    return (
        <article className="blog">
            <h1>Blog Posts</h1>            

            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-1.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            How to install your phone
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-2.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Get a free 1 month app trial
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-3.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Upgrade your plan at anytime
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-4.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Where can i download this app
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-5.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Is free a setup fee
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 390 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="blog-1-6.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            How to deactivate app function
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 

                <Grid item xs="auto" >
                    <Button variant="contained">Load More</Button>
                </Grid>

            </Grid>

        </article>
    )
};

export default Blog;
