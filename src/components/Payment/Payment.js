import React from 'react';
import "./Payment.css";
import { useSelector, useDispatch } from 'react-redux';
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../../utils/BasketTotal';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../../utils/firebase';

const Payment = () => {
    const { basket, user } = useSelector((state) => state.data);
    const handleSubmit = (e) => {
        e.preventDeafault();
    }
    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Pago{<Link to="/checkout">{basket.length} items</Link>}</h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Dirección de Entrega</h3>
                    </div>
                    <div className="payment-adress">
                        <p>{user && user.correo}</p>
                        <p>La Calera, Plaza Principal</p>
                        <p>La Calera, Cundinamarca</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Articulos Escogidos y Entrega</h3>
                    </div>
                    <div className="payment-items">
                        {basket && basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Metodo de Pago</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                           <h3>Total Orden:{value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button>
                                    <span>Comprar Ahora</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
