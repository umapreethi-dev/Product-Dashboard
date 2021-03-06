import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const newProduct = {
    name: name,
    description: description,
    price: price,
    image: image,
    rating: rating,
  };
  return (
    <div>
      <Card className="form-card">
        <h1>Add New Product</h1>

        <div className="form">
          <TextField
            id="standard-basic"
            label="Product Name"
            variant="standard"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Product description"
            variant="standard"
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Product price"
            variant="standard"
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Product image"
            variant="standard"
            onChange={(event) => setImage(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Product rating"
            variant="standard"
            onChange={(event) => setRating(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              fetch("https://624e522677abd9e37c85941d.mockapi.io/products", {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((data) => data.json())
                .then(() => navigate("/"));
            }}
          >
            Add Product
          </Button>
        </div>
      </Card>
    </div>
  );
}
