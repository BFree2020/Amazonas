import React from 'react'
import "./Home.css";
import { headerItems, products } from "../../utils/ProductsData"
import B1 from "../../Banners/b1.jpg";
import B2 from "../../Banners/b2.jpg";
import B3 from "../../Banners/b3.jpg";
import B4 from "../../Banners/b4.jpg";
import B5 from "../../Banners/b5.jpg";
import B10 from "../../Banners/b10.jpg";
import Slider from "../../components/Slider/Slider"
import Product from '../Product/Product';


const Home = () => {
    const banners = [B1, B2, B3, B4, B5, B10];
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
            </div>
            <div className="home">
                <div className="home-container">
                    <Slider images={banners} />
                    <div className="home-row">
                        {products.slice(0, 3).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            specification={item.specification}
                            detail={item.detail}
                            />
                        ))}
                       
                    </div>
                    <div className="home-row">
                        {products.slice(3, 6).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            specification={item.specification}
                            detail={item.detail}
                            />
                        ))}

                        </div>
                       
                    <div style={{ marginTop: "30px" }}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
