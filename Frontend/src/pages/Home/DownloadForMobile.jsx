import React from 'react'
import { assets } from '../../assets/assets'

function DownloadForMobile() {
    return (
        <section className="container p-4">
            <div className="flex w-full flex-col items-center justify-center p-4 text-center lg:gap-8">
                <h1 className="font-Satohi text-[1.2rem] font-[800] sm:text-[2rem] md:text-[3rem]">
                    For Better Experience Download <br className="lg:hidden" />{' '}
                    Tomato App
                </h1>
                <span className="flex items-center justify-center gap-4">
                    <span className="download_image_playstore h-[4rem] w-[8rem] sm:h-[4rem] sm:w-[12rem] lg:h-[6rem] lg:w-[16rem]"></span>
                    <span className="download_image_ios h-[4rem] w-[8rem] sm:h-[4rem] sm:w-[12rem] lg:h-[6rem] lg:w-[16rem]"></span>
                </span>
            </div>
        </section>
    )
}

export default DownloadForMobile
