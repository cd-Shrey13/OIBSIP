
import React from 'react'

function Hero() {
    return (
        <section className=" flex w-full items-center justify-center font-Satohi mt-[2rem]">
            <div className="flex h-[12rem] w-full items-end justify-center rounded-[24px]  hero_img sm:p-4 sm:h-[18rem] md:h-[25rem] lg:h-[30rem]">
                <div className="flex h-full w-full flex-col items-start justify-between rounded-[24px] p-4  sm:justify-end sm:h-[16rem] sm:gap-4 md:gap-4 md:p-2 lg:h-[22rem] ">
                    <h1 className="text-[1.9rem] font-[900] leading-8 text-white sm:text-[3rem] sm:leading-[3.2rem] sm:max-w-[15ch] md:text-[4rem] md:leading-[4.4rem]">
                        Order your favourite <br />
                        food here
                    </h1>
                    <p className="hidden max-w-[55ch] text-[1rem] text-white md:flex md:text-[1.3rem]">
                        Choose from a diverse menu featuring a delectable array
                        of dishes crafted with the finest ingredients and
                        culinary expertise. Our mission is to satisfy your
                        cravings and elevate your dining experience, one
                        delicious meal at a time.
                    </p>
                    <button
                        type="button"
                        className=" border-red rounded-[24px] border-2 border-solid px-4 py-1 font-[800] text-white md:text-[1.3rem]"
                    >
                        View Menu
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero