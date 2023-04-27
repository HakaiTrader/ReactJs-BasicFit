import React, { useState } from 'react';
import './Navbar.css'
import './NavBarResponsive.css'
import LogoBasic from './NavbarImg/LOGO.svg'
import LogoResearch from './NavbarImg/Logo-research.svg'
import Menu from './NavbarImg/menu.png'
import ModaleMenu from '../ModalMenu/ModaleMenu';

export default function Navbar(props) {

    const [langInitiale, setLangInitiale] = useState("FR")

    const [toggleLangage, setToggleLangage] = useState(false)
    const changeLangMenuOpen = (e) => {
        setToggleLangage(true)
    }
    const changeLangMenuClose = (e) => {
        setToggleLangage(false)
    }

    const [toggleResearch, setToggleResearch] = useState(false)
    const inputResearch = () => {
        setToggleResearch(true)
        if (toggleResearch) {
            setToggleResearch(false)
        }
    }

    const [toggleOpenMenu, setToggleOpenMenu] = useState(false)
    const openMenu = () => {
        setToggleOpenMenu(!toggleOpenMenu)
    }


    return (
        <div className='Navbar'>
            <div className="navbar-left">
                <img src={LogoBasic} alt="Logo Basic Fit" />
                <ul className='navbar-menu'>
                    <li>Clubs</li>
                    <li>Prix</li>
                    <li>Pourquoi Basic-Fit</li>
                    <li>Suivi sportif</li>
                    <li>Cours collectifs</li>
                    <li>S'entrainer partout</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className="mybasicfit">
                <div className="subscribe-research">
                    <div className={toggleResearch ? 'logo-research-box active' : "logo-research-box"}>
                        <img
                            onClick={inputResearch}
                            src={LogoResearch} className={toggleResearch ? 'logo-research active' : "logo-research"} alt="Logo recherche" />
                        <input
                            type="text" className={toggleResearch ? 'research active' : 'research'}
                            placeholder='Une question ?'

                        />
                    </div>
                    <button className='subscribe'>
                        s'inscrire
                    </button>

                </div>
                <div className="monbasicfit">
                    <h3>Mon Basic-Fit</h3>
                </div>
                <img onClick={openMenu}
                    src={Menu} className='logo-menu' alt="" />
                <div>
                    {toggleOpenMenu ? <ModaleMenu /> : ""}
                </div>
                <div className="langage">
                    <p
                        onMouseOver={changeLangMenuOpen}>
                        {langInitiale}
                    </p>
                    <div
                        onMouseLeave={changeLangMenuClose}
                        className={toggleLangage ? 'choice-langage active' : "choice-langage"}>

                        <span
                            onClick={() => { setLangInitiale('NL'); changeLangMenuClose(); }}
                            className="choice-langage-1 lang">
                            Nederlands
                        </span>

                        <span
                            onClick={() => { setLangInitiale('FR'); changeLangMenuClose(); }}
                            className="choice-langage-2 lang">
                            Français
                        </span>
                        <span
                            onClick={() => { setLangInitiale('EN'); changeLangMenuClose(); }}
                            className="choice-langage-3 lang">English</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
