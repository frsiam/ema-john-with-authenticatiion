import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:4000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [page, size])
    
    useEffect(() => {
        fetch('http://localhost:4000/productcount')
        .then(res => res.json())
        .then(data => {
            const pages = Math.ceil(data/10);
            setPageCount(pages);
        })
    },[])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = []
        const exists = cart.find(product => product._id === selectedProduct._id)
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        // const newCart = [...cart,selectedProduct]
        setCart(newCart);
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product._id}></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)}>{number + 1}</button>)  
                    }
                    <select className='select-option' onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;