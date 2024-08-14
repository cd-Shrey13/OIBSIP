import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const StoreContext = createContext(null)

export function useStoreContext() {
    return useContext(StoreContext)
}

function StoreContextProvider({ children }) {
    const [itemsQuantityInCart, setItemsQuantityInCart] = useState({})
    const [foodList, setFoodList] = useState([])

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

    async function getCartItemList() {
        await axios
            .post('http://localhost:3000/cart/getitems', {
                id: '66ba19e0dd08fdace795d7f3',
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error('Some Error occured')
                    return
                }
                setItemsQuantityInCart(response.data.data)
                // getCartItemList()
            })

            .catch((error) => toast.error(error.message))
    }

    function addItemToCart(itemId) {
        axios
            .post(`http://localhost:3000/cart/additem`, {
                id: '66ba19e0dd08fdace795d7f3',
                productId: itemId,
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error(response.data.msg)
                    return
                }

                toast(response.data.msg)

                if (!itemsQuantityInCart[itemId]) {
                    setItemsQuantityInCart((prev) => ({ ...prev, itemId: 1 }))
                } else {
                    setItemsQuantityInCart((prev) => ({
                        ...prev,
                        [itemId]: prev[itemId] + 1,
                    }))
                }
                getCartItemList()
            })
    }

    function removeItemFromCart(itemId) {
        axios
            .post(`http://localhost:3000/cart/removeitem`, {
                id: '66ba19e0dd08fdace795d7f3',
                productId: itemId,
            })
            .then((response) => {
                if (!response.data.success) {
                    toast.error(response.data.msg)
                    return
                }

                toast(response.data.msg)
                setItemsQuantityInCart((prev) => ({
                    ...prev,
                    [itemId]: prev[itemId] - 1,
                }))
            })
    }

    useEffect(() => {
        getFoodList()
        getCartItemList()
    }, [])

    const contextValue = {
        foodList,
        setFoodList,
        itemsQuantityInCart,
        addItemToCart,
        removeItemFromCart,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
