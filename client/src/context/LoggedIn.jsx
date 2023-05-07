import React, { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedEmail, setLoggedEmail] = useState('')
    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedEmail, setLoggedEmail }}>{children}</AuthContext.Provider>
}
export default AuthProvider