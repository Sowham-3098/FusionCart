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
  TextField,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
  setSortingOption,
  setSearchTerm,
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
  const [searchTerm, setSearchTermState] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // Default to "all" filter

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

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTermState(searchValue);
    dispatch(setSearchTerm(searchValue));
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter.toLowerCase());
  };

  useEffect(() => {
    dispatch(setSortingOption(sortingValue));
    dispatch(sortProducts());
  }, [sortingValue]);

  useEffect(() => {
    dispatch(filterProducts(selectedFilter));
  }, [selectedFilter, searchTerm, dispatch]);

  useEffect(() => {
    dispatch(setSortingOption("Top Rated"));
  }, [dispatch]);

  return (
    <PageContainer>
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
          <Paper sx={{ padding: "1rem" }}>
            {/* Filter Section */}
            <Typography variant="h6" sx={{ mb: "1rem", fontWeight: "bold" }}>
              Filter Products
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {filterButtons.map((filter, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{ bgcolor: Colors.primary, color: Colors.white }}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </Button>
              ))}

              {/* Sorting Section */}
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortingValue} onChange={handleChange}>
                  {sortingOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Search Section */}
              <TextField
                label="Search Products"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
              />
              
              {/* View Toggle */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  startIcon={<ViewModule />}
                  onClick={toggleViewMode}
                  disabled={viewMode === "grid"}
                >
                  Grid
                </Button>
                <Button
                  startIcon={<ViewList />}
                  onClick={toggleViewMode}
                  disabled={viewMode === "list"}
                >
                  List
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProductsPage;
