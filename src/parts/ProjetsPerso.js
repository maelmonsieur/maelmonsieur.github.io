import Div from "../components/Div";
import Bento from "../components/Bento";
import ProjetPopup from "../components/ProjetPopup";

import Tilt from 'react-parallax-tilt';

import Donnees from "../Donnees";

export default function ProjetsPerso(props) {
          
    const values = Donnees.projets.perso;

    return(<div style={{
        flexDirection: "column",
        padding: "50px",
        marginTop: '50px',
        backdropFilter: "blur(5px)"
        }}
        className="bento"
        >
            <Div style={{
                display: 'grid',
                gridTemplateColumns: values.gridTemplateColumns,
                gridTemplateRows: values.gridTemplateRows,
                gap: '15px',
                width: '100%',
                height: '700px'
            }}>
                <Tilt
                    tiltReverse  
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    style={{gridColumn: values.tuileCentrale.gridColumn, gridRow: values.tuileCentrale.gridRow}}
                >
                    <Bento img={values.tuileCentrale.image} style={{width: '100%', height: '100%', borderRadius: '25px'}}/> {/* Milieu */}
                </Tilt>

                {values.tuiles.map(projet => 
                    <ProjetPopup key={projet.popup.titre} childElem={Bento} className="little hover" popup={projet.popup} img={projet.image} style={{gridColumn: projet.gridColumn, gridRow: projet.gridRow}} />
                )}
            </Div>
    </div>)
}