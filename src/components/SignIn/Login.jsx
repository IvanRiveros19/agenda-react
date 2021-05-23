import React from 'react';
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import LoginForm from "./LoginForm";

const Login = () => {
    const token = useSelector(state => state.user.token);

    return (
        <div className="login-container">
            {
                token ?
                    <h1>SIN TOKEN</h1> :
                    <LoginForm />
            }
        </div>
    );
};

export default Login;
