import Div from "../components/Div"
import Bento from "../components/Bento"

import Donnees from "../Donnees"

export default function Services(props) {

    const services = Donnees.services;

    return(
    <Bento className="container">
        <h1 id="services">
            Mes services
        </h1>
        <span style={{
            padding: "30px",
            marginBottom: "15px"
        }}>Futur étudiant en <b>MBA Direction Artistique Digitale à Rennes</b>, je suis en <b>recherche d'une alternance</b> pour Septembre 2025. Mon profil vous intéresse ? Voici les domaines dans lesquels je pourrai apporter <b>mon expertise</b> et <b>mes compétences</b> ! N'hésitez pas à <a href="mailto:mael.ledu.contact@gmail.com">me contacter</a> par mail !</span>
        <Div className="services-container">
            {services.liste.map(service => 
                <Div className="service" key={service.nom}>
                    <span className="service-title">{service.nom}</span>
                    <ul>
                        {service.liste_services.map(un_service =>
                            <li key={un_service}>{un_service}</li>
                        )}
                    </ul>
                </Div>
            )}
        </Div>
    </Bento>)
}
