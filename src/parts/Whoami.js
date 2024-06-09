import Div from "../components/Div"
import Bento from "../components/Bento"
import Tilt from 'react-parallax-tilt';

import Donnees from "../Donnees";

export default function Whoami(props) {
    return(
    <Bento className="container">
        <h1 id="whoami">
            Qui suis-je ?
        </h1>
        <Div className="row between ts">
            <p style={{width: "70%", whiteSpace: "pre-line"}}>{Donnees.quiSuisJe.description}</p>

            <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
            >
                <Bento img={Donnees.quiSuisJe.image} style={{width: "220px", height: "250px"}}/>
            </Tilt>
        </Div>
    </Bento>)
}