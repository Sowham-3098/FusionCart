import React, { useState } from "react";
import { Typography, Paper, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";
import jsPDF from 'jspdf'; // Ensure jsPDF is installed for PDF generation

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptData, setReceiptData] = useState("");

  const handleCheckout = () => {
    // Generate receipt data
    const receiptContent = generateReceipt();
    setReceiptData(receiptContent);

    // Simulate a successful payment process
    setTimeout(() => {
      setIsSuccess(true);
      alert("Payment successful!"); // Dummy payment success alert
    }, 1000); // Simulate a delay for payment processing
  };

  const generateReceipt = () => {
    let receipt = `Receipt\n\n`;
    receipt += `Name: ${name}\n`;
    receipt += `Address: ${address}\n`;
    receipt += `Payment Method: ${paymentMethod}\n\n`;

    receipt += `Items:\n`;
    // Replace with your actual cart items
    const cartProducts = [
      { title: "Item 1", price: 10, quantity: 1 },
      { title: "Item 2", price: 20, quantity: 2 },
    ];
    cartProducts.forEach((item) => {
      receipt += `${item.title} - $${item.price} x ${item.quantity}\n`;
    });

    const total = cartProducts.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    receipt += `\nTotal: $${total}`;

    return receipt;
  };

  const generatePDF = (receiptContent) => {
    const doc = new jsPDF();
    
    // Add receipt text to the PDF
    doc.text(receiptContent, 10, 10);
    
    // Save the PDF
    doc.save('receipt.pdf');
  };

  return (
    <PageContainer>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: "3rem", color: Colors.primary }}>
          Checkout
        </Typography>
        <Paper
          elevation={3}
          sx={{ padding: "1.5rem", marginBottom: "2rem" }}
        >
          <Typography variant="h5" sx={{ mb: "1rem" }}>
            Shipping Information
          </Typography>
          <TextField
            label="Name"
            fullWidth
            sx={{ mb: "1rem" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            sx={{ mb: "1rem" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormControl fullWidth sx={{ mb: "1rem" }}>
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              label="Payment Method"
            >
              <MenuItem value="card">Card Payment</MenuItem>
              <MenuItem value="cash">Cash on Delivery</MenuItem>
              <MenuItem value="netbanking">Net Banking</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{ backgroundColor: Colors.primary }}
            onClick={handleCheckout}
          >
            Place Order
          </Button>
        </Paper>
        {isSuccess && (
          <Box>
            <Typography variant="h6" sx={{ color: Colors.success }}>
              Your order has been placed successfully!
            </Typography>
            <Typography variant="h6" sx={{ mt: "1rem" }}>
              Receipt:
            </Typography>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{receiptData}</pre>
            <Button
              variant="contained"
              sx={{ mt: "1rem", backgroundColor: Colors.primary }}
              onClick={() => generatePDF(receiptData)}
            >
              Download PDF
            </Button>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default CheckoutPage;
