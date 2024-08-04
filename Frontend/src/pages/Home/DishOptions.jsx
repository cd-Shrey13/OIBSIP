import React from 'react'
// import { menu_list } from '../../assets/assets'
import { food_list } from '../../assets/assets'
import H1 from '../../components/H1'

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
            <div className="no-scrollbar flex w-full snap-x scroll-p-2 flex-col items-center justify-start gap-2 overflow-y-scroll rounded-[12px] max-sm:h-[28rem] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {food_list.map((items, index) => {
                    return (
                        <DishSliderCard
                            cardImage={items.image}
                            cardImageName={items.name}
                            key={index}
                            cardImageDescription={items.description}
                            itemPrice={items.price}
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
}) {
    return (
        <>
            <div className="flex w-full flex-shrink-0 transform snap-start flex-col items-center justify-between gap-2 scroll-smooth rounded-[24px] p-[10px] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <span className="">
                    <img src={cardImage} alt="" className="rounded-[12px]" />
                </span>
                <span className="flex w-full flex-shrink-0 flex-col items-center justify-start rounded-[12px] p-[8px]">
                    <span className="justify-startp-2 flex w-full flex-shrink-0 items-center rounded-[4px] p-[4px]">
                        <h2 className="mb-2 text-lg font-[900]">
                            {cardImageName}
                        </h2>
                    </span>
                    <p className="justify-startp-2 flex w-full flex-shrink-0 items-center rounded-[4px] p-[4px]">
                        {cardImageDescription}
                    </p>
                    <span className="justify-startp-2 flex w-full flex-shrink-0 items-center rounded-[4px] p-[4px]">
                        <h2 className="mb-2 text-lg font-[900]">
                            {itemPrice + '₹'}
                        </h2>
                    </span>
                </span>
            </div>
        </>
    )
}

export default DishOptions
