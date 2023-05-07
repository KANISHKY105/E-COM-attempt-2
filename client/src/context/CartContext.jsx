import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart');
                setCart(response.data.cart);
            } catch (err) {
                setError(err.response.data);
            }
        };
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
