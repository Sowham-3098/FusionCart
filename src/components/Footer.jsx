import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Colors } from "../styles/theme/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        color: "white",
        width: "100vw",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2024 Sowham Bhuin
      </Typography>
      <Box sx={{ marginTop: "0.5rem" }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sowham-bhuin"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: "white", margin: "0 0.5rem" }}
        >
        <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Sowham-3098"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: "white", margin: "0 0.5rem" }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
