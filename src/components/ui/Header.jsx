import React from 'react'
import edificio1 from './img/edificio1.jpg'
import edificio2 from './img/edificio2.jpg'
import edificio3 from './img/edificio3.jpg'
import edificio1_mobil from './img/edificio1_mobil.jpg'
import edificio2_mobil from './img/edificio2_mobil.jpg'
import edificio3_mobil from './img/edificio2_mobil.jpg'

export const Header = () => {
    return (
        <div className=" container-sm _home_header col-12 ">
            <div id="carouse" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" data-duration="100">
                    <li data-target="#carouse" data-slide-to="0" data-interval="100" className="active"></li>
                    <li data-target="#carouse" data-slide-to="1" data-interval="100"></li>
                    <li data-target="#carouse" data-slide-to="2" data-interval="100"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={edificio1_mobil} className="_header_img_mobil d-flex " alt="..." />
                        <img src={edificio1} className="header_img d-flex _home_header_img" alt="..." />

                        <div className="carousel-caption ">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={edificio2_mobil} className="_header_img_mobil d-flex " alt="..." />
                        <img src={edificio2} className="header_img d-flex _home_header_img" alt="..." />

                        <div className="carousel-caption ">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={edificio3_mobil} className="_header_img_mobil d-flex " alt="..." />
                        <img src={edificio3} className="header_img d-flex _home_header_img" alt="..." />
                        <div className="carousel-caption ">
                            <h5 className="mb-5">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouse" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouse" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
