import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addProduct, deleteProduct, deleteAllProduct } from "../features/cart/CartSlice";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";

const CartPage = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let number = 0;
    cartProducts.forEach((item) => (number += item.quantity * item.price));
    setTotal(number.toFixed(2));
  }, [cartProducts]);

  return (
    <PageContainer>
      {cartProducts.length === 0 ? (
        <Typography variant="h4" sx={{ color: Colors.primary, textAlign: "center", mt: "5rem" }}>
          Your Cart is empty
        </Typography>
      ) : (
        <>
          <Typography variant="h3" sx={{ textAlign: "center", mb: "3rem", color: Colors.primary }}>
            My Cart
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {cartProducts.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  maxWidth: '800px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  padding: '1rem',
                }}
              >
                <CardMedia
                  sx={{ height: { xs: '20rem', md: '15rem' }, width: { xs: '100%', md: '40%' }, objectFit: 'cover' }}
                  image={item.image}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ mb: '0.5rem' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.primary, mb: '1rem' }}
                  >
                    ${item.price}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: '1rem' }}>
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    mb: '1rem',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={() => dispatch(deleteProduct(item))}
                      aria-label="Remove one unit"
                      sx={{ color: Colors.secondary }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{item.quantity}</Typography>
                    <IconButton
                      onClick={() => dispatch(addProduct(item))}
                      aria-label="Add one unit"
                      sx={{ color: Colors.secondary }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <IconButton
                    onClick={() => dispatch(deleteAllProduct(item))}
                    aria-label="Delete all units of this product"
                    sx={{ color: Colors.secondary }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
            <Typography
              variant="h4"
              sx={{
                fontWeight: '600',
                mt: '3rem',
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: Colors.primaryLight,
                color: Colors.primaryDark,
              }}
            >
              Total: ${total}
            </Typography>
          </Box>
        </>
      )}
    </PageContainer>
  );
};

export default CartPage;
