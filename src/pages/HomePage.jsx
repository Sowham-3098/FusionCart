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

// Import the static image
import bannerImage from "../assets/banner.jpeg";

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const newImages = [
    {
      name: "Stylish Shirt",
      description: "A trendy shirt for all occasions.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Elegant Dress",
      description: "Perfect dress for your evening out.",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Casual Jeans",
      description: "Comfortable and stylish jeans.",
      image:
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Modern Sneakers",
      description: "Stylish sneakers for everyday wear.",
      image:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80",
    },
    {
      name: "Classic Watch",
      description: "A timeless accessory for any outfit.",
      image:
        "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      name: "Chic Handbag",
      description: "A stylish handbag for any occasion.",
      image:
        "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: Colors.background,
        padding: "2rem",
      }}
    >
      {/* Hero Section */}
      <Grid
        container
        spacing={4}
        sx={{
          mb: "3rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "15px",
              padding: "2rem",
              color: Colors.black,
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
                  backgroundColor: Colors.primary,
                  "&:hover": {
                    backgroundColor: Colors.secondaryLight,
                  },
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/target-route">
            <Box
              component="img"
              sx={{
                borderRadius: "15px",
                boxShadow: `0px 4px 10px ${Colors.shadow}`,
                width: "100%",
                maxWidth: "600px",
                height: "auto",
              }}
              src={bannerImage}
              alt="Static Image Link"
              loading="lazy"
            />
          </Link>
        </Grid>
      </Grid>

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
        {newImages.map((product, index) => (
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
                image={product.image}
                alt={product.name}
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
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
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
