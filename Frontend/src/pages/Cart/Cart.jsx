import React, { useCallback, useEffect, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { useStoreContext } from '../../Contexts/StoreContxt'
import { MinusIconSVG, PlusIconSVG } from '../../assets/svg/svg'
import axios from 'axios'
import H1 from '../../components/H1'
import { toast } from 'react-toastify'

function Cart() {
    const { itemsInCart, getAndSetCartItemList, cartTotalAmount } = useStoreContext()


    const handleCheckout = useCallback(
        async function displayRazorpay() {
            const token = localStorage.getItem('key')
            if (!key) {
                alert('Please Login to place order')
                return
            }
            const response = await axios.post(
                'http://localhost:3000/order/placeOrder',

                {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                      },
                    items: cartItems,
                    amount: (100 * 0.18).toFixed(
                        2
                    ),
                    address: 'test',
                }
            )

            if (!response) {
                alert(response.data.msg)
                return
            }

            const payload = response.data.data

            const paymentObject = new window.Razorpay(payload)
            paymentObject.open()
        },
        [itemsInCart]
    )

    useEffect(() => {
        getAndSetCartItemList()  
    },[])
    console.log(itemsInCart)
    return (
        <>

            <Navbar />
            <section className="flex w-full justify-center bg-[var(--color-creme)] py-2">
                <div className="flex w-screen flex-col items-center justify-center gap-4 rounded-[12px] bg-slate-50 px-4 py-8 sm:px-6 sm:py-4 lg:max-w-fit lg:px-4">
                    <header className="text-center">
                        <H1 className="text-black">Your Cart</H1>
                    </header>
                    <div className="flex max-h-[50vh] w-full flex-col items-center justify-start gap-2 overflow-y-scroll rounded-[12px] bg-slate-100 p-4 lg:max-h-[80vh]">
                        {itemsInCart.map((item, index) => (
                            <CartItemCard item={item} key={index} />
                        ))}
                    </div>
                    <div className="mt-8 flex w-full justify-end border-t border-gray-100 px-4 pt-8">
                        <div className="w-full space-y-4 lg:w-screen">
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
                                <Button
                                    onClickHandler={handleCheckout}
                                    className={
                                        'border-green-600 bg-green-500 font-[700] text-white shadow-lg hover:bg-green-800 active:text-green-500 lg:px-[24px] lg:py-[8px]'
                                    }
                                >
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

function CartItemCard({ item }) {
    const { id, name, image, category, price, quantity } = item
    const { itemsInCart, addItemToCart, removeItemFromCart } =
        useStoreContext()

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
                <div className="flex items-center justify-between gap-2 rounded-[8px] bg-slate-50 px-2 py-[6px]">
                    <button
                        className="inline-block rounded-[8px] text-gray-700 focus:relative"
                        title="Add item to cart"
                        onClick={() => removeItemFromCart(id)}
                    >
                        <MinusIconSVG />
                    </button>
                    <p>{quantity}</p>
                    <button
                        className="inline-block rounded-[8px] focus:relative"
                        title="Add item to cart"
                        onClick={() => addItemToCart(id)}
                    >
                        <PlusIconSVG />
                    </button>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-[8px] bg-slate-50 px-2 py-[6px]">
                    <p className="text-md p-2 text-red-700">
                        {quantity * price}₹
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cart
