import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const StoreContext = createContext(null)

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

    const [cartItems,cartTotalAmount] = useMemo(() => {
        const newFoodList = []
        let cartTotalAmount = 0

        for (const key in foodList) {
            let itemId = foodList[key]._id
            let quantity = itemsQuantityInCart[itemId]

            if (itemsQuantityInCart.hasOwnProperty(itemId)) {
                let obj = { ...foodList[key], quantity: quantity }
                cartTotalAmount += obj.price * quantity
                newFoodList.push(obj)
            }
        }

        return [[...newFoodList],(cartTotalAmount)];
    },[itemsQuantityInCart]);

    const contextValue = {
        foodList,
        cartItems,
        cartTotalAmount,
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

export function useStoreContext() {
    return useContext(StoreContext)
}

export default StoreContextProvider
