import React, { useState, useEffect } from 'react';
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import AmazonasLogo from "../../amazonas2_1.jpg";
import {useSelector, useDispatch} from "react-redux";
import { registerInitiate } from '../../redux/actions';

const Register = () => {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const {user} = useSelector((state) => state.data);

    const navigate = useNavigate();
    let dispatch = useDispatch();
       useEffect(() => {
        if(user){
            navigate("/");
        }
       }, [user, dispatch]);

   

    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(correo, contraseña))
        setCorreo("");
        setContraseña("");

    }

    return (

        <div className="register">
            <Link to="/">
                <img src={AmazonasLogo} className="register-logo" alt="logo" />
            </Link>
            <div className="register-container">
                <h1>Crear una cuenta</h1>
                <form>
                    <h5>Correo</h5>
                    <input
                        type="text"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <h5>Contraseña</h5>
                    <input
                        type="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    <button type="submit" onClick={register} className="continue">
                        Continuar
                    </button>
                    <div className="detail">
                        <p>Ya tiene cuenta ? </p>
                        <Link to="/login" className="signin-link">
                            <p>Ingresar</p>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;
