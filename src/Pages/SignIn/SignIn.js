import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginLogo from '../../images/brand/brand.png';
import './SignIn.css';

export const signInSuccess = () => {
    return 'Login Successfully';
}

const SignIn = () => {
    const { signInUsingGoogle, signInUsingEmailAndPassword } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.form || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url)
            })
            .catch((e) => {

            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        signInUsingEmailAndPassword(email, password)
            .then(() => {
                history.push(redirect_url);
            })
            .catch((e) => {
                if (!email && !password) {
                    setError('Email and Password Field is Empty');
                } else if (!email) {
                    setError('Email Field is Empty');
                } else if (!password) {
                    setError('Password Field is Empty')
                } else {
                    setError('Invalid credential')
                }
            })
    }
    return (
        <div className="login-container" id="signin">
            <div className="login-form">
                <div className="text-center">
                    <img src={loginLogo} alt="" className="" />
                </div>
                <Form onSubmit={handleSignInSubmit}>
                    <Form.Control onBlur={handleEmail} className="mb-3 l-form" type="email" placeholder="Enter email" />
                    <Form.Control onBlur={handlePassword} className="mb-3 l-form" type="password" placeholder="Password" />
                    {error ? (<p className="error text-danger">{error}</p>) : ''}
                    <Button className="mb-2 w-100 l-form" variant="primary" type="submit">Log in</Button>
                </Form>
                <Link to="/signup">Create a new account?</Link>
                <p className="text-center fs-3">
                    OR
                </p>
                <div className="api-login">
                    <Button onClick={handleGoogleLogin} className="w-50" variant="outline-success">Google</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default SignIn;