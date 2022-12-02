import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import pic from "../images/Illustration_undraw.png";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const styles = {
  bgImg: {
    backgroundImage: `url(${pic})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/*  NavBar      */}
      <Box sx={{ flexGrow: 1 }} minHeight="10vh">
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Shopify
            </Typography>

            <Button color="inherit" onClick={() => { navigate("/signin") }}>Customer</Button>
            <Button color="inherit" onClick={() => { navigate("/admin/signin") }}>Admin</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Hero section */}
      <Box style={styles.bgImg} minHeight="90vh">
        <Box sx={{ position: "absolute", left: "2rem", top: "6rem" }}>
          <Typography
            variant="h3"
            color="initial"
            fontWeight="bold"
            display="inline"
          >
            Welcome,
            <br />
            to &nbsp;
          </Typography>
          <Typography
            variant="h1"
            color="blue"
            fontWeight="bold"
            display="inline"
          >
            Shopify.
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", right: "1rem", bottom: "7rem" }}>
          <Typography variant="h3" color="blue" fontWeight="bold">
            One stop solution
          </Typography>
          <br />
          <Typography variant="h4" color="black">
            for all your shopping needs!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
