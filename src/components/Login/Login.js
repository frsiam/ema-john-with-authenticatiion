import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
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
            </div>
        </div>
    );
};

export default Login;