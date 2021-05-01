import React from 'react'
import { HomeContainer } from './HomeContainer'
import { Footer } from './ui/Footer'
import { Header } from './ui/Header'
import { NavBar } from './ui/NavBar'

export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="">
                <Header />
                <HomeContainer/>
                <Footer/>
            </div>

        </div>
    )
}
