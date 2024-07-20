import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import {
  Typography,
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Paper,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
  setSortingOption,
} from "../features/products/ProductsSlice";
import { PageContainer } from "../styles/page/containers";
import ViewList from "@mui/icons-material/ViewList";
import ViewModule from "@mui/icons-material/ViewModule";

const ProductsPage = () => {
  const filterButtons = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelry",
    "Electronics",
  ];

  const sortingOptions = [
    "Top Rated",
    "Price (High to Low)",
    "Price (Low to High)",
  ];

  const [sortingValue, setSortingValue] = useState("Top Rated");
  const [viewMode, setViewMode] = useState("grid"); // Default to grid view

  const dispatch = useDispatch();
  const { filteredProducts, sortingOption } = useSelector(
    (state) => state.products
  );

  const handleChange = (event) => {
    setSortingValue(event.target.value);
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  useEffect(() => {
    dispatch(setSortingOption(sortingValue));
    dispatch(sortProducts());
  }, [sortingValue]);

  useEffect(() => {
    dispatch(setSortingOption("Top Rated"));
  }, []);

  return (
    <PageContainer>
      <Typography variant="h3" sx={{ textAlign: "center", mb: "3rem", color: Colors.primary }}>
        Shop by Category
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          {/* Products Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: viewMode === "grid" ? "row" : "column",
              flexWrap: viewMode === "grid" ? "wrap" : "nowrap",
              gap: "1rem",
            }}
          >
            <Products viewMode={viewMode} /> {/* Pass viewMode prop to Products component */}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          {/* Filters Section */}
          <Paper
            sx={{
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: Colors.background,
              height: "100%", // Ensure it takes full height
            }}
          >
            <Typography variant="h6" sx={{ mb: "1rem", color: Colors.primary }}>
              Filter by Category
            </Typography>
            {filterButtons.map((button, key) => (
              <Button
                key={key}
                variant="outlined"
                sx={{ margin: ".5rem", textTransform: "capitalize" }}
                onClick={() => dispatch(filterProducts(button.toLowerCase()))}
              >
                {button}
              </Button>
            ))}
            <FormControl
              sx={{ minWidth: 160, mt: "1rem" }}
              size="small"
            >
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortingValue}
                onChange={handleChange}
                label="Sort By"
                sx={{ backgroundColor: Colors.white }}
              >
                {sortingOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={toggleViewMode}
              sx={{ mt: "1rem", width: "100%" }}
              variant="contained"
              startIcon={viewMode === "grid" ? <ViewList /> : <ViewModule />}
            >
              {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProductsPage;
