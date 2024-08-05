import React from 'react'
import Hero from './Hero'
import MenuOptions from './MenuOptions'
import DishOptions from './DishOptions'
import DownloadForMobile from './DownloadForMobile'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Hero />
            <MenuOptions />
            <DishOptions />
            <DownloadForMobile />
            <Footer />
        </>
    )
}

export default Home
