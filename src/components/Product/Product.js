import React from 'react';
import "./Product.css"
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {useDispatch} from "react-redux";
import { addToBasket } from '../../redux/actions';

const Product = ({ 
    id, 
    title, 
    image, 
    price, 
    specification, 
    detail, 
    rating, 
    }) => {

    const dispatch = useDispatch();

    const onAddItemToBasket = () => {
        const item = {
            id,
            title,
            image, 
            price, 
            specification, 
            detail, 
            rating, 
        }
        dispatch(addToBasket(item));
    }

    return (
        <div className="product">
            <div className="info">
                <Link to={`/product/${id}`} className="title">
                    <p>{title}</p>
                </Link>
                <p className="price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                        <p key={index}></p>
                        ))}
                </div>
            </div>
            <img class="zoom" src={image} alt="" />
            <button onClick={onAddItemToBasket}>
                <i>
                    <ShoppingCartOutlinedIcon />
                </i>
                Añadir Al Carrito
            </button>
        </div>
    );
};

export default Product;
