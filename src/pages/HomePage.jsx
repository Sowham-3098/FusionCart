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
    "https://images.unsplash.com/photo-1605968758470-c6ff5308d3a6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1527286618915-b7f2f64ec57f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1572280492764-d54a3d441a08?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1518037867310-3e4dbe7efbb8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1562058551-c9bb40e1b8a8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1537847175807-7b29d5c2c99b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNzMwNDF8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzE0OTAy&ixlib=rb-1.2.1&q=80&w=400",
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
