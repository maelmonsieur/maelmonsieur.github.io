import Div from "../components/Div"
import Bento from "../components/Bento"

import Donnees from "../Donnees"

export default function Services(props) {

    const services = Donnees.services;

    return(
    <Bento style={{
        flexDirection: "column",
        padding: "20px 50px 50px 50px",
        marginTop: '50px',
        backdropFilter: "blur(5px)",
        }}>
        <h1 id="services">
            Mes services
        </h1>
        <span style={{
            padding: "30px",
            marginBottom: "15px"
        }}>Futur étudiant en <b>MBA Direction Artistique Digitale à Rennes</b>, je suis en <b>recherche d'une alternance</b> pour Septembre 2024. Mon profil vous intéresse ? Voici les domaines dans lesquels je pourrai apporter <b>mon expertise</b> et <b>mes compétences</b> ! N'hésitez pas à <a href="mailto:mael.ledu.contact@gmail.com">me contacter</a> par mail !</span>
        <Div style={{
            textAlign: "start",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: "30px"
        }}>
            {services.liste.map(service => 
                <Div className="service">
                    <span className="service-title">{service.nom}</span>
                    <ul>
                        {service.liste_services.map(un_service =>
                            <li>{un_service}</li>
                        )}
                    </ul>
                </Div>
            )}
        </Div>
    </Bento>)
}