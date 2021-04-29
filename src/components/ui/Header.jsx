import React from 'react'
import edificio1 from './img/edificio1.jpg'
import edificio2 from './img/edificio2.jpg'
import edificio3 from './img/edificio3.jpg'

export const Header = () => {
    return (
        <div className=" container-sm _home_header col-12 ">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" data-duration="100">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" data-interval="100" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" data-interval="100"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2" data-interval="100"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={edificio1} className=" d-flex _home_header_img" alt="..." />
                        <div className="carousel-caption ">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={edificio2} className="d-flex _home_header_img" alt="..." />
                        <div className="carousel-caption ">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={edificio3} className="d-flex _home_header_img" alt="..." />
                        <div className="carousel-caption ">
                            <h5 className="mb-5">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
