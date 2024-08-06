import React from 'react'
// import { menu_list } from '../../assets/assets'
import { assets, food_list, menu_list } from '../../assets/assets'
import H1 from '../../components/H1'
import { useCart } from '../../Contexts/context'

function DishOptions() {
    return (
        <section className="flex w-full items-center justify-center px-4 font-Satohi">
            <div className="flex w-full flex-col items-start justify-between gap-4 rounded-[12px] p-4 md:gap-4">
                <H1 className={'text-black'}>Best dishes near you</H1>
                <DishSlider />
            </div>
        </section>
    )
}

function DishSlider() {
    return (
        <>
            <div className="no-scrollbar flex w-full snap-x flex-col items-center justify-start gap-2 overflow-y-scroll rounded-[40px] p-4 shadow-inner max-sm:h-[28rem] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {food_list.map((items, index) => {
                    return (
                        <DishSliderCard
                            cardImage={items.image}
                            cardImageName={items.name}
                            key={index}
                            cardImageDescription={items.description}
                            itemPrice={items.price}
                            itemId={items._id}
                        />
                    )
                })}
            </div>
        </>
    )
}

function DishSliderCard({
    cardImage,
    cardImageName,
    cardImageDescription,
    itemPrice,
    itemId,
}) {

    return (
        <>
            <div className="flex w-full flex-shrink-0 transform snap-start flex-col items-center justify-between gap-2 scroll-smooth rounded-[24px] bg-[#181818] p-[10px] text-white shadow-md transition-all duration-300 lg:hover:-translate-y-[2px]">
                <span className="">
                    <img src={cardImage} alt="" className="rounded-[12px]" />
                </span>
                <span className="flex w-full flex-shrink-0 flex-col items-start justify-center gap-2 rounded-[12px]">
                    <h2 className="flex-shrink-0 px-2 text-lg font-[900] lg:text-xl">
                        {cardImageName}
                    </h2>

                    <p className="flex w-full flex-shrink-0 items-center justify-start rounded-[4px] px-2">
                        {cardImageDescription}
                    </p>
                    <span className="flex w-full flex-shrink-0 items-center justify-between rounded-[4px] p-[4px]">
                        <h2 className="mb-2 text-lg font-[900]">
                            {itemPrice + '₹'}
                        </h2>
                        <AddIcon
                            itemId={itemId}
                            
                        />
                    </span>
                </span>
            </div>
        </>
    )
}

function AddIcon({ itemId }) {
    const { cartItems, addItemToCart, cartTotalAmount } = useCart()

    function handleOnClick(itemId) {
        const fooditem = food_list.find((item) => item._id === itemId)
        addItemToCart(fooditem)
        console.log(cartTotalAmount)
    }

    return (
        <button
            className="inline-block text-gray-700  focus:relative  rounded-[14px]"
            title="Add item to cart"
            onClick={() => handleOnClick(itemId)}
        >
            <svg
                fill="#000000"
                width="4px"
                height="4px"
                viewBox="0 0 400 400"
                className="hidden size-4 rounded-[14px] bg-white p-2 shadow-lg sm:flex sm:size-8 hover:bg-gray-500 hover:text-white"
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
    )
}
export default DishOptions
