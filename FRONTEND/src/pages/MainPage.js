import React, { Component } from 'react'
import {conenct } from 'react-redux'
class MainPage extends Component {

    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval={2000}>
                        <img src="image/bg1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval={2000}>
                        <img src="image/bg2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval={2000}>
                        <img src="image/bg3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}


export default MainPage;