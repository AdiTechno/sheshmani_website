import React from 'react'
import Carousel from 'react-bootstrap/carousel'
import f1 from '../images/1.jpg';
import f2 from '../images/2.jpg';
import f3 from '../images/3.jpg';
import './style.css';


export default function Democarousel() {
    return (
        <div >
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img src={f1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={f2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={f3} />
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>

    )
}

