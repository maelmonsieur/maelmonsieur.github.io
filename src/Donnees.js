import mael from "./assets/img/qui_suis_je.jpg";
//import { SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro  } from "react-icons/si";
import { SiAdobephotoshop, SiFigma  } from "react-icons/si";
//import { BiLogoBlender } from "react-icons/bi";
//import { FaWordpress } from "react-icons/fa";

import mb from "./assets/img/mb.jpg"
import troisde from "./assets/img/3d.jpg"
import abask from "./assets/img/abask.jpg"
import aquarium from "./assets/img/aquarium.jpg"
import as from "./assets/img/as.jpg"
import ecole_du_gout from "./assets/img/ecole_du_gout.jpg"
import fablab from "./assets/img/fablab.jpg"
import fast_collect from "./assets/img/fast_collect.jpg"
import google from "./assets/img/google.jpg"
import iut_lannion from "./assets/img/iut_lannion.jpg"
import mmi_crea from "./assets/img/mmi_crea.jpg"
import oes from "./assets/img/oes.jpg"
import rapas from "./assets/img/rapas.jpg"
import rborho from "./assets/img/rborho.jpg"
import rhodes from "./assets/img/rhodes.jpg"
import waf from "./assets/img/waf.jpg"
import personal_comp from "./assets/img/personal_comp.jpg"
import client_comp from "./assets/img/client_comp.jpg"


const Donnees = {
    quiSuisJe: {
        description: "Bienvenue sur mon portfolio !\n\nMoi c'est Maël Le Dû, un étudiant de 22 ans en BUT MMI passionné par le design graphique et la musique. Découvrez à travers ce Portfolio mes centres d'intérêts, mon parcours, mes projets, et bien d'autes !\n\nBonne continuation !",
        image: mael
    },
    services: {
        description: "Futur étudiant en MBA Direction Artistique Digitale à Rennes, je suis en recherche d'une alternance pour Septembre 2024. Mon profil vous intéresse ? Voici les domaines dans lesquels je pourrai apporter mon expertise et mes compétences ! N'hésitez pas à me contacter par mail !",
        liste: [
            {
                nom: "Branding",
                liste_services: [
                    "Rapports d'audit / Veille",
                    "Stratégie et Positionnement",
                    "Idéntité visuelle",
                    "Direction artistique",
                    "Identité Verbale",
                ]
            },
            {
                nom: "UX Design",
                liste_services: [
                    "Analyse des besoins et objectifs",
                    "Benchmark / Étude de marché",
                    "User Journey Map",
                    "Blueprint",
                    "Wireframe et Maquettage ",
                    "Tests Utilisateurs"
                ]
            },
            {
                nom: "Réseaux Sociaux",
                liste_services: [
                    "Veille et Audit",
                    "Direction Artistique",
                    "Media planning",
                    "Calendrier éditorial",
                    "Création de contenu",
                    "Creation de template "
                ]
            },
            {
                nom: "Audio-Visuel",
                liste_services: [
                    "Captation photo / vidéo",
                    "Étalonnage",
                    "Montage vidéo",
                    "Motion Design",
                    "Rendus 3D",
                    "Réalisation d'infographies"
                ]
            },
            {
                nom: "Logiciels",
                liste_services: [
                    "PhotoShop",
                    "Illustrator",
                    "Figma",
                    "Blender",
                    "WordPress / Prestashop"
                ]
            }
        ]
    },
    parcours: {
        formation: [
            {
                nom: "MBA Direction Artistique Digitale",
                lieu: "MyDigitalSchool - 35 000 Rennes",
                duree: "2024 - 2026",
                missions: [
                    "mission con",
                    "mission 2",
                    "mission 3"
                ],
                avenir: true
            },
            {
                nom: "BUT Métiers du Multimédia et de l'Internet",
                lieu: "IUT de Lannion - 22 300 Lannion",
                duree: "2021 - 2024",
                missions: [
                    "Graphisme / Motion Design / 3D",
                    "Design d'Expérience (UX / UI)",
                    "Marketing / Communication"
                ]
            },
            {
                nom: "DUT Réseaux & Télécommunications",
                lieu: "IUT de Lannion - 22 300 Lannion",
                duree: "2020 - 2021",
                missions: [
                    "Réseaux",
                    "Télécommunications",
                    "Systèmes"
                ]
            },
            {
                nom: "Baccalauréat STI2D",
                lieu: "Lycée E. Freyssinet - 22 000 Saint-Brieuc",
                duree: "2017 - 2020",
                missions: [
                    "Option Architecture et Construction",
                    "Projets de groupe"
                ]
            },
        ],
        experiences: [
            {
                nom: "Alternance Communication Digitale",
                lieu: "Maréchal & Brilleaud - 22 000 Saint Brieuc",
                duree: "2022 - 2024",
                missions: [
                    "Graphisme / Motion Design / 3D",
                    "Design d'Expérience (UX / UI)",
                    "Marketing / Communication"
                ]
            },
            {
                nom: "Intérim Usine Agroalimentaire",
                lieu: "J.Stalaven - 22 120 Yffiniac",
                duree: "2020 - 2022 (2 mois / an)",
                missions: [
                    "Expédition de commandes",
                    "Formation des arrivants",
                    "Gestion des équipes"
                ]
            },
            {
                nom: "Emploi saisonnier Maraîchage",
                lieu: "SARL D.Lefranc - 22 170 Plerneuf",
                duree: "2019 (1 mois)",
                missions: [
                    "Récolte de légumes",
                    "Gestion de l'inventaire"
                ]
            },
            {
                nom: "Stage d'observation Sérigraphie",
                lieu: "R.Sérigraphie - 22 190 Plérin",
                duree: "2016 (1 semaine)",
                missions: [
                    "Découverte du monde professionnel",
                    "Impressions et flocages sur textiles"
                ]
            },
        ],
    },
    projets: {
        pro: {
            gridTemplateColumns: '2fr 1fr 2fr 2fr 1fr 2fr',
            gridTemplateRows: '2fr 5fr 2fr',
            responsiveGridTemplateColumns: 'repeat(2, 1fr)',
            responsiveGridTemplateRows: 'repeat(6, 1fr)',
            tuileCentrale: {
                gridArea: '2 / 2 / 3 / 6',
                responsiveGridArea: '1 / 1 / 3 / 3',
                image: client_comp
            },
            tuiles: [
                {
                    image: mb,
                    gridArea: '1 / 1 / 2 / 4',
                    responsiveGridArea: '3 / 1 / 4 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "mb",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: iut_lannion,
                    gridArea: '1 / 4 / 2 / 6',
                    responsiveGridArea: '4 / 1 / 5 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "iut-motion",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: fablab,
                    gridArea: '2 / 1 / 3 / 2',
                    responsiveGridArea: '4 / 2 / 5 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "fablab",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: google,
                    gridArea: '1 / 6 / 3 / 7',
                    responsiveGridArea: '5 / 1 / 6 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "google-insiders",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: as,
                    gridArea: '3 / 1 / 4 / 4',
                    responsiveGridArea: '5 / 2 / 6 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "armor-science",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: oes,
                    gridArea: '3 / 4 / 4 / 5',
                    responsiveGridArea: '6 / 1 / 7 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "oes-quimper",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: aquarium,
                    gridArea: '3 / 5 / 4 / 7',
                    responsiveGridArea: '6 / 2 / 7 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "aquarium",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                }
        ]},
        perso: {
            gridTemplateColumns: '2fr 1fr 2fr 3fr 2fr',
            gridTemplateRows: '2fr 5fr 2fr',
            responsiveGridTemplateColumns: 'repeat(2, 1fr)',
            responsiveGridTemplateRows: 'repeat(7, 1fr)',
            tuileCentrale: {
                gridArea: '2 / 2 / 3 / 5',
                responsiveGridArea: '1 / 1 / 3 / 3',
                image: personal_comp
            },
            tuiles: [
                {
                    image: troisde,
                    gridArea: '1 / 1 / 2 / 2',
                    responsiveGridArea: '3 / 1 / 4 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "pop",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: abask,
                    gridArea: '1 / 2 / 2 / 4',
                    responsiveGridArea: '4 / 1 / 5 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "abask",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: fast_collect,
                    gridArea: '1 / 4 / 2 / 5',
                    responsiveGridArea: '4 / 2 / 5 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "fast-collect",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: rapas,
                    gridArea: '1 / 5 / 2 / 6',
                    responsiveGridArea: '5 / 1 / 6 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "rapas",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: rborho,
                    gridArea: '2 / 1 / 3 / 2',
                    responsiveGridArea: '5 / 2 / 6 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "rborho",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: rhodes,
                    gridArea: '2 / 5 / 4 / 6',
                    responsiveGridArea: '6 / 1 / 7 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "rhodes",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: mmi_crea,
                    gridArea: '3 / 1 / 4 / 3',
                    responsiveGridArea: '6 / 2 / 7 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "mmi-crea",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: ecole_du_gout,
                    gridArea: '3 / 3 / 4 / 4',
                    responsiveGridArea: '7 / 1 / 8 / 2',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "ecole du prout",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                },
                {
                    image: waf,
                    gridArea: '3 / 4 / 4 / 5',
                    responsiveGridArea: '7 / 2 / 8 / 3',
                    popup: {
                        grid: {
                            gridColumn: '2fr 1fr 2fr 3fr 2fr',
                            gridRow: '2fr 5fr 2fr'
                        },
                        images: [
                            {src: mael, gridArea: '2 / 2 / 3 / 5'},
                            {src: mael, gridArea: '1 / 1 / 2 / 2'},
                            {src: mael, gridArea: '1 / 2 / 2 / 4'},
                            {src: mael, gridArea: '1 / 4 / 2 / 5'},
                            {src: mael, gridArea: '1 / 5 / 2 / 6'},
                            {src: mael, gridArea: '2 / 1 / 3 / 2'},
                            {src: mael, gridArea: '2 / 5 / 4 / 6'},
                            {src: mael, gridArea: '3 / 1 / 4 / 3'},
                            {src: mael, gridArea: '3 / 3 / 4 / 4'},
                            {src: mael, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "tueur",
                            "chatouilleur",
                            "donner a manger a mon gros chat"
                        ],
                        savoirEtre: "Agréable - Consistant - Sourire - Gentil - ",
                        contexte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor ultrices, lacinia eros id, fringilla nibh. Suspendisse eget sagittis justo. Duis dictum bibendum odio et fermentum. Sed nec dictum eros.",
                        titre: "waf",
                        sousTitre: "Communication",
                        lien: "https://google.fr"
                    }
                }
        ]}
    },
    liens: {
        instagram: "instagram.com",
        linkedin: "linkedin.com"
    }
}

export default Donnees;
