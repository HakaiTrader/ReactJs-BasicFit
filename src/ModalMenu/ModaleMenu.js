import React, { useState } from 'react'
import './ModalMenu.css'
import LogoBasic from '../Navbar/NavbarImg/LOGO.svg'
import QuitImg from '../Pubtop/Quit.png';
import Navbar from '../Navbar/Navbar';

export default function ModaleMenu() {

    const [toggleMenuModal, setToggleMenuModal] = useState(false)

    const closeMenuModal = () => {
        setToggleMenuModal(!toggleMenuModal)

    }



    return (
        <div className={toggleMenuModal ? "ModalMenu" : "ModalMenu active"}>
            <div className="header">
                <img src={LogoBasic} alt="" />
                <img onClick={closeMenuModal} src={QuitImg} alt="" />
            </div>
            <div className="menu-modal">
                <ul onClick={closeMenuModal}>
                    <a href=""><li>Clubs</li></a>
                    <a href=""><li>Prix</li></a>
                    <a href=""><li>Pourquoi Basic-Fit</li></a>
                    <a href=""><li>Suivi sportif</li></a>
                    <a href=""><li>Cours collectifs</li></a>
                    <a href=""><li>S'entrainer partout</li></a>
                    <a href=""><li>Service</li></a>
                </ul>
            </div>
            <div className="mybasicfit-modal">
                <button className='subscribe'>
                    s'inscrire
                </button>
                <a href="#"> MON BASIC-FIT</a>
                <select name="langue" id="langue-modal">
                    <option value="Français">Français</option>
                    <option value="Nederlands">Nederlands</option>
                    <option value="English">English</option>

                </select>
            </div>
        </div>
    )
}
