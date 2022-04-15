import Product from "./Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://624e522677abd9e37c85941d.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, []);

  const productData = product.map((item) => {
    return (
      <Product
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />
    );
  });
  return (
    <div>
      <div className="product-container">{productData}</div>
    </div>
  );
}
