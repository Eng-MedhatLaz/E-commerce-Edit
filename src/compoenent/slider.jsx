import React from 'react';
import Images1 from './imgs/73754f25f55fcd88b0b07ac2fff6a2ae.jpg';
import Images2 from './imgs/blog-1.jpg';
import Images3 from './imgs/menu-07.jpg';

import './slider.css';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Images1} className="d-block w-100 height-300" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Images2} className="d-block w-100 height-300 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Images3} className="d-block w-100 height-300" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;
