import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const StoreContext = createContext(null)

function StoreContextProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([])
    const [foodList, setFoodList] = useState([])
    const [cartTotalAmount, setCartTotalAmount] = useState(null)

    //This function loads foodlist data from backend.
    async function getFoodList() {
        const response = await axios.get(
            'http://localhost:3000/food/listfooditems'
        )
        if (!response.data.success) {
            toast.error('Some Error occured')
            return
        }
        setFoodList(response.data.data)
    }

    //This function gets cartdata from backend.
    async function getAndSetCartItemList() {
        const token = localStorage.getItem('key')
        if (!token) {
            Navigate('/login')
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
                setItemsInCart(response.data.data.cartItemsArray)
                setCartTotalAmount(response.data.data.cartTotalAmount)
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

    useEffect(() => {
        getFoodList()
    }, [])

    const contextValue = {
        foodList,
        setFoodList,
        itemsInCart,
        addItemToCart,
        removeItemFromCart,
        getAndSetCartItemList,
        cartTotalAmount,
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
