import React from 'react';
import ProductList from "./pages/ProductList"
import Home from "./pages/Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, Navigate
} from "react-router-dom";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector(state=> state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login"  element={ user? <Navigate replace to="/" /> :<Login /> } />
        <Route path="/register" element={user ? <Navigate replace to="/" /> :<Register />  } />
        

      </Routes>
    </Router>
  );
};

export default App;