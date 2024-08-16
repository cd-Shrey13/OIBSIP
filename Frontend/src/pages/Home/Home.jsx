import React from 'react'
import Hero from './Hero'
import MenuOptions from './MenuOptions'
import DishOptions from './DishOptions'
import DownloadForMobile from './DownloadForMobile'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <MenuOptions />
            <DishOptions />
            <DownloadForMobile />
            <Footer />
        </>
    )
}

export default Home
