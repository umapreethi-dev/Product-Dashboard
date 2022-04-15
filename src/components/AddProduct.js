import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState([]);
//   useEffect(() => {
//     fetch("https://624e522677abd9e37c85941d.mockapi.io/products")
//       .then((data) => data.json())
//       .then((data) => setProduct(data));
//   }, []);

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [rating,setRating] = useState("");
  const newProduct = {
      name: name,
      description: description,
      price: price,
      image: image,
      rating: rating
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
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
        <Button variant="contained"
        onClick={() => {
            fetch("https://624e522677abd9e37c85941d.mockapi.io/products", {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((data) => data.json())
            .then((data) => console.log(data)) 
        }
        
        }
        >Add Product</Button>
      </div>
    </div>
  );
}
