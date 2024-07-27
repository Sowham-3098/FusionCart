import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Container,
} from "@mui/material";
import Loading from "./Loading";
import Error from "./Error";
import { Colors } from "../styles/theme/theme";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, displayProduct } from "../features/products/ProductsSlice";

const Products = ({ viewMode }) => {
  const dispatch = useDispatch();
  const { products, loading, error, filteredProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const ShowProducts = () => {
    const productsToShow = filteredProducts.length ? filteredProducts : products;
    return viewMode === "grid" ? (
      <Grid container spacing={3} sx={{ mt: "2rem" }} justifyContent="center">
        {productsToShow.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 300, height: 400 }}>
              <CardActionArea onClick={() => dispatch(displayProduct(product))}>
                <Link to={`/products/${product.id}`}>
                  <CardMedia
                    sx={{ height: 250, width: "100%" }}
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: Colors.grayDark, mt: ".5rem" }}
                    >
                      {product.title.substring(0, 20)}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: Colors.black,
                        mt: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Box>
        {productsToShow.map((product) => (
          <Card
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: "1rem",
              width: "100%",
              maxWidth: 800,
            }}
          >
            <CardActionArea onClick={() => dispatch(displayProduct(product))}>
              <Link to={`/products/${product.id}`}>
                <CardMedia
                  sx={{ height: 200, width: 200 }}
                  image={product.image}
                  title={product.title}
                />
                <CardContent sx={{ flexGrow: 1, padding: "1rem", textAlign: "left" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: Colors.grayDark }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: Colors.black,
                      mt: ".5rem",
                      fontWeight: "600",
                    }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    );
  };

  return (
    <>
      <Container>
        {loading ? <Loading /> : error !== "" ? <Error /> : <ShowProducts />}
      </Container>
    </>
  );
};

export default Products;
