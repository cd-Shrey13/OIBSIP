import React from 'react'
import { assets } from '../../assets/assets.js'
import { menu_list } from '../../assets/assets.js'

function MenuOptions() {
    return (
        <section className="flex w-full items-center justify-center font-Satohi">
            <div className="flex w-full flex-col items-start justify-between gap-4 rounded-[24px] bg-orange-600 p-4 sm:h-[30rem] md:gap-4 md:p-2 lg:h-[38rem] lg:p-8">
                <h1 className="text-[1.9rem] font-[900] leading-8 text-white sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4.4rem]">
                    Explore our <br /> menu
                </h1>
                <p className="max-w-[55ch] text-xs text-white sm:text-[1.5rem] leading-6">
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
            <div className="flex w-full items-center justify-start gap-2 overflow-x-scroll snap-x no-scrollbar ">
                {menu_list.map((items,index) => {
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

function SliderCard({ cardImage, cardImageName}) {
    return (
        <>
            <div className="flex h-[11rem] flex-shrink-0 transform flex-col items-center justify-between rounded-xl bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-2xl snap-start lg:h-[17rem]">
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
