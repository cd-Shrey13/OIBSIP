import React from 'react'
import { assets } from '../../assets/assets.js'
import { menu_list } from '../../assets/assets.js'

function MenuOptions() {
    return (
        <section className="flex w-full items-center justify-center px-4 font-Satohi">
            <div className="flex w-full flex-col items-start justify-between gap-4 rounded-[12px] p-4 text-black sm:h-[30rem] md:gap-4 md:py-2 lg:h-[38rem] lg:py-8">
                <h1 className="text-[1.9rem] font-[900] leading-8 sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4.4rem]">
                    Explore our <br /> menu
                </h1>
                <p className="text-md max-w-[55ch] leading-6 sm:text-[1.5rem]">
                    Choose from a diverse menu featuring a delectable array of
                    dishes crafted with the finest ingredients and culinary
                    expertise. Our mission is to satisfy your cravings and
                    elevate your dining experience, one delicious meal at a
                    time.
                </p>

                <MenuSlider />
            </div>
        </section>
    )
}

function MenuSlider() {
    return (
        <>
            <div className="no-scrollbar flex w-full snap-x items-center justify-start gap-2 overflow-x-scroll p-2">
                {menu_list.map((items, index) => {
                    return (
                        <SliderCard
                            cardImage={items.menu_image}
                            cardImageName={items.menu_name}
                            key={index}
                        />
                    )
                })}
            </div>
        </>
    )
}

function SliderCard({ cardImage, cardImageName }) {
    return (
        <>
            <div className="flex h-[11rem] flex-shrink-0 transform snap-start flex-col items-center justify-between rounded-xl bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 lg:h-[17rem]">
                <span className="">
                    <img
                        src={cardImage}
                        alt=""
                        className="size-[7rem] rounded-xl lg:size-[12rem]"
                    />
                </span>
                <h2 className="mb-2 text-lg font-[900]">{cardImageName}</h2>
            </div>
        </>
    )
}

export default MenuOptions
