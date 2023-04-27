import React, { useState, useEffect } from 'react'
import './Avantage.css'
import './AvantageResponsive.css'
import ImgMoreInfo from './AvantageImg/MoreInformation.png'
import AvantageClubs from './AvantageImg/avantage-position.png'
import AvantageNewEquipement from './AvantageImg/avantage-NewEquipment.svg'
import ZonesImg from './AvantageImg/avantage-7Zones.svg'
import SportImg from './AvantageImg/Sport.svg'
import GxrImg from './AvantageImg/avantage-GXR.svg'
/** */
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

export default function Avantage() {
    const [toggleAnimateAvantage, setToggleAnimateAvantage] = useState(false)
    const animatedAvantage = useSpring({
        opacity: toggleAnimateAvantage ? 1 : 0,
        transform: toggleAnimateAvantage ? "translateY(0)" : "translateY(200px)",
        config: {
            duration: toggleAnimateAvantage ? 1000 : 0,
        }
    })

    return (

        <div className='Avantage' style={animatedAvantage}>
            < Waypoint
                bottomOffset="50%"
                onEnter={() => {
                    if (!toggleAnimateAvantage) {
                        setToggleAnimateAvantage(true)
                    }
                }}
            />
            <div className="avantage-top">
                <h1 className='stroke-title-avantage'>parce que <span>basic-fit c'est...</span></h1>
            </div>

            <div className="more-info">
                <p>Plus d'informations sur Basic-Fit <img src={ImgMoreInfo} alt="Plus d'infos" /></p>
            </div>
            <animated.div style={animatedAvantage}className="avantage-bottom">
                <div className="1250clubs avantage-item">
                    <img src={AvantageClubs} alt="" />
                    <h3>+1250 clubs</h3>
                    <p>
                        Avec un abonnement Premium vous pouvez vous entraîner
                        dans nos +1250 clubs en Europe
                        (Belgique, Luxembourg, Pays-Bas, France, Espagne &amp; Allemagne)
                    </p>
                </div>
                <div className="news-material avantage-item">
                    <img src={AvantageNewEquipement} alt="Image new-equipement" />
                    <h3>nouveau materiel</h3>
                    <p>Dans nos clubs, vous pouvez vous entraîner avec
                        des équipements dernier cri de Matrix et Technogym. </p>
                </div>
                <div className="zones avantage-item">
                    <img src={ZonesImg} alt="" />
                    <h3>7 zones</h3>
                    <p>Nos clubs sont divisés en 7 zones dans
                        lesquelles vous pouvez vous entraîner comme vous le souhaitez.</p>
                </div>
                <div className="sport avantage-item">
                    <img src={SportImg} alt="" />
                    <h3>Sport 24/7</h3>
                    <p>Plus de 140(!) clubs sont déjà ouverts 24/7.
                        Cela signifie que dans plus de la moitié de nos clubs,
                        vous pouvez vous entraîner quand vous le souhaitez.</p>
                </div>
                <div className="gxr avantage-item">
                    <img src={GxrImg} alt="" />
                    <h3>GXR</h3>
                    <p>Dans beaucoup de clubs, nous proposons des cours collectifs virtuels.
                        De nombreux clubs proposent également des cours collectifs live.
                        Vous pouvez également suivre votre
                        cours préféré à domicile via l’application Basic-Fit. </p>
                </div>

            </animated.div>
                <button className='subscribe-avantage'>
                    inscrivez-vous maintenant
                </button>
        </div>
    )
}
