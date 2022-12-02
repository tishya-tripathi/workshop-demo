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
import TextField from "@mui/material/TextField";



export default function AdminAddProducts() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        const product = {
            name: data.get("productName"),
            description: data.get("productDescription"),
            link: data.get("imageLink"),
            price: data.get("productPrice")
        }
        console.log("Add Product: ", product)
        // TODO - Call API for adding product
    }
    
    return (
        <>
            <Navbar/>
            <Container component="form" onSubmit={handleSubmit} margin="2rem" sx={{width:"50%", display:"flex", flexDirection:"column"}}>
            <TextField
              margin="normal"
              required
              label="Product Name"
              name="productName"
            />
            <TextField
              margin="normal"
              required
              label="Product Description"
              name="productDescription"
            />
            <TextField
              margin="normal"
              required
              label="Image Link"
              name="imageLink"
            />
            <TextField
              margin="normal"
              required
              label="Product Price"
              name="productPrice"
            />
            <Button type="submit" variant="contained"> Add Product</Button>
            </Container>
        </>
    )

}