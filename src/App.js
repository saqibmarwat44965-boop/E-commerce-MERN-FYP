import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Categories from "./components/categories/Categories";

import Admin from "./components/users/Admin";
import UserProfile from "./components/users/UserProfile";
import LoginUser from "./components/users/LoginUser";
import LogoutUser from "./components/users/LogoutUser";
import AddUser from "./components/users/AddUser";
import AllUsers from "./components/users/AllUsers";
import EditUser from "./components/users/EditUser";
import DeleteUser from "./components/users/DeleteUser";

import AddProduct from "./components/products/AddProduct";
import AllProducts from "./components/products/AllProducts";
import EditProduct from "./components/products/EditProduct";
import DeleteProduct from "./components/products/DeleteProduct";

import './lib/fontawesome-free-6.2.0-web/css/all.min.css';
import './App.css';

function App() {

  return (
    <div>
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&family=Catamaran&display=swap');
      </style>
      
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/categories" element={<Categories  />} />
        <Route exact path="/cart-main" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist  />} />
        <Route exact path="/admin-panel" element={<Admin />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/loginuser" element={<LoginUser />} />
        <Route exact path="/logoutuser" element={<LogoutUser />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/allusers" element={<AllUsers />} />
        <Route exact path="/edituser/user/:id" element={<EditUser />} />
        <Route exact path="/deleteuser/user/:id" element={<DeleteUser />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        <Route exact path="/editproduct/product/:id" element={<EditProduct />} />
        <Route exact path="/deleteproduct/product/:id" element={<DeleteProduct />} />
      </Routes>
    </Router>
  </div>
  );
}


export default App;
