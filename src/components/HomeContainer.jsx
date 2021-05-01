import React from 'react'
import useOnScreen from '../hooks/useOnScreen';
import edificioNoche from './ui/img/edificioNoche.jpg'

export const HomeContainer = () => {

    const [setRef, visible] = useOnScreen({ threshold: 1 });

    return (
        <>
            <div className="_home_container  ">
                {visible
                    ?
                    <>
                        <h1 className="_home_title_h1">Titulo General</h1>
                        <h3 className="_home_title_h3">Vistas Nocturnas</h3>

                        <div className="_home_container_left_img">
                            <img src={edificioNoche} alt="Edificio nocturno" className="_home_container_left_img   " />
                        </div>
                        <div className="_Home_container_right">
                            <h3 className="_Home_container_right_sub">
                                Sub Titulo
                            </h3>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                        </div>
                    </>
                    :
                    <div ref={setRef} className=""></div>
                }
            </div>
        </>
    )
}
