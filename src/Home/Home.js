import React, { useState } from 'react'
import './Home.css';
import './HomeResponsive.css'
import LogoResearch from './HomeImg/Logo-research.svg'
import LogoResearchHover from './HomeImg/Logo-research-hover.svg'
import PictureHome from './HomeImg/picture-home.png'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring'


export default function Home() {

    const [imgResearch, setImgResearch] = useState(false)

    const [toggleHomeImg, setToggleHomeImg] = useState(false)

    const animatedTop = useSpring({
        opacity: toggleHomeImg ? 1 : 0,
        transform: toggleHomeImg ? "translateY(0)" : 'translateY(-300px)',
        config: { duration: toggleHomeImg ? 1000 : 0 },
    })
    const animatedBottom = useSpring({
        opacity: toggleHomeImg ? 1 : 0,
        transform: toggleHomeImg ? "translateY(0)" : "translateY(300px)",
        config: {
            duration: toggleHomeImg ? 1000 : 0,
        }
    })

    return (
        <div className='Home'>
            <animated.div style={animatedBottom} className="home-left">
                <h1>fitness dès 19.99€</h1>
                <p>/ 4 semaines</p>
                <div className='research-bar'>
                    <input placeholder='Rechercher un club' type="text" name='club-research' className='club-research' />
                    <div
                        onMouseEnter={() => setImgResearch(true)}
                        onMouseLeave={() => setImgResearch(false)}
                        className="img-research-content">
                        <img src={imgResearch ? LogoResearchHover : LogoResearch} alt="" />
                    </div>
                    <button className='subscribe-button-home'>
                        s'inscrire chez basic-fit
                    </button>
                </div>
            </animated.div>
            <div className="home-right">
                <div className="sac-offert">
                    <h2>+ un <span className='orange'>sac de sport</span> offert</h2>
                </div>
                <Waypoint
                    bottomOffset='10px'
                    onEnter={() => {
                        if (!toggleHomeImg) {
                            setToggleHomeImg(true)
                        }
                    }}
                />
                <animated.div style={animatedTop} className="home-picture">
                    <img src={PictureHome} alt="" />
                </animated.div>
            </div>
        </div>
    )
}
