import Div from "../components/Div"
import Bento from "../components/Bento"

import Donnees from "../Donnees"

export default function Galerie(props) {
    return(
    <Bento style={{
        flexDirection: "column",
        padding: "20px 50px 50px 50px",
        marginTop: '50px'
        }}>
        <h1 id="parcours">
            Mon parcours
        </h1>

        <Div className="row between parcours" style={{width: "80%"}}>
            <Div className="column formation">
                <span className="titre">Formation</span>
                {Donnees.parcours.formation.map((formation, i) =>
                <Div className={"fromleft transition ts delay-"+(i+1)}>
                    <span className="nom">{formation.nom}</span>
                    <div className="row">
                        <span className="lieu">{formation.lieu} |&nbsp;</span>
                        <span className="duree">{formation.duree}</span>
                    </div>
                    <ul className="ts">
                    {formation.missions.map(mission =>
                        <li className="mission">{mission}</li>
                    )}
                    </ul>
                </Div>)}
            </Div>
            <Div className="column experience">
            <span className="titre">Expériences</span>
                {Donnees.parcours.experiences.map((experiences, i) =>
                <Div className={"fromright transition ts delay-"+(i+1)}>
                    <span className="nom">{experiences.nom}</span>
                    <div className="row">
                        <span className="lieu">{experiences.lieu} |&nbsp;</span>
                        <span className="duree">{experiences.duree}</span>
                    </div>
                    <ul className="ts">
                    {experiences.missions.map(mission =>
                        <li className="mission">{mission}</li>
                    )}
                    </ul>
                </Div>)}
            </Div>
        </Div>

    </Bento>)
}