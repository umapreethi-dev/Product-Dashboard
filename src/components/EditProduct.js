import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://624e522677abd9e37c85941d.mockapi.io/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, []);

  return <div>{product && <EditProductForm product={product} />}</div>;
}

function EditProductForm({ product }) {
  console.log(product.name);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [rating, setRating] = useState(product.rating);
  const updateProduct = {
    name: name,
    description: description,
    price: price,
    image: image,
    rating: rating,
  };
  return (
    <div>
      <Card className="form-card">
        <h1>Edit Product</h1>

        <div className="form">
          <TextField
            id="standard-basic"
            value={name}
            label="Product Name"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-basic"
            value={description}
            label="Product description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            id="standard-basic"
            value={price}
            label="Product price"
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            id="standard-basic"
            value={image}
            label="Product image"
            onChange={(event) => setImage(event.target.value)}
          />
          <TextField
            id="standard-basic"
            value={rating}
            label="Product rating"
            onChange={(event) => setRating(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              fetch(
                `https://624e522677abd9e37c85941d.mockapi.io/products/${product.id}`,
                {
                  method: "PUT",
                  body: JSON.stringify(updateProduct),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((data) => data.json())
                .then((data) => console.log(data));
            }}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}
