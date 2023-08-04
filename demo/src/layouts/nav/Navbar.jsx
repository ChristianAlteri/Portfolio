import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="white"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/" color="inherit" style={{ textDecoration: "none" }}>
              Tim's Portfolio
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Typography color="white"> Portfolio</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography color="white"> Contact Me</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography color="white"> About Me</Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
