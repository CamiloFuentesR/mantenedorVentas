import React from 'react'
import { HomeContainer } from './HomeContainer'
import { Footer } from './ui/Footer'
import { Header } from './ui/Header'
import { NavBar } from './ui/NavBar'

export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="animate__animated animate__fadeIn animate__faster">
                <Header />
                    <HomeContainer/>
                <Footer/>
            </div>

        </div>
    )
}
