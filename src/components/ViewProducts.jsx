import * as React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";



export default function ViewProducts() {
  const navigate = useNavigate();

  const [data, setData] = React.useState([
    {
      id: "1",
      productName: "Lizard 1",
      productDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      imageLink: "https://picsum.photos/200",
      productPrice: "3500",
    },
    {
      id: "2",
      productName: "Lizard 2",
      productDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      imageLink: "https://picsum.photos/200",
      productPrice: "4500",
    },
    {
      id: "3",
      productName: "Lizard 3",
      productDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      imageLink: "https://picsum.photos/200",
      productPrice: "5500",
    },
    {
      id: "4",
      productName: "Lizard 4",
      productDescription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      imageLink: "https://picsum.photos/200",
      productPrice: "6500",
    },
  ]);

  // TODO - Fetch All Products from Backend and store using setData()


  const productCard = (name, desc, link, price) => {
    return (
      <Grid item xs={12} sm={4} lg={3} align="center">
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            component="img"
            height="140"
            src={link}
            alt="green iguana"
          />
          <CardContent sx={{backgroundColor: "whitesmoke"}}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
          <CardActions sx={{backgroundColor: "whitesmoke", display: "flex", justifyContent: "space-around"}}>
            <Typography variant="h6" color="inherit">Rs. {price}</Typography>
            <Button size="small" variant="contained">Buy</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2} marginTop="1rem">
          {data.map((data, index) =>
            productCard(
              data.productName,
              data.productDescription,
              data.imageLink,
              data.productPrice
            )
          )}
        </Grid>
      </Box>
    </>
  );
}
