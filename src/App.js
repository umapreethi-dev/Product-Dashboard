import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import ProductItem from "./components/ProductItem";
import EditProduct from "./components/EditProduct";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <NavBar mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductItem />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
