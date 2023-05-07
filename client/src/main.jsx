import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProductProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './context/LoggedIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ProductProvider>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </ProductProvider>
  </ChakraProvider>,
)
