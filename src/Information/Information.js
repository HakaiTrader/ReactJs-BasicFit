import React from 'react'
import './Information.css'
import './InformationResponsive.css'
import grosTas from './InformationImg/fitnessgirl.png'
import logo from './InformationImg/LOGO.svg'


export default function Information() {
    return (
        <div className='Information'>
            <div className="services-info">
                <h2>Services & Info</h2>
                <ul>
                    <li><a href="">Service clientèle</a></li>
                    <li><a href="">Heures d'ouverture</a></li>
                    <li><a href="">Partenariats</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Ambassadeurs</a></li>
                    <li><a href="">Règlement intérieur</a></li>
                    <li><a href="">Day Pass</a></li>
                    <li><a href="">Webshop</a></li>
                    <li><a href="">Inspiration</a></li>
                    <li><a href="">Services aux Clubs</a></li>

                </ul>
            </div>
            <div className="apropos">
                <h2>À Propos De Basic-Fit</h2>
                <ul>

                    <li><a href="">A propos de Basic-Fit</a></li>
                    <li><a href="">Basic-Fit Corporate</a></li>
                    <li><a href="">Recrutement</a></li>
                    <li><a href="">Nos partenaires</a></li>
                    <li><a href="">Fausses Promotions</a></li>
                    <li><a href="">Notre Vision Durable</a></li>   
                </ul>
            </div>
            <div className="location">
                <h2>Salles De Fitness</h2>
                <ul>

                    <li>
                        <a href="">Bruxelles</a>
                    </li>
                    <li>
                        <a href="">Charleroi</a>
                    </li>
                    <li>
                        <a href="">Forest</a>
                    </li>
                    <li>
                        <a href="">Aperçus villes</a>
                    </li>
                    <li>
                        <a href="">Liège</a>
                    </li>
                    <li>
                        <a href="">Anvers</a>
                    </li>
                    <li>
                        <a href="">Gand</a>
                    </li>


                </ul>
            </div>
            <div className="grostas">
                <img src={grosTas} alt="" />
                <img src={logo} alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}
