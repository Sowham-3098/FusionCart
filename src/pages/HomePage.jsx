import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  Typography,
  CardMedia,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const newImages = [
   "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80",
    "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  

  return (
    <Box
      sx={{
        backgroundColor: Colors.background,
        padding: "2rem",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mb: "3rem",
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: `linear-gradient(to right, ${Colors.primary} 50%, ${Colors.primaryLight} 100%)`,
            borderRadius: "15px",
            padding: "2rem",
            color: Colors.white,
            boxShadow: `0px 4px 10px ${Colors.shadow}`,
            maxWidth: "500px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: "1rem" }}>
            Discover the Latest Trends
          </Typography>
          <Typography variant="h5" sx={{ mb: "2rem" }}>
            Explore our new collection and find what you love!
          </Typography>
          <Link to={"/products"}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: Colors.secondary,
                "&:hover": {
                  backgroundColor: Colors.secondaryLight,
                },
              }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
        <CardMedia
          sx={{
            flex: 1,
            borderRadius: "15px",
            boxShadow: `0px 4px 10px ${Colors.shadow}`,
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}
          image="https://images.unsplash.com/photo-1560885155-7738f83d48a4?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=800"
          loading="lazy"
        />
      </Box>

      {/* New Arrivals Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: Colors.primary,
          mb: "3rem",
          fontWeight: "bold",
        }}
      >
        New Arrivals
      </Typography>
      <Grid container spacing={4}>
        {newImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: `0px 4px 10px ${Colors.shadow}`,
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "transform 0.3s",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`New Arrival ${index + 1}`}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: Colors.primaryLight,
                  color: Colors.white,
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Product Title</Typography>
                <Typography variant="body2">Product Description</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          mt: "4rem",
        }}
      >
        <Link to={"/products"}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: Colors.secondary,
              "&:hover": {
                backgroundColor: Colors.secondaryLight,
              },
            }}
          >
            See All Products
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
