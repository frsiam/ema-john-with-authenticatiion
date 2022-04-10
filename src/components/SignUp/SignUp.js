import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" required/>
                    </div>
                    <button className='form-submit' type="submit">Sign Up</button>
                </form>
                <p className='form-text'>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;