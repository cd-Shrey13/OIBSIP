// AuthContext.js
import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)

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
        let amount = 0;
        cartItems.forEach((item) => (amount += item.price));
        return amount;
    }, [cartItems])

    const addItemToCart = (item) => setCartItems((prev) => [...prev, item])
    const removeItemFromCart = (filterItem) =>
        setCartItems((prev) => prev.filter((item) => item !== filterItem))

    return (
        <CartContext.Provider
            value={{ cartItems, addItemToCart, removeItemFromCart, cartTotalAmount }}
        >
            {children}
        </CartContext.Provider>
    )
}
