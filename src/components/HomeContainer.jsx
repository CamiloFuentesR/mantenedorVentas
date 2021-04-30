import React from 'react'
import edificioNoche from './ui/img/edificioNoche.jpg'

export const HomeContainer = () => {
    return (
        <div className="container _home_container">
                <div className="_home_container_left_img">
                    <img src={edificioNoche} alt="Edificio nocturno" className="_home_container_left_img" />

                </div>
                <div className="_Home_container_right_title">
                    <h3 className="_Home_container_right_title"> </h3>
                    <p></p>

                </div>
            </div>
    )
}
