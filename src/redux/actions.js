import * as types from "./actionTypes";
import {auth} from "../utils/firebase";

export const addToBasket = (item) => ({
    type: types.ADD_TO_BASKET,
    payload: item,
})

export const removeFromBasket = (id) => ({
    type: types.REMOVE_FROM_BASKET,
    payload: id,
})

const registerStar = () => ({
    type: types.REGISTER_START,
})

const registerSucces = (user) => ({
    type: types.REGISTER_SUCCES,
    payload: user,
})

const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

const loginStar = () => ({
    type: types.LOGIN_START,
})

const loginSucces = (user) => ({
    type: types.LOGIN_SUCCES,
    payload: user,
})

const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStar = () => ({
    type: types.LOGOUT_START,
})

const logoutSucces = () => ({
    type: types.LOGOUT_SUCCES,
   
})

const logoutError = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});


export const setuser = (user) => ({
    type: types.SET_USER,
    payload: user,
})

export const registerInitiate = (correo, contraseña) => {
    return function(dispatch) {
        dispatch(registerStar());
        auth
        .createUserWithEmailAndPassword(correo, contraseña)
        .then(({user}) =>{
            dispatch(registerSucces(user));
        })
        .catch((error) => dispatch(registerError(error.message)));
    }
}

export const loginInitiate = (correo, contraseña) => {
    return function(dispatch) {
        dispatch(loginStar());
        auth
        .signInWithEmailAndPassword(correo, contraseña)
        .then(({user}) =>{
            dispatch(loginSucces(user));
        })
        .catch((error) => dispatch(loginError(error.message)));
    }
}

export const logOutInitiate = () => {
    return function (dispatch){
        dispatch(logoutStar());
        auth
        .signOut().then((resp) => dispatch(logoutSucces()))
        .catch((error) => dispatch(logoutError(error.message)));
    }
}