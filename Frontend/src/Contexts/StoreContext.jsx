import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const StoreContext = createContext(null)

function StoreContextProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([])
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [itemsQuantityInCart, setItemsQuantityInCart] = useState(0)

    //This function gets cartdata from backend.
    async function getAndSetCartItemList() {
        const token = localStorage.getItem('key')
        if (!token) {
            console.log("reached Here")
            // Navigate('/login')
            setItemsInCart([])
            setItemsQuantityInCart(0)

            return
        }
        await axios
            .post('http://localhost:3000/cart/getitems', {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error('Some Error occured')
                    return
                }

                const cartItemsArray = response.data.data.cartItemsArray
                const cartTotalAmount = response.data.data.cartTotalAmount
                const numberOfItemsInCart =
                    response.data.data.numberOfItemsInCart

                setItemsInCart(cartItemsArray)
                setCartTotalAmount(cartTotalAmount)
                setItemsQuantityInCart((prev) => numberOfItemsInCart)
            })
            .catch((error) => toast.error(error.message))
    }

    //This function adds items to cart.
    function addItemToCart(itemId) {
        const token = localStorage.getItem('key')

        if (!token) {
            alert('Please Login to continue!')
            return
        }
        axios
            .post(`http://localhost:3000/cart/additem`, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
                itemId: itemId,
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error(response.data.msg)
                    return
                }
                getAndSetCartItemList()
            })
    }

    //This function removes items to cart.
    function removeItemFromCart(itemId) {
        const token = localStorage.getItem('key')
        if (!token) {
            alert('Please Login to continue!')
            return
        }
        axios
            .post(`http://localhost:3000/cart/removeitem`, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                    // Add any other custom headers here
                },
                itemId: itemId,
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error(response.data.msg)
                    return
                }
                getAndSetCartItemList()
            })
    }

    const contextValue = {
        itemsInCart,
        addItemToCart,
        removeItemFromCart,
        getAndSetCartItemList,
        cartTotalAmount,
        itemsQuantityInCart,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStoreContext() {
    return useContext(StoreContext)
}

export default StoreContextProvider
