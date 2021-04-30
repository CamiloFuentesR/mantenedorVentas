import React from 'react'
import { NavBar } from './ui/NavBar'

export const Adentro = () => {
    return (
        <div >
            <NavBar/>
            <div className="animate__animated animate__fadeIn animate__faster">
                <h1>Desde Adentro</h1>
            </div>
        </div>  
    )
}
