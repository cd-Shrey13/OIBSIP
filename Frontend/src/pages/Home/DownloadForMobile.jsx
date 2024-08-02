import React from 'react'
import { assets } from '../../assets/assets'

function DownloadForMobile() {
    return (
        <section className="container p-4">
            <div className="flex w-full flex-col items-center justify-center p-4 text-center">
                <h1 className="font-Satohi font-[800] text-[1.2rem] sm:text-[2rem]  ">
                    For Better Experience Download <br /> Tomato App
                </h1>
                <span className="items flex w-full justify-center gap-4">
                    <span className=''>
                        <img src={assets.play_store} alt="Image" className='h-full w-full' />
                    </span>
                    <span>
                        <img src={assets.app_store} alt="Image" />
                    </span>
                </span>
            </div>
        </section>
    )
}

export default DownloadForMobile
