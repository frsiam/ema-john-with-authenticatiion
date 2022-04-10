import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product,handleRemoveProduct} = props
    const { name, price, shipping, quantity,img } = product
    return (
        <div className='review-item'>
            <div className='item-img'>
                <img src={img} alt="" style={{width: '91px'}}/>
            </div>
            <div className='item-details'>
                <h3 title={name}>{name.length > 20 ? name.slice(0,20) + '...':name}</h3>
                <p>Price: <span style={{color: 'tomato'}}>${price}</span></p>
                <p>Shipping: <span style={{color: 'tomato'}}>${shipping}</span></p>
                <p><small>Quantity: <span style={{color: 'tomato'}}>{quantity}</span></small></p>
            </div>
            <div className='item-delete'>
                <button onClick={ () =>handleRemoveProduct(product)}>
                    <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;