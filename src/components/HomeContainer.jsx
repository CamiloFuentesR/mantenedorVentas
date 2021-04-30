import React from 'react'
import useOnScreen from '../hooks/useOnScreen';
import edificioNoche from './ui/img/edificioNoche.jpg'

export const HomeContainer = () => {

    const [setRef, visible] = useOnScreen({ threshold: 1 });

    return (
        <>
        <div className="container _home_container  ">
        { visible
            ?
            <>
                <div className="_home_container_left_img">
                    <img src={edificioNoche} alt="Edificio nocturno" className="_home_container_left_img animate__animated animate__fadeIn animate__slower " />
                </div>
                <div className="_Home_container_right_title">
                    <h3 className="_Home_container_right_title"> </h3>
                    <p></p>
                </div>
            </>
            :
            <div ref={setRef} className=""></div>
        }
        </div>
        </>
    )
}
