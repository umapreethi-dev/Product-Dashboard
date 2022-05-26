import Product from "./Product";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const secondary = pink["A400"];
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    fetch("https://624e522677abd9e37c85941d.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = (id) => {
    fetch(`https://624e522677abd9e37c85941d.mockapi.io/products/${id}`, {
      method: "DELETE",
    }).then(() => getProduct());
  };

  const productData = product.map((item) => {
    return (
      <Product
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        price={item.price}
        rating={item.rating}
        deleteButton={
          <IconButton
            aria-label="delete"
            color="error"
            className="product-badge"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        }
        editButton={
          <IconButton
            aria-label="delete"
            onClick={() => navigate(`/products/edit/${item.id}`)}
          >
            <EditIcon />
          </IconButton>
        }
      />
    );
  });
  return (
    <div className="container">
      <div className="product-container">{productData}</div>
    </div>
  );
}
