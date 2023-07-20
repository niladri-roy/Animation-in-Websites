import React, { useEffect } from 'react'
import './Home.css'
import homeImage from '../../assets/Home-Camera.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    useEffect(() => {
        gsap.to('.text',{
            y:-400,
            opacity:0,
            duration:1,
            ease:'ease-in-out',
            scrollTrigger: {
                trigger:'.home',
                start:'top top',
                end:'30% top',
                scrub:true,
                // markers:true
            }
        })
        // gsap.from('.text',{
        //     y:0,
        //     opacity:1,
        //     duration:1,
        //     ease:'ease-in-out',
        //     scrollTrigger: {
        //         trigger:'.home',
        //         start:'top top',
        //         end:'bottom top',
        //         scrub:true,
        //         markers:true
        //     }
        // })
        gsap.to('.image',{
            y:-100,
            opacity:0,
            duration:1,
            ease:'ease-in-out',
            scrollTrigger: {
                trigger:'.home',
                start:'top top',
                end:'50% top',
                scrub:true,
                // markers:true
            }            
        })
            
    })
    


    return (
        <div className='home'>
            <div class="container">
                <img class="image" src={homeImage} alt="home"/>
                <div class="text">
                    <h1>Some Text</h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Home