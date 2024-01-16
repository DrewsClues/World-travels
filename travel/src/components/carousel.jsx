import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'

import Read_Nagoya from './read-modals/Read_Nagoya';
import Read_Matsumoto from './read-modals/Read-Matsumoto';
import Read_Kamikochi from './read-modals/Read-Kamikochi';


function ControlledCarousel() {

    
  return (
        <div className='carousel-div'> 

            <Carousel fade className='trip-carousel'>
                        <Carousel.Item interval={5000}>
                            <img
                            className = "travel-image"  src="Matsumoto.jpg"
                            />
                            <Carousel.Caption>

                            <Read_Matsumoto/>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className = "travel-image"  src="Nagoya.jpg"
                            />

                            <Carousel.Caption>

                            <Read_Nagoya/>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Kamikochi.jpg"></img> 
                            </div>
                            <Carousel.Caption>

                            <Read_Kamikochi/>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Fukuoka.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Fukuoka, Japan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Seoul.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Seoul, South Korea</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Jiufen.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Jiufen, Taiwan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Gwangju.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Gwangju, South Korea</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Bisbee.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Bisbee, Arizona</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Osaka.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Osaka, Japan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="White-Sands.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>White Sands, New Mexico</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Taipei.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Taipei, Taiwan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                </div>

  );
}

export default ControlledCarousel;