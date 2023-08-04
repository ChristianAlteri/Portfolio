import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Project(props) {

    return (
      <div className="pb-5">
          <Grid
                  container
                  spacing={14}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ maxHeight: "90vh" }}
                  >

            
        {props.projects.map((project) => (
                        <Grid item md={5}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <CardMedia
                                component="img"
                                height="194"
                                image={project.image}
                                alt=""
                            />
                            <Typography variant="body2" color="text.secondary">
                                {project.about}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button href={project.url} size="small" color="primary">
                                View the project
                            </Button>

                        </CardActions>
                        </Card>
                        </Grid>
        ))}
        </Grid>
      </div>
    )
}