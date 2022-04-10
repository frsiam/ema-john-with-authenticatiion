import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [user] = useAuthState(auth)
    // const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressdlBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhonelBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = {name, email, address, phone}
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Your Shipping information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressdlBlur} type="text" name="address" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhonelBlur} type="number" name="phone" id="" required/>
                        <p style={{color:'red',textAlign: 'center'}}>{Error}</p>
                    </div>
                    <button className='form-submit' type="submit">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Shipment;