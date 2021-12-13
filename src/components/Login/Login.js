import React, {useState, useEffect} from 'react';
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import amazonas2_1 from "../../amazonas2_1.jpg";
import {useSelector, useDispatch} from "react-redux";
import {loginInitiate} from "../../redux/actions"

const Login = () => {
    const[correo, setCorreo]  = useState("");
    const[contraseña, setContraseña] =useState("");

    const {user} = useSelector((state) => state.data);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() =>{
        if(user)  {
        navigate("/");
        }
    }, [user, dispatch])

    const signIn = (e) =>{
        e.preventDefault();
        dispatch(loginInitiate(correo, contraseña));
        setCorreo("");
        setContraseña("");
    };

    return (
        <div className="login">
            <Link to="/">
                <img src={amazonas2_1} className="login-logo" alt="logo"/>
            </Link>
            <div className="login-container">
                <h1>Ingreso</h1>
                <form>
                    <h5>Correo</h5>
                    <input 
                    type="text" 
                    value={correo} 
                    onChange = {(e) => setCorreo(e.target.value)}
                     />
                    <h5>Contraseña</h5>
                    <input 
                    type="contraseña" 
                    value={contraseña} 
                    onChange = {(e) => setContraseña(e.target.value)}
                     />
                     <button type="submit" onClick={signIn} className="login-signIn">
                     Ingresar 
                    </button>
                </form>
                <p>Con este registro usted acepta las condiciones de privacidad de Amazonas
                </p>
            </div>
            <p>Aun no está Registrado ?</p>
            <Link to="/register">
                <button class="login-register">Cree su Cuenta</button>
            </Link>


        </div>
    )
}

export default Login
