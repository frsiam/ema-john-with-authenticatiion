import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [Error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,user,error] = useCreateUserWithEmailAndPassword(auth)

    if(user){
        navigate('/')
    }
    if(error){
        setError(error.message)
    }
    console.log(user)
    

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordlBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if(password !== confirmPassword){
            setError('Your confirm password is not matched')
            return;
        }
        if(password.length < 6){
            setError('Password must be 6 character or longer')
            return;
        }

        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordlBlur} type="password" name="confirm-password" id="" required/>
                        <p style={{color:'red',textAlign: 'center'}}>{Error}</p>
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