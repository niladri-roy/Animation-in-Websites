import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import {Expo} from 'gsap/all';

import './animation.css'
import Taj_Mahal from '../assets/pexels-maahid-mohamed-3881104.jpg'
import Petra from '../assets/pexels-francesco-ungaro-15998108.jpg'
import Colossem from '../assets/pexels-davi-pimentel-2064827.jpg'
import Chichen_Itza from '../assets/pexels-josé-andrés-pacheco-cortes-5862696.jpg'
import Machu_Picchu from '../assets/pexels-errin-casano-2356045.jpg'
import Christ_the_Redeemer from '../assets/pexels-luan-gonçalves-13911606.jpg'
import Great_Wall_of_China from '../assets/pexels-manuel-joseph-19872.jpg'

const Animation = () => {

    const images = [
        { name: 'Taj Mahal',image: Taj_Mahal , description: "Its just a demo, will add latter" },
        { name: 'Petra',image: Petra , description: "Its just a demo, will add latter" },
        { name: 'Colossem',image: Colossem , description: "Its just a demo, will add latter" },
        { name: 'Chichen Itza',image: Chichen_Itza , description: "Its just a demo, will add latter" },
        { name: 'Machu Picchu',image: Machu_Picchu , description: "Its just a demo, will add latter" },
        { name: 'Christ the Redeemer',image: Christ_the_Redeemer , description: "Its just a demo, will add latter" },
        { name: 'Great Wall of China',image: Great_Wall_of_China , description: "Its just a demo, will add latter" },
    ]

    const animationTimeValue = 2;

    useEffect(() => {

        const timeline = gsap.timeline({
            repeat: -1,
        })

        timeline.to(".imageContainer", {
            ease: Expo.easeInOut,
            width: '100%',
            stagger: animationTimeValue ,
        }, 'a')

        timeline.to(".imageContainer", {
            delay: animationTimeValue,
            ease: Expo.easeInOut,
            width: 0,
            stagger: animationTimeValue,
        }, 'a')

        timeline.to(".text h1", {
            ease: Expo.easeInOut,
            stagger: animationTimeValue,
            top: 0
        }, 'a')

        timeline.to(".text h1", {
            delay: animationTimeValue,
            ease: Expo.easeInOut,
            stagger: animationTimeValue,
            top: '100%'
        }, 'a')
    })


    return (
        <div className="animation-container">
            <div className="center">
                <div className="text">
                    {/* <h1>Petra</h1>
                    <h1>Taj Mahal</h1> */}
                    {
                        images.map((img, index) => {
                            return (
                                <h1 key={index}>{img.name}</h1>
                            )
                        })
                    }
                </div>
                {/* <div className="imageContainer" ref={imgConRef}>
                    <img src={Petra} alt="Petra" />
                </div>
                <div className="imageContainer" ref={imgConRef}>
                    <img src={Taj_Mahal} alt="Taj Mahal" />
                </div> */}
                {
                    images.map((img, index) => {
                        return (
                            <div className="imageContainer" key={index}>
                                <img src={img.image} alt={img.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Animation


