import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from '@mui/material/Grid';

export default function HeroIntro() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item xs={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About me
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hi! My name is Tim O'Brien and I am web developer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Get In Touch
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
