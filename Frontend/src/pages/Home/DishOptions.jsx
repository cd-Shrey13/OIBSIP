import H1 from '../../components/H1'
import { ToastContainer } from 'react-toastify'
import {
    FoodListProvider,
    useFoodList,
} from '../../Contexts/FoodItemsContext.jsx'
import { useStoreContext } from '../../Contexts/StoreContext.jsx'

function DishOptions() {
    return (
        <section
            id="menu"
            className="flex w-full items-center justify-center bg-[var(--color-creme)] px-4 font-Satohi"
        >
            <ToastContainer />
            <div className="flex w-full flex-col items-start justify-between gap-4 rounded-[12px] p-4 md:gap-4">
                <H1 className={'text-black'}>Best dishes near you</H1>
                <FoodListProvider>
                    <DishSlider />
                </FoodListProvider>
            </div>
        </section>
    )
}

function DishSlider() {
    const { foodList } = useFoodList()
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
    const { image, name, description, price, _id: itemId } = item
    const { addItemToCart } = useStoreContext()
    return (
        <>
            <div className="flex w-full flex-shrink-0 transform snap-start flex-col items-center justify-between gap-2 scroll-smooth rounded-[24px] bg-[#181818] p-[10px] text-white shadow-md transition-all duration-300 hover:bg-[#020202] md:hover:-translate-y-1">
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
                        <button
                            className="inline-block rounded-[14px] border-solid text-gray-700 focus:relative"
                            title="Add item to cart"
                            onClick={() => addItemToCart(itemId)}
                        >
                            <svg
                                fill="currentColor"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                width="4px"
                                height="4px"
                                viewBox="0 0 400 400"
                                className="flex size-10 rounded-[14px] p-2 shadow-lg hover:text-green-600"
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
                    </span>
                </span>
            </div>
        </>
    )
}

export default DishOptions
