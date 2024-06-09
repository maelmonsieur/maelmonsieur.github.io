import Div from "../components/Div";
import Bento from "../components/Bento";
import ProjetPopup from "../components/ProjetPopup";

import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from 'react-responsive'

import Donnees from "../Donnees";

export default function ProjetsPro(props) {
          
    const values = Donnees.projets.pro;
    const isPhone = useMediaQuery({ query: '(max-width: 1000px)' })

    return(
    <div className="bento container">
            <h1 id="projets">Mes projets</h1>
            <Div style={{
                display: 'grid',
                gridTemplateColumns: isPhone ? values.responsiveGridTemplateColumns : values.gridTemplateColumns,
                gridTemplateRows: isPhone ? values.responsiveGridTemplateRows : values.gridTemplateRows,
                gap: '15px',
                width: '100%',
                height: '700px'
            }}>
                <Tilt
                    tiltReverse  
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    style={{gridArea: isPhone ? values.tuileCentrale.responsiveGridArea : values.tuileCentrale.gridArea}}
                >
                    <Bento img={values.tuileCentrale.image} style={{width: '100%', height: '100%', borderRadius: '25px'}}/> {/* Milieu */}
                </Tilt>

                {values.tuiles.map(projet => 
                    <ProjetPopup key={projet.popup.titre} childElem={Bento} className="little hover" popup={projet.popup} img={projet.image}
                    style={{gridArea: isPhone ? projet.responsiveGridArea : projet.gridArea}} />
                )}
            </Div>
    </div>)
}