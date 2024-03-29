import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Geeky
          </Typography>
          <Button
            component={NavLink}
            to="/"
            sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
                backgroundColor: isActive ? "#6d1b7b" : "",
              };
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
                backgroundColor: isActive ? "#6d1b7b" : "",
              };
            }}
          >
            Contact
          </Button>
          <Button
            component={NavLink}
            to="/login"
            sx={{ color: "white", textTransform: 'none' }}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
                backgroundColor: isActive ? "#6d1b7b" : "",
              };
            }}
          >
            Login/Registration
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
