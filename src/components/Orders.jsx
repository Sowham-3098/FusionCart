import React, { useEffect, useState } from "react";
import { Typography, Paper, Card, CardContent, Box } from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`/api/orders?email=${email}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    if (email) {
      fetchOrders();
    }
  }, [email]);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1.5rem",
        maxWidth: { xs: "90vw", md: "70vw" },
        margin: "0 auto",
      }}
    >
      <Typography variant="h5" textAlign="left">
        My Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography mt="1rem" sx={{ color: Colors.grayLight }} variant="subtitle1">
          You have no orders yet
        </Typography>
      ) : (
        <Box mt="1rem">
          {orders.map((order) => (
            <Card key={order.id} sx={{ mb: "1rem", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Order ID: {order.id}</Typography>
                <Typography variant="body1">Total: ${order.total}</Typography>
                <Typography variant="body2" color={Colors.grayLight}>
                  {order.items.map((item) => (
                    <div key={item.id}>
                      {item.title} - ${item.price} x {item.quantity}
                    </div>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default Orders;
