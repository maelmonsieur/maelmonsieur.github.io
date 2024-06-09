import 'tippy.js/dist/tippy.css'; // optional
import ellipse from "../assets/img/ellipse.svg";
import closeAnimation from "../assets/img/close.json";

import { useRef, useState } from "react";
import { createPortal } from 'react-dom';

import Tippy from '@tippyjs/react';
import MarqueeText from "react-marquee-text"
import Lottie from "react-lottie-player";

import Bento from "./Bento";
  
export default function ProjetPopup(props) {

    const popupRef = useRef(null);
    const [canPlay, setCanPlay] = useState(false);

    const isShown = () => {
        return document.getElementById(popupRef.current.id).classList.contains("popup-show");
    }

    const isHidden = () => {
        return document.getElementById(popupRef.current.id).classList.contains("popup-hide");
    }

    const handleShow = () => {
        if (isHidden()) {
            document.getElementById(popupRef.current.id).classList.remove("popup-hide");
            document.getElementById(popupRef.current.id).classList.add("popup-show");
            setCanPlay(true);
        }
    }

    const handleHide = () => {
        if (isShown()) {
            document.getElementById(popupRef.current.id).classList.remove("popup-show");
            document.getElementById(popupRef.current.id).classList.add("popup-hide");
            setCanPlay(false);
        }
    }

    return(
        <props.childElem style={props.style} img={props.img} className={props.className}>
            <div style={{
                width: "100%",
                height: "100%"
            }} onClick={() => handleShow()} />
            {createPortal(<PopupContent values={props.popup} hide={handleHide} reference={popupRef} canPlay={canPlay}/> ,document.body)}
        </props.childElem>
    )
}


function createID(nom_projet, logiciel) {
    var niceString = nom_projet.trim() + '_' + logiciel.trim();
    niceString = niceString.replace(/\s/g, '').replace(/[^\\x00-\x7F]/g, "");
    return niceString;
}

export function PopupContent({ values, hide, reference, canPlay }) {
    return(
    <div ref={reference} id={values.titre} className="popup popup-hide">
        <div className="popup-content">
            <div onClick={hide} style={{width: "50px", position: "absolute", top: "25px", right: "25px"}}>
                <Lottie
                    animationData={closeAnimation}
                    loop={false}
                    play={canPlay}
                />
            </div>
            <div className="column" style={{height: "100%"}}>

                <div className="column" style={{
                    background: `url(${ellipse})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    marginBottom: "35px"
                }}>
                    <span style={{fontSize: "30px", fontWeight: "500"}} className="tc">{values.titre}</span>
                    <span className="tc" style={{marginTop: "10px", fontStyle: "italic", fontWeight: "300"}}>{values.sousTitre}</span>
                </div>
                
                <div className="row" style={{justifyContent:"space-between", alignItems: "stretch"}}>
                    
                    <div className="column" style={{width: "40%"}}>
                        <span style={{fontSize: "16px"}} className="tj">{values.contexte}</span>

                        <span style={{ marginTop: "10px", fontWeight: "bold", fontSize: "17px"}}>Missions :</span>
                        <ul style={{fontSize: "17px", marginTop: "0"}}>
                            {values.missions.map(mission => <li style={{}} key={mission}>{mission}</li>)}
                        </ul>
                        
                        <div className="row" style={{alignItems:"flex-start"}}>
                        <span style={{fontWeight: "bold", fontSize: "17px", marginRight: "10px"}}>Logiciels utilisés :</span>
                            {values.logiciels.map(logiciel =>
                            <div key={createID(values.titre, logiciel.nom)} style={{paddingLeft: "5px", paddingRight: "5px"}}>
                                <Tippy content={logiciel.nom}>
                                    <div>
                                        <logiciel.Component id={createID(values.titre, logiciel.nom)} />
                                    </div>
                                </Tippy>
                            </div>)}
                        </div>

                        <span style={{ marginTop: "10px", fontWeight: "bold", fontSize: "17px"}}>Savoir-Être :</span>
                        <hr style={{width: "100%", borderColor: "#B64FB8"}}/>
                        <div style={{fontSize: "16px"}}>
                            <MarqueeText
                            duration={30}
                            pauseOnHover={true}
                            direction="right"
                            >{values.savoirEtre}</MarqueeText>
                        </div>
                        <hr style={{width: "100%", borderColor: "#B64FB8"}}/>
                    </div>
                    <div style={{
                        width: "50%",
                        display: "grid",
                        gridTemplateColumns: values.grid.colmuns,
                        gridTemplateRows: values.grid.rows,
                        gap: "15px",
                        }}>
                            {values.images.map(image => <Bento key={image.gridArea} img={image.src} style={{ gridArea: image.gridArea, borderRadius: "20px" }}/>)}
                    </div>
                </div>
            </div>
            <div className="row center">
                <a style={{marginTop: "25px", fontSize: "15px"}} href={values.lien} target="_blank" rel="noreferrer">Voir le projet</a>
            </div>
        </div>
    <div className="popup-bg" onClick={hide}/>
</div>
)}