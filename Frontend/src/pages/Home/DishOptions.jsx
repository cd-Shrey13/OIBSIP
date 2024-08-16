import React, { useState } from 'react'
import H1 from '../../components/H1'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useStoreContext } from '../../Contexts/StoreContxt'

function DishOptions() {
    return (
        <section className="flex w-full items-center justify-center px-4 font-Satohi bg-[var(--color-creme)]">
            <ToastContainer />
            <div className="flex w-full flex-col items-start justify-between gap-4 rounded-[12px] p-4 md:gap-4">
                <H1 className={'text-black'}>Best dishes near you</H1>
                <DishSlider />
            </div>
        </section>
    )
}

function DishSlider() {
    const { foodList } = useStoreContext()
    return (
        <>
            <div className="no-scrollbar flex w-full snap-x flex-col items-center justify-start gap-2 overflow-y-scroll rounded-[40px] p-4 shadow-inner max-sm:h-[28rem] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {foodList ? (
                    foodList.map((items, index) => {
                        return <DishSliderCard item={items} key={index} />
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    )
}

function DishSliderCard({ item }) {
    const { image, name, description, price, _id } = item
    return (
        <>
            <div className="flex w-full flex-shrink-0 transform snap-start flex-col items-center justify-between gap-2 scroll-smooth rounded-[24px] bg-[#181818] p-[10px] text-white shadow-md transition-all duration-300 lg:hover:-translate-y-[2px]">
                <span className="">
                    <img
                        src={`http://localhost:3000/images/${image}`}
                        alt=""
                        className="rounded-[12px]"
                    />
                </span>
                <span className="flex w-full flex-shrink-0 flex-col items-start justify-center gap-2 rounded-[12px]">
                    <h2 className="flex-shrink-0 px-2 text-lg font-[900] lg:text-xl">
                        {name}
                    </h2>

                    <p className="flex w-full flex-shrink-0 items-center justify-start rounded-[4px] px-2">
                        {description}
                    </p>
                    <span className="flex w-full flex-shrink-0 items-center justify-between rounded-[4px] p-[4px]">
                        <h2 className="mb-2 text-lg font-[900]">
                            {'₹ ' + price}
                        </h2>
                        <AddIcon itemId={_id} />
                    </span>
                </span>
            </div>
        </>
    )
}

function AddIcon({ itemId }) {
    const { itemsQuantityInCart, addItemToCart, removeItemFromCart } = useStoreContext()

    return !itemsQuantityInCart[itemId] ? (
        <button
            className="inline-block rounded-[14px] text-gray-700 focus:relative"
            title="Add item to cart"
            onClick={() => addItemToCart(itemId)}
        >
            <svg
                fill="#000000"
                width="4px"
                height="4px"
                viewBox="0 0 400 400"
                className="flex size-8 rounded-[14px] bg-white p-2 shadow-lg hover:bg-gray-500 hover:text-white"
            >
                <g>
                    <g>
                        <path
                            d="M199.995,0C89.716,0,0,89.72,0,200c0,110.279,89.716,200,199.995,200C310.277,400,400,310.279,400,200
			C400,89.72,310.277,0,199.995,0z M199.995,373.77C104.182,373.77,26.23,295.816,26.23,200c0-95.817,77.951-173.77,173.765-173.77
			c95.817,0,173.772,77.953,173.772,173.77C373.769,295.816,295.812,373.77,199.995,373.77z"
                        />
                        <path
                            d="M279.478,186.884h-66.363V120.52c0-7.243-5.872-13.115-13.115-13.115s-13.115,5.873-13.115,13.115v66.368h-66.361
			c-7.242,0-13.115,5.873-13.115,13.115c0,7.243,5.873,13.115,13.115,13.115h66.358v66.362c0,7.242,5.872,13.114,13.115,13.114
			c7.242,0,13.115-5.872,13.115-13.114v-66.365h66.367c7.241,0,13.114-5.873,13.114-13.115
			C292.593,192.757,286.72,186.884,279.478,186.884z"
                        />
                    </g>
                </g>
            </svg>
        </button>
    ) : (
        <div className="flex items-center justify-between gap-2 rounded-[24px] bg-slate-600 px-2 py-[6px]">
            <button
                className="inline-block rounded-[14px] bg-red-500 text-gray-700 focus:relative"
                title="Add item to cart"
                onClick={() => removeItemFromCart(itemId)}
            >
                <svg
                    width="4px"
                    height="4px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex size-8 rounded-[14px] p-2 shadow-lg hover:bg-gray-500 hover:text-white"
                >
                    <path
                        d="M16 12H8M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <p>{itemsQuantityInCart[itemId]}</p>
            <button
                className="inline-block rounded-[14px] bg-green-500 text-gray-700 focus:relative"
                title="Add item to cart"
                onClick={() => addItemToCart(itemId)}
            >
                <svg
                    fill="#ffffff"
                    width="4px"
                    height="4px"
                    viewBox="0 0 400 400"
                    className="flex size-8 rounded-[14px] p-2 shadow-lg hover:bg-gray-500 hover:text-white"
                >
                    <g>
                        <g>
                            <path
                                d="M199.995,0C89.716,0,0,89.72,0,200c0,110.279,89.716,200,199.995,200C310.277,400,400,310.279,400,200
			C400,89.72,310.277,0,199.995,0z M199.995,373.77C104.182,373.77,26.23,295.816,26.23,200c0-95.817,77.951-173.77,173.765-173.77
			c95.817,0,173.772,77.953,173.772,173.77C373.769,295.816,295.812,373.77,199.995,373.77z"
                            />
                            <path
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
    )
}
export default DishOptions
