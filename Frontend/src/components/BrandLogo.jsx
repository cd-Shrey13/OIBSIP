import React from 'react'
import { assets } from '../assets/assets'
import { twMerge } from 'tailwind-merge'


function BrandLogo({ className }) {
    return (
        <span
            className={twMerge('flex items-center justify-center', className)}
        >
            <img src={assets.logo} alt="image" className="p-2" />
        </span>
    )
}

export default BrandLogo
