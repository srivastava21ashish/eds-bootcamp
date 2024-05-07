import Home from "./pages/HomePage/HomePage";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import { React, useEffect } from "react";
import $ from "jquery";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  let DEFAULT_ROUTE_PAGE = <Home />
  useEffect(() => {
    $("button[href]").unbind('click').on('click', function(){
      console.log("button href: " + $(this).attr('href'));
      if ($(this).attr('href')) {
        window.location.href = $(this).attr('href');
      }
    });
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={DEFAULT_ROUTE_PAGE} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
