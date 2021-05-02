import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import useOnScreen from '../../hooks/useOnScreen';
import edificioNoche from '../ui/img/edificioNoche.jpg'
import { Parrafo } from './Parrafo';

export const HomeContainer = () => {

    const [setRef,visible] = useOnScreen({ threshold: 1 });
    const [value, setvalue] = useState(false)
    const history = useHistory()
    useEffect(() => {
        visible &&
        setvalue(true)
    }, [visible])

    return (
        <>
            <div className="_home_container  ">
                {value
                    ?
                    <>
                        <h1 className="_home_title_h1">Titulo General</h1>
                        <h3 className="_home_title_h3">Vistas Nocturnas</h3>

                        <div className="_home_container_left_img">
                            <img src={edificioNoche} alt="Edificio nocturno" className="_home_container_left_img   " />
                        </div>
                    </>
                    :
                    <div ref={setRef} className=""></div>
                }
               <Parrafo/>
            </div>
        </>
    )
}
