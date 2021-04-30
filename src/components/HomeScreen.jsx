import React from 'react'
import { Header } from './ui/Header'
import { NavBar } from './ui/NavBar'

export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="animate__animated animate__fadeIn animate__faster">
                <Header />
            </div>

        </div>
    )
}
