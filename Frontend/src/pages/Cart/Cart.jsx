import React from 'react'
import Footer from '../../components/Footer'
import { useStoreContext } from '../../Contexts/StoreContxt'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import axios from 'axios'
import Razorpay from 'razorpay'

function Cart() {
    const { cartItems, cartTotalAmount } = useStoreContext()

    async function displayRazorpay() {
        const response = await axios.post(
            'http://localhost:3000/order/placeOrder',
            {
                userId: '66ba19e0dd08fdace795d7f3',
                items: cartItems,
                amount: (cartTotalAmount + cartTotalAmount * 0.18).toFixed(2),
                address: 'test',
            }
        )

        if (!response) {
            alert('Failed to create an order!')
            return
        }

        const payload = response.data.data

        const paymentObject = new window.Razorpay(payload)
        paymentObject.open()
    }

    return (
        <>
            <Navbar />
            <section className="flex w-full justify-center bg-[var(--color-creme)] py-2">
                <div className="flex max-w-fit flex-col items-center justify-center gap-4 rounded-[12px] bg-slate-50 px-4 py-8 sm:px-6 sm:py-4 lg:px-4">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Your Cart
                        </h1>
                    </header>
                    <div className="flex max-h-[80vh] w-full flex-col items-center justify-start gap-2 overflow-y-scroll rounded-[12px] bg-slate-100 p-4">
                        {cartItems.map((item, index) => (
                            <CartItemCard product={item} key={index} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-end border-t border-gray-100 px-4 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                            <dl className="space-y-0.5 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd>₹{cartTotalAmount}</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>GST</dt>
                                    <dd>
                                        ₹{(cartTotalAmount * 0.18).toFixed(2)}
                                    </dd>
                                </div>

                                <div className="flex justify-between !text-base font-medium">
                                    <dt>Total</dt>
                                    <dd>
                                        ₹
                                        {(
                                            cartTotalAmount +
                                            cartTotalAmount * 0.18
                                        ).toFixed(2)}
                                    </dd>
                                </div>
                            </dl>

                            <div className="flex justify-end">
                                <Button onClickHandler={displayRazorpay}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

function CartItemCard({ product }) {
    const { _id, name, image, price, description, category, quantity } = product
    const { itemsQuantityInCart, addItemToCart, removeItemFromCart } =
        useStoreContext()

    function handleOnClick(id) {
        // removeItemFromCart(id)
    }
    return (
        <div className="flex w-full items-center gap-4 rounded-[12px] bg-slate-200 p-2">
            <img
                src={`http://localhost:3000/images/${image}`}
                alt=""
                className="size-16 rounded object-cover"
            />

            <div>
                <h3 className="text-sm text-gray-900">{name}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                        <dt className="inline">Catergory: </dt>
                        <dd className="inline">{category}</dd>
                    </div>
                </dl>
            </div>

            <div className="flex w-fit flex-1 items-center justify-end gap-2 p-2">
                <div>
                    <div className="flex items-center justify-between gap-2 rounded-[8px] bg-slate-50 px-2 py-[6px]">
                        <button
                            className="inline-block rounded-[8px] text-gray-700 focus:relative"
                            title="Add item to cart"
                            onClick={() => removeItemFromCart(_id)}
                        >
                            <svg
                                width="4px"
                                height="4px"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex size-8 rounded-[12px] p-2 shadow-lg hover:text-red-600"
                            >
                                <path
                                    d="M16 12H8M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <p>{itemsQuantityInCart[_id]}</p>
                        <button
                            className="inline-block rounded-[8px] focus:relative"
                            title="Add item to cart"
                            onClick={() => addItemToCart(_id)}
                        >
                            <svg
                                fill="currentColor"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                width="4px"
                                height="4px"
                                viewBox="0 0 400 400"
                                className="flex size-8 rounded-[14px] p-2 shadow-lg hover:text-green-600"
                            >
                                <g>
                                    <g>
                                        <path
                                            stroke="currentColor"
                                            d="M199.995,0C89.716,0,0,89.72,0,200c0,110.279,89.716,200,199.995,200C310.277,400,400,310.279,400,200
			C400,89.72,310.277,0,199.995,0z M199.995,373.77C104.182,373.77,26.23,295.816,26.23,200c0-95.817,77.951-173.77,173.765-173.77
			c95.817,0,173.772,77.953,173.772,173.77C373.769,295.816,295.812,373.77,199.995,373.77z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            d="M279.478,186.884h-66.363V120.52c0-7.243-5.872-13.115-13.115-13.115s-13.115,5.873-13.115,13.115v66.368h-66.361
			c-7.242,0-13.115,5.873-13.115,13.115c0,7.243,5.873,13.115,13.115,13.115h66.358v66.362c0,7.242,5.872,13.114,13.115,13.114
			c7.242,0,13.115-5.872,13.115-13.114v-66.365h66.367c7.241,0,13.114-5.873,13.114-13.115
			C292.593,192.757,286.72,186.884,279.478,186.884z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
