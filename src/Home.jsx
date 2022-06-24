import React, {useState} from 'react'
import './HomeStyles.css'

import About from './About'
import Masthead from './Masthead'
import Speakers from './Speakers'
import Organizers from './Organizers'

import img1 from "./assets/Carousel Images/1.jpg";
import img2 from "./assets/Carousel Images/2.jpg";
import img3 from "./assets/Carousel Images/3.jpg";
import img4 from "./assets/Carousel Images/4.jpg";

import Card from './Card'
import Slider from './Carousel'

const Home = () => {

    return (
        <div>
            <div className="fullBackground">
                <img src={img4}alt="" />
            </div>
            <Masthead />
            {/* <Slider/> */}
            <Card />
            {/* <Topics/> */}
            <Speakers/>
            <About/>
        </div>
     );
}

export default Home;