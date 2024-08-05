import React from 'react'
import H1 from '../../components/H1'
import Button from '../../components/Button'

function Hero() {
    return (
        <section className="flex w-full items-center justify-center px-4 font-Satohi mt-[8rem]">
            <div className="hero_img flex h-[12rem] w-full items-end justify-center rounded-[24px] sm:h-[18rem] sm:p-4 md:h-[25rem] lg:h-[42rem]">
                <div className="flex h-full w-full flex-col items-start justify-between rounded-[24px] p-4 sm:h-[16rem] sm:justify-end sm:gap-4 md:gap-4 md:p-2 lg:h-[22rem]">
                    <H1>
                        Order your favourite <br />
                        food here
                    </H1>
                    <p className="hidden max-w-[55ch] text-[1rem] text-white md:flex md:text-[1.3rem]">
                        Choose from a diverse menu featuring a delectable array
                        of dishes crafted with the finest ingredients and
                        culinary expertise. Our mission is to satisfy your
                        cravings and elevate your dining experience, one
                        delicious meal at a time.
                    </p>
                    <Button
                        className={
                            'border-green-600 bg-green-600 font-[900] hover:bg-green-700 hover:text-white'
                        }
                    >
                        View Menu
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
