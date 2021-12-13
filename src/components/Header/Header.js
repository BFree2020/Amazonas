import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { logOutInitiate } from '../../redux/actions';



const Header = () => {
    const {user, basket} = useSelector((state) => state.data);

    let dispatch = useDispatch();
    const handleAuth = () => {
        if(user){
        dispatch(logOutInitiate());
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header-logo" src="https://res.cloudinary.com/ditzsmhmy/image/upload/v1638077513/Amazonas/amazonas2_1.jpg"
                    alt="amazonas2_l" />
            </Link>
            <div className="header-option" style={{ marginRight: "-10px" }}>
                <LocationOnOutlinedIcon />
            </div>
            <div className="header-option">
                <span className="header-option1">Hola</span>
                <span id="map" className="header-option2">Registra Tu Dirección</span>
                {/* <div id="map"></div> */}
            </div>
            <div className="search">
                <select>
                    <option>Todos los Departamentos</option>
                </select>
                <input type="text" className="searchInput" />
                <SearchIcon className="searchIcon" />
            </div>
            <div className="header-nav">
                <Link to={`${user ? "/" : "/login"}`} className="header-link">
                    <div onClick={handleAuth} className="header-option">
                        <span className="header-option1">Hola, {user ? user.correo : "Invitado"}{""}
                        </span>
                        <span className="header-option2">{user ? "Sign Out" : "Ingresar"}
                        </span>
                    </div>
                </Link>
                <Link to="/ordenes" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Devoluciones</span>
                        <span className="header-option2">& Pedidos</span>
                    </div>
                </Link>

                <Link to="/Registro" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Tus</span>
                        <span className="header-option2">Primicias</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className="header-basket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header-option basket-count">{basket && basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
