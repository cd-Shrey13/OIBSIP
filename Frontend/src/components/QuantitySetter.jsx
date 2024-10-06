import { PlusIconSVG, MinusIconSVG } from '../assets/svg/svg'
import { useStoreContext } from '../Contexts/StoreContxt'


export default function QuantitySetter({ itemId }) {
    const { itemsInCart, addItemToCart, removeItemFromCart } =
        useStoreContext()

    return !itemsInCart[itemId] ? (
        <button
            className="inline-block rounded-[14px] text-gray-700 focus:relative border-solid"
            title="Add item to cart"
            onClick={() => addItemToCart(itemId)}
        >
            <PlusIconSVG />
        </button>
    ) : (
        <div className="flex items-center justify-between gap-2 rounded-[24px]">
            <button
                className="inline-block rounded-[14px] text-gray-700 focus:relative border-solid"
                title="Add item to cart"
                onClick={() => removeItemFromCart(itemId)}
            >
                <MinusIconSVG />
            </button>
            <p>{itemsInCart[itemId]}</p>
            <button
                className="inline-block rounded-[14px] text-gray-700 focus:relative border-solid" 
                title="Add item to cart"
                onClick={() => addItemToCart(itemId)}
            >
                <PlusIconSVG />
            </button>
            
        </div>
        

    )
}
