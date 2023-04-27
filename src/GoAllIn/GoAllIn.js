import React, { useEffect } from 'react'
import './GoAllIn.css'
import './GoAllInResponsive.css'
import AllInImg from '../AboBasicFit/AboBasicFitImg/img-offre-3.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export default function GoAllIn() {

  const slideGoBottom = (elem, delay, duration) => {
    gsap.fromTo(
      elem, {
      opacity: 0,
      y: 200,
    },
      {
        opacity: 1,
        y: 0,
        duration: duration || 1.7,
        scrollTrigger: {
          trigger: elem,
          start: "-300%",
          end: 'top center'
        }
      }

    )
  }
  const slideGoRight = (elem, delay, duration) => {
    
    gsap.fromTo(elem, {
      opacity: 0,
      x: 200,
    },
    {
      opacity: 1,
      x: 0,
      duration: duration || 1.7,
      scrollTrigger: {
        trigger: elem,
  
      }
    }
    )
  }
  useEffect(() => {
    slideGoBottom('#anime-go-allin')
  })
  useEffect(() => {
    slideGoRight('#anime-goallin-img')
  })


  return (
    <div className='GoAllIn'>
      <div id="anime-go-allin" className="goallin-texte">
        <h3>go <span className='orange'><br /> all-in</span></h3>
        <p>ALL-IN est l'expérience de fitness ultime qui vous permet de vous entraîner en club et à domicile comme vous
          le souhaitez. Tirez le meilleur parti de votre entraînement avec le Smart Bike à domicile,
          en le connectant à l’application ALL-IN Workout. ALL-IN vous permet d'accéder à tous les
          +1200 clubs Basic-Fit pour vous et votre ami(e). Alors lancez-vous, n'importe quand, n'importe où !

          OUI, JE VEUX ALL-IN !
        </p>
        <button className='subscribe-allin'> oui, je veux all-in !</button>
      </div>
      <div className="goallin-img">
        <div id="anime-goallin-img" className="img-allin">
          <img src={AllInImg} alt="" />
        </div>
      </div>
    </div>
  )
}
