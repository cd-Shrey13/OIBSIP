// AuthContext.js
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { resolvePath } from 'react-router-dom'
import axios from 'axios'
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)

    useEffect(() => {
        const token = localStorage.getItem('key')

        if (!token) {
            setIsLoggedIn(false)
            return
        }

        axios
            .post('http://localhost:3000/validateUser',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                  }
            })
            .then((response) => {
                if (response.data.success) {
                    setIsLoggedIn(true)
                }
                return
            })
            .catch((err) => {
                console.error(err)
            })
    })

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const cartTotalAmount = useMemo(() => {
        let amount = 0
        cartItems.forEach((item) => (amount += item.price))
        return amount
    }, [cartItems])

    const addItemToCart = (item) => setCartItems((prev) => [...prev, item])
    const removeItemFromCart = (filterItemId) =>
        setCartItems((prev) => prev.filter((item) => item._id !== filterItemId))

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                cartTotalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
