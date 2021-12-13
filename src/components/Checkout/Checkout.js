import React from 'react';
import "./Checkout.css";
import { useSelector } from 'react-redux';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import SubTotal from '../SubTotal/SubTotal';


const Checkout = () => {
    const { basket, user } = useSelector((state) => state.data);
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src=""
                    alt=""
                />
            
            <div>
                <h3>Hola, {user?.email}</h3>
                <h2 className="checkout-title">
                    {basket.length === 0 
                     ?"Su Carrito de Compras Esta Vacio" 
                    : "Su Carrito de Compras"}
                </h2>
                {basket && basket.map((item) =>(
                 <CheckoutProduct
                 key={item.id}
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />   
                ))}
            </div>
            </div>
            <div className="checkout-right">
              <SubTotal /> 
            </div>
        </div>
    )
}

export default Checkout;
