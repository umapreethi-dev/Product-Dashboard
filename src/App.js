import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./components/Home"
import AddProduct from "./components/AddProduct"
import NavBar from "./components/NavBar"
import ProductItem from "./components/ProductItem"

function App() {
  
  return (
    <div className="App">
     {/* <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
