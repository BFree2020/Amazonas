import React, { useEffect } from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from './utils/firebase';
import { setuser } from './redux/actions';
import Product from './components/Product/Product';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser))
      } else {
        dispatch(setuser(null));
      }
    })
  }, [dispatch])
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
