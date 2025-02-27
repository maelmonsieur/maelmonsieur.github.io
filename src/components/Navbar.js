import 'tippy.js/dist/tippy.css'; // optional
import logo from "../assets/img/logo_m.svg";
import Div from "./Div";
import Go from "./Go";

import Tippy from '@tippyjs/react';
import { FaLinkedin,FaInstagramSquare  } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { useMediaQuery } from 'react-responsive'

import Donnees from '../Donnees';

export default function Navbar(props) {

    const hideNavbar = () => {
        document.getElementById("menu-toggle").checked = false;
    }

    const isPhone = useMediaQuery({ query: '(max-width: 1000px)' })

    return(
        <div>
            {!isPhone && <Div className="navbar-container">
                <Go to="top" className="link row navbar logo-hover">
                    <img src={logo} width={30} alt="Logo Maël Le Dû"/>
                </Go>
                <Div className="navbar row bento-navbar">
                    <Go to="whoami" className="link ph-1">Qui suis-je ?</Go>
                    <Go to="projets" className="link ph-1">Mes projets</Go>
                    <Go to="services" className="link ph-1">Mes services</Go>
                    <Go to="parcours" className="link ph-1">Mon parcours</Go>
                </Div>
                <Div className="row">
                    <Tippy content="Mon CV">
                    <   a href="LeDu_Mael_CV.pdf" target="_blank" rel="noreferrer" className="icon-navbar nain-navbar"><PiNewspaperClippingFill /></a>
                    </Tippy>
                    <Tippy content="Linkedin">
                        <a rel="noreferrer" target="_blank" href={Donnees.liens.linkedin} className="icon-navbar nain-navbar"><FaLinkedin /></a>
                    </Tippy>
                    <Tippy content="Instagram">
                        <a rel="noreferrer" target="_blank" href={Donnees.liens.instagram} className="icon-navbar nain-navbar"><FaInstagramSquare /></a>
                    </Tippy>
                </Div>
            </Div>}
            {isPhone && <div className="responsive-navbar-container">
                    <input type="checkbox" className="remnu-toggle" id="menu-toggle" />
                    <label id="trigger" htmlFor="menu-toggle" />
                    <label id="burger" htmlFor="menu-toggle" />
                    <div id="responsive-menu">
                        <div className="responsive-menu-content" onClick={hideNavbar}>
                            <Go to="top" className="link row navbar logo-hover">
                                <img src={logo} width={30} alt="Logo Maël Le Dû"/>
                            </Go>
                            <Div className="row responsive-menu-links">
                                <Go to="whoami" className="link ph-1">Qui suis-je ?</Go>
                                <Go to="projets" className="link ph-1">Mes projets</Go>
                                <Go to="services" className="link ph-1">Mes services</Go>
                                <Go to="parcours" className="link ph-1">Mon parcours</Go>
                            </Div>
                            <div className='responsive-menu-footer'>
                            <Tippy content="Mon CV">
                                <a href="LeDu_Mael_CV.pdf" target="_blank" rel="noreferrer" className="icon-navbar nain-navbar"><PiNewspaperClippingFill /></a>
                            </Tippy>
                            <Tippy content="Linkedin">
                                <a rel="noreferrer" target="_blank" href={Donnees.liens.linkedin} className="icon-navbar nain-navbar"><FaLinkedin /></a>
                            </Tippy>
                            <Tippy content="Instagram">
                                <a rel="noreferrer" target="_blank" href={Donnees.liens.instagram} className="icon-navbar nain-navbar"><FaInstagramSquare /></a>
                            </Tippy>
                            </div>
                        </div>
                    </div>
            </div>}
        </div>
    )
}