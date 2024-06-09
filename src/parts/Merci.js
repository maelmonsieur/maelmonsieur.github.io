import Bento from "../components/Bento"

export default function Merci(props) {
    return(<Bento style={{
        display: "block",
        padding: "50px 150px",
        marginTop: '50px',
        backdropFilter: "blur(5px)"
        }}>
        <b>Merci beaucoup</b> d'avoir parcouru mon portfolio jusqu'au bout ! Si mon profil vous intéresse pour une alternance de 2 ans à partir de Septembre 2024 (rythme : 1 semaine cours - 2 semaines entreprise), contactez moi !<br /><br />N'hésitez pas à partager ce site, <b>à très bientôt !</b>
    </Bento>)
}