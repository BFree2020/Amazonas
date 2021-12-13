import React from 'react';
import "./SingleProduct.css"
import { useParams } from 'react-router-dom';
import { products } from "../../utils/ProductsData"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';

const SingleProduct = () => {

    let { id } = useParams();
    let singleProduct = products.find((item) => item.id === id);
    let dispatch = useDispatch();

    const addItemToBasket = () => {
        const item = {
            id: singleProduct.id,
            title: singleProduct.title,
            price: singleProduct.price,
            image: singleProduct.image,
            specification: singleProduct.specification,
            detail: singleProduct.detail,
            rating: singleProduct.rating,
        }

        dispatch(addToBasket(item));
    }

    return (
        <div className="single-product-container">
            {
                console.log(singleProduct)
            }
            <img
                className="single-product-ad"
                src=""
                alt=""
            />
            <div>
                <div className="single-product">
                    <img
                        src={singleProduct.image}
                        className="single-product-image"
                        alt=""
                    />
                    <div className="single-product-info">
                        { <div className="single-product-title">{singleProduct.title}</div> }
                        <div className="single-product-rating">
                            {Array(singleProduct.rating)
                                .fill()
                                .map((_, index) => (
                                    <p key={index}></p>
                                ))}

                        </div>
                        <p className="single-product-price">
                            Precio: <strong>$</strong>
                            <strong>{singleProduct.price}</strong>
                        </p>
                        <div className="single-product-specification">
                            <h4>Especificaciones</h4>
                            {singleProduct.specification && singleProduct.specification.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                        <div className="single-product-description">
                            <h4>Descripcion Producto</h4>
                            <p>{singleProduct.detail}</p>
                        </div>
                        <button onClick={addItemToBasket}>
                            <i><ShoppingCartOutlinedIcon />
                            </i>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct;
