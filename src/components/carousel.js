import React from 'react';
import Avatar from './Avatar.js';
import './carousel.css';
import { statusCarousel } from './data';

const Carousel = () => {
    const handleSlide = (direction) => {
        const slider = document.getElementsByClassName('carousel-body')[0];
        if (direction === "left")
            slider.scrollBy(-400, 0);
        else 
            slider.scrollBy(400, 0);
    }

    return (
        <section className='check'>
            <div className='arrow-btn left-icon' onClick={() => handleSlide('left')}>
                <img src="./images/angle-left-solid.svg" alt="left-angle" />
            </div>
            <div className='arrow-btn right-icon' onClick={() => handleSlide('right')}>
                <img src="./images/angle-right-solid.svg" alt="left-angle" />
            </div>
            <div className="carousel-body" style={{ display: 'flex', padding: '16px' }}>
                {
                    statusCarousel.map((item) => (
                        <Avatar key={item} image={item} style={{ width: '100px', height: '100px', margin: '8px' }} />
                    ))
                }
            </div>
        </section>
    );
}

export default Carousel;
