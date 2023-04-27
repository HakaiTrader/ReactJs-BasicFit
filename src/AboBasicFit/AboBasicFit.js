import { useState, useEffect, useRef } from "react";
import React from 'react';
import './AboBasicFit.css'
import './AboBasicFitResponsive.css'
import ImgOfferOne from './AboBasicFitImg/img-offre-1.png'
import ImgOfferTwoo from './AboBasicFitImg/img-offre-2.png'
import ImgOfferThree from './AboBasicFitImg/img-offre-3.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function AboBasicFit() {

    const ref1 = useRef(null)

    const slideInBottom = (elem, delay, duration) => {

        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: 200,
            },
            {
                opacity: 1,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "-300%",
                    end: 'top center'
                }
            }
        )
    }
    useEffect(() => {
        slideInBottom('#img-offer1')
    }, [])
    useEffect(() => {
        slideInBottom('#img-offer2')
    }, [])
    useEffect(() => {
        slideInBottom('#img-offer3')
    }, [])

    const containerRefs = useRef([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        containerRefs.current.forEach((container) => {

            const tl = gsap.timeline({ paused: true });
            const images = container.querySelectorAll('img');

            tl.to(images, { duration: 0.7, scale: 1.1, ease: 'power1.inOut' });
            container.addEventListener('mouseenter', () => {
                tl.play();
            });
            container.addEventListener('mouseleave', () => {
                tl.reverse();
            });
        });
    }, []);
    return (
        <div className="AboBasicFit">
            <div className="abo-title">
                <h1>abonnement <span>basic-fit</span></h1>
            </div>
            <p>
                Basic-Fit vous donne la possibilité de vous mettre en forme
                comme vous le souhaitez, en vous proposant différents abonnements.
                Choisissez celui qui correspond à vos besoins et Go For It !
            </p>
            <div className="four-abo">
                <div ref={(el) => (containerRefs.current[0] = el)} className="offer1">
                    <div className="img-offer1 img-offer">
                        <img ref={(el) => (imageRefs.current[0] = el)} id='img-offer1' src={ImgOfferOne} alt="" />
                    </div>
                    <div className="menu-offer1 menu-offer">
                        <div className="menu-offer-header">
                            <h2>un <span>sac de sport</span> offert </h2>
                        </div>
                        <div className="menu-detail">
                            <h3><span className="cyan">comfort </span>abonnement</h3>
                            <p className="menu-offer-1">Accès à +220 clubs Basic-Fit en Belgique</p>
                            <p className="menu-offer-1">Entraînez-vous en club et à domicile avec les Cours Collectifs GXR Virtuels</p>
                            <p className="menu-offer-1">Accès gratuit aux Cours Collectifs Live GXR (Vérifier la disponibilité par club)</p>
                            <p className="menu-offer-1">Accès illimité à l'application Basic-Fit avec des entraînements et programmes</p>
                        </div>
                        <div className="menu-price">
                            <p>€24.99</p>
                            <p className="orange">€19.99</p>
                            <p>/ par 4 semaines</p>
                            <p>Pour la <span className="orange">première</span> période de 4 semaines, puis 24.99€ / 4 semaines.</p>
                            <button className="go">go comfort!</button>
                            <p>Frais d'inscription 19.99€</p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (containerRefs.current[1] = el)} className="offer2">
                    <div className="img-offer2 img-offer">
                        <img ref={(el) => (imageRefs.current[1] = el)} id="img-offer2" src={ImgOfferTwoo} alt="" />
                    </div>
                    <div className="menu-offer2 menu-offer">
                        <div className="menu-offer-header">
                            <h2>un <span>sac de sport</span> offert </h2>
                        </div>
                        <div className="menu-detail">
                            <h3><span className="cyan">premium </span>abonnement</h3>
                            <p className="menu-offer-1">Accès à +1250 clubs Basic-Fit en Europe</p>
                            <p className="menu-offer-1">Entraînez-vous en club et à domicile avec les cours collectifs GXR virtuels</p>
                            <p className="menu-offer-1">Accès gratuit aux cours collectifs GXR Live (Vérifier la disponibilité par club)</p>
                            <p className="menu-offer-1">Accès illimité à l’application Basic-Fit avec des entraînements et programmes</p>
                            <p className="menu-offer-1">50% de réduction sur l’option Yanga Sports Water</p>
                            <p className="menu-offer-1">Utilisation illimitée des fauteuils massants dans le club</p>
                            <p className="menu-offer-1">Chèque cadeau de 20€ NXT Level</p>
                            <p className="menu-offer-1">Invitez quelqu'un à s'entraîner avec vous</p>
                        </div>
                        <div className="menu-price">
                            <p>€29.99</p>
                            <p className="orange">€19.99</p>
                            <p>/ par 4 semaines</p>
                            <p>Pour la <span className="orange">première</span> période de 4 semaines, puis 29.99€ / 4 semaines.</p>
                            <button className="go">go premium!</button>
                            <p>Frais d'inscription 0€</p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (containerRefs.current[2] = el)} className="offer3">
                    <div className="img-offer3 img-offer">
                        <img ref={(el) => (imageRefs.current[2] = el)} id="img-offer3" src={ImgOfferThree} alt="" />
                    </div>
                    <div className="menu-offer3 menu-offer">
                        <div className="menu-offer-header">
                            <h2>un <span>sac de sport</span> offert </h2>
                        </div>
                        <div className="menu-detail">
                            <h3><span className="cyan">comfort </span>abonnement</h3>
                            <p className="menu-offer-1">Accès à +1250 clubs Basic-Fit en Europe</p>
                            <p className="menu-offer-1">Entraînez-vous en club et à domicile avec les cours collectifs GXR virtuels</p>
                            <p className="menu-offer-1">Accès gratuit aux cours collectifs GXR Live (Vérifier la disponibilité par club)</p>
                            <p className="menu-offer-1">Accès illimité à l’application Basic-Fit avec des entraînements et programmes</p>
                            <p className="menu-offer-1">50% de réduction sur l’option Yanga Sports Water</p>
                            <p className="menu-offer-1">Utilisation illimitée des fauteuils massants dans le club</p>
                            <p className="menu-offer-1">Chèque cadeau de 20€ NXT Level</p>
                            <p className="menu-offer-1">Invitez quelqu'un à s'entraîner avec vous</p>
                            <p className="menu-offer-1">Un Smart Bike haut de gamme à votre domicile (location)</p>
                            <p className="menu-offer-1">ALL-IN Workout app avec +100 entraînements de vélo</p>

                        </div>
                        <div className="menu-price">
                            <p className="orange">€49.99</p>
                            <p>/ par 4 semaines</p>
                            <button className="go">go all-in!</button>
                            <p>49.99€ de frais de livraison et d'installation</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
