import Div from "../components/Div"
import Bento from "../components/Bento"

import Donnees from "../Donnees"

export default function Parcours(props) {
    return(
    <Bento className="container">
        <h1 id="parcours">
            Mon parcours
        </h1>

        <Div className="row between parcours" style={{width: "90%", alignItems: "flex-start"}}>
            <Div className="column formation">
                <span className="titre">Formation</span>
                {Donnees.parcours.formation.map((formation, i) =>
                <Div key={i} style={{padding: "15px"}} className={"fromleft transition ts delay-"+(i+1)+" "+(formation.avenir && "avenir")}>
                    <span className="nom">{formation.nom}</span>
                    <div className="row normal">
                        <span className="lieu">{formation.lieu} |&nbsp;</span>
                        <span className="duree">{formation.duree}</span>
                    </div>
                    <div className="responsive">
                        <span className="lieu">{formation.lieu} | {formation.duree}</span>
                    </div>
                    <ul className="ts">
                    {formation.missions.map(mission =>
                        <li key={mission} className="mission">{mission}</li>
                    )}
                    </ul>
                </Div>)}
            </Div>
            <Div className="column experience">
            <span className="titre">Expériences</span>
                {Donnees.parcours.experiences.map((experiences, i) =>
                <Div key={i} style={{padding: "15px"}} className={"fromright transition ts delay-"+(i+1)+" "+(experiences.avenir && "avenir")}>
                    <span className="nom">{experiences.nom}</span>
                    <div className="row normal">
                        <span className="lieu">{experiences.lieu} |&nbsp;</span>
                        <span className="duree">{experiences.duree}</span>
                    </div>
                    <div className="responsive">
                        <span className="lieu">{experiences.lieu} | {experiences.duree}</span>
                    </div>
                    <ul className="ts">
                    {experiences.missions.map(mission =>
                        <li key={mission} className="mission">{mission}</li>
                    )}
                    </ul>
                </Div>)}
            </Div>
        </Div>

    </Bento>)
}