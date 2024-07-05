import { Box,Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <Box
      id="error-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "450px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "180px",
          height: "180px",
          margin: "0 auto 50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            background: "#F40000",
            transform: "rotate(45deg)",
            border: "5px dashed #000",
            borderRadius: "5px",
          }}
        ></Box>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            color: "#fff",
            fontWeight: "700",
            fontSize: "90px",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            lineHeight: '40px'
          }}
        >
          404
        </Typography>
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "33px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "7px",
        }}
      >
        {error.statusText || error.message}
      </Typography>
      <Typography
        variant="subtitle"
        mt={4}
        mb={4}
        sx={{ fontSize: "16px", fontWeight: "400" }}
      >
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </Typography>
      <Link
        to="run-analytics"
        style={{
          textDecoration: "none",
          background: "#F40000",
          padding: "10px 20px",
          color: "white",
          borderRadius: "15px",
        }}
      >
        Go Back
      </Link>
    </Box>
  );
}

export default ErrorPage