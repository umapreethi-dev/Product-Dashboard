import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productItem, setProductItem] = useState({});
  useEffect(() => {
    fetch(`https://624e522677abd9e37c85941d.mockapi.io/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProductItem(data));
  }, []);
  console.log(productItem);

  return (
    <div>
      <div className="product-item">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <img
                src={productItem.image}
                alt={productItem.name}
                height="400px"
                width="400px"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <h2>{productItem.name}</h2>
              ⭐⭐⭐⭐⭐{productItem.rating}
              <p>Price: {productItem.price}$</p>
              <p>{productItem.description}</p>
              <Button
                size="small"
                variant="outlined"
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIcon/>}
              >
                BACK
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
