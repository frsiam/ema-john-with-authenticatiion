import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
    }

    const handleLogIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='form-container'>
            { loading ? 'Loading..' : <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleLogIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required />
                        <p style={{color: 'red',textAlign: 'center'}}>{error?.message}</p>
                    </div>
                    <button className='form-submit' type="submit">Login</button>
                </form>
                <p className='form-text'>New to Ema-John? <Link className='form-link' to='/signup'>Create New Account</Link></p>
                <div className='form-line'>
                    <div>
                        <hr />
                    </div>
                    <p>or</p>
                    <div>
                        <hr />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Login;