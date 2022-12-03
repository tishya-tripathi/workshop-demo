import * as React from "react";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";


export default function AdminViewProducts() {
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
  useEffect(() => {
    const allProduct = async () => {
      try {
        await axios.get("http://localhost:8000/allProduct",
          {
            headers: { "Content-Type": "application/json" },
            crossDomain: true,
          }
        ).then((res) => {
            console.log(res.data)
            if (res.data.status === 200) {
              setData(res.data)
            }
          });
      }
      catch(err) {
        console.log(err);
      }}
      allProduct();
  },[]);
  

  const productCard = (name, desc, link, price) => {
    
    const deleteProduct = async(productName) => {
        console.log("Product to be deleted: ", productName);
        // TODO - Delete Product
          try {
            await axios.delete("http://localhost:8000/deleteProduct", {productName,
              headers : {
                headers: { "Content-Type": "application/json" },
                crossDomain: true,
              }
            }
            ).then((res) => {
                console.log(res.data)
                // if (res.data.status === 200) {
                //   navigate("/viewProducts")
                // } else {
                //   window.alert("Invalid Credentials")
                // }
              });
          }
          catch(err) {
            console.log(err);
          }
        }
    
      
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
            <Button size="small" variant="contained" color="error" onClick={()=>{deleteProduct(name)}}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AdminNavbar />
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
