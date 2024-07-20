import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Typography,
  Box,
  Button,
  IconButton,
  Divider,
  ButtonGroup,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../styles/theme/theme";

const AppBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "none",
});

const AppBarLogo = styled(Typography)({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "1.5rem",
  textDecoration: "none",
  color: Colors.primary,
  display: "flex",
  alignItems: "center",
});

const Navbar = () => {
  const mainPages = ["home", "products"];

  const cartState = useSelector((state) => state.cart.cartProducts);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDrawer(open);
  };

  const drawerList = (anchor) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        padding: ".5rem",
        fontSize: "1.2rem",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ButtonGroup sx={{ display: "flex", flexDirection: "column", mb: ".5rem" }}>
        {mainPages.map((page) => (
          <Link
            key={page}
            to={`/${page === "home" ? "" : page}`}
            aria-label={`Go to page: ${page === "home" ? "Home" : page}`}
          >
            <Button key={page} sx={{ color: Colors.white, margin: "0 1rem" }} aria-label={page}>
              {page}
            </Button>
          </Link>
        ))}
      </ButtonGroup>
      <Divider color="white" />
      <Link to={`/account`} aria-label="Go to my Account">
        <Button sx={{ color: Colors.white, margin: ".5rem 0 0 .5rem" }}>
          <AccountCircleIcon />
        </Button>
      </Link>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ width: "100vw", fontSize: "1.2rem", padding: ".3rem" }}>
      {matches ? (
        <AppBarContainer>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleDrawer("top", true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer("top", false)}>
            {drawerList("top")}
          </Drawer>

          <AppBarLogo variant="h6" noWrap component="a" href="/">
            FusionCart <StoreIcon />
          </AppBarLogo>

          <Link to={`/cart`} aria-label="Go to my Cart">
            <Button sx={{ color: Colors.primary }}>
              <ShoppingCart />
              <Typography sx={{ marginTop: "-1rem" }}>{`(${cartState.length})`}</Typography>
            </Button>
          </Link>
        </AppBarContainer>
      ) : (
        <AppBarContainer>
          <AppBarLogo noWrap component="a" href="/">
            FusionCart <StoreIcon />
          </AppBarLogo>
          <ButtonGroup>
            {mainPages.map((page) => (
              <Link
                key={page}
                to={`/${page === "home" ? "" : page}`}
                aria-label={`Go to page: ${page === "home" ? "Home" : page}`}
              >
                <Button
                  key={page}
                  sx={{
                    color: Colors.primary,
                    margin: "0 1rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
          <Box>
            <Link to={`/account`} aria-label="Go to my Account Page">
              <Button sx={{ color: Colors.primary }}>
                <AccountCircleIcon />
              </Button>
            </Link>
            <Link to={`/cart`} aria-label="Go to my Cart">
              <Button sx={{ color: Colors.primary }}>
                <ShoppingCart />
                <Typography sx={{ marginTop: "-1rem" }}>{`(${cartState.length})`}</Typography>
              </Button>
            </Link>
          </Box>
        </AppBarContainer>
      )}
    </AppBar>
  );
};

export default Navbar;
