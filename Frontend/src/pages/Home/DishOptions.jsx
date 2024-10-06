import H1 from '../../components/H1'
import { ToastContainer } from 'react-toastify'
import { useStoreContext } from '../../Contexts/StoreContxt'
import QuantitySetter from '../../components/QuantitySetter.jsx'

function DishOptions() {
    return (
        <section className="flex w-full items-center justify-center bg-[var(--color-creme)] px-4 font-Satohi">
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
                        <QuantitySetter itemId={_id} />
                    </span>
                </span>
            </div>
        </>
    )
}

export default DishOptions
