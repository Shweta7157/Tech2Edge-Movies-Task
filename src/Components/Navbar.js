import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" className="nav-style">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MovieFilterOutlinedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="animate-transition"
            >
              MS - Movies & Series
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <MovieFilterOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="animate-transition"
            >
              MS - Movies & Series
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
