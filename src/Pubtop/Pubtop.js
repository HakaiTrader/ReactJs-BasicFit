import React, { useState } from 'react'
import './Pubtop.css'
import quitPubTop from "./Quit.png"

export default function Pubtop() {

    const [togglePubTop, setTogglePubTop] = useState(false)

    const pubTopQuit = () => {
        setTogglePubTop(true)
    }

    return (
        <div className={togglePubTop ? "Pubtop active" : "Pubtop"}>
            <p className='pubtop'>
                Fitness dès 19,99€ / 4 semaines <a href="#"> S'inscrire !</a>
            </p>
            <div className="quit-pubtop">
                <img 
                onClick={pubTopQuit}
                src={quitPubTop} alt="Quit" />
            </div>
        </div>

    )
}
