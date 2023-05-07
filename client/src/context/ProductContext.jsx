import React, { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext();
import axios from 'axios';
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/products")
                console.log(response.data.products);
                setProducts(response.data.products)
                // console.log(response.data.products[1])
            }
            catch (err) {
                setError(err.response.data);
            }
        };
        fetchProducts();

    }, [])
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}


export default ProductProvider