import React from 'react'
import { Footer } from '../ui/Footer'
import { Header } from '../ui/Header'
import { NavBar } from '../ui/NavBar'
import { HomeContainer } from './HomeContainer'

export const HomeScreen = () => {
   
    return (

        <div style={{backgroundColor: 'black'}}>
            <NavBar />
            <div className="">
                <Header />
                <HomeContainer/>
                <Footer/>
            </div>

        </div>
    )
}
