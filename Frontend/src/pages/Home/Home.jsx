import React, { useEffect } from 'react'
import Hero from './Hero'
import MenuOptions from './MenuOptions'
import DishOptions from './DishOptions'
import DownloadForMobile from './DownloadForMobile'
import Footer from '../../components/Footer'
import { useAuth } from '../../Contexts/AuthContext'
import { useStoreContext } from '../../Contexts/StoreContext'

function Home() {
    const { getAuthToken, validateUser } = useAuth()
    const { getAndSetCartItemList } = useStoreContext()

    useEffect(() => {
        const token = getAuthToken()
        if (token) {
            validateUser(token)
            getAndSetCartItemList()
        }
    }, [])
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
