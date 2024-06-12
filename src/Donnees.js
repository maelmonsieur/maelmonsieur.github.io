import mael from "./assets/img/qui_suis_je.jpg";
import { SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";
import { BiLogoBlender } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";

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
import abask_p from "./assets/img/abask_p.jpg"
import aquarium_p from "./assets/img/aquarium_p.jpg"
import as_p from "./assets/img/as_p.jpg"
import crea_p from "./assets/img/crea_p.jpg"
import fablab_p from "./assets/img/fablab_p.jpg"
import fast_p from "./assets/img/fast_p.jpg"
import google_p from "./assets/img/google_p.jpg"
import gout_p from "./assets/img/gout_p.jpg"
import maelito_p from "./assets/img/maelito_p.jpg"
import mb_p from "./assets/img/mb_p.jpg"
import motion_p from "./assets/img/motion_p.jpg"
import rapas_p from "./assets/img/rapas_p.jpg"
import rborho_p from "./assets/img/rborho_p.jpg"
import rhodes_p from "./assets/img/rhodes_p.jpg"
import waf_p from "./assets/img/waf_p.jpg"



const Donnees = {
    quiSuisJe: {
        description: "Bienvenue sur mon portfolio !\n\n Moi c'est Maël Le Dû, un étudiant de 22 ans en BUT MMI passionné par le design graphique, le cinéma et la musique. Découvrez à travers ce Portfolio mon parcours, mes projets, et bien plus encore !\n\n À la rentrée de Septembre 2024 j’intègre le MBA Direction Artistique Digital de MyDigitalSchool à Rennes, je recherche donc une alternance ! Grâce à ce portfolio, découvrez les prestations que je saurai vous fournir, n’hésitez pas à me contacter si je suis le profil idéal pour votre projet ! \n\nBonne lecture !",
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
                    "Graphisme / Motion Design / 3D",
                    "Design d'Expérience (UX / UI)",
                    "Marketing / Communication"
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
                            {src: mb_p, gridArea: '1 / 1 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Premiere Pro", Component: SiAdobepremierepro},
                            {nom: "After Effects", Component: SiAdobeaftereffects},
                            {nom: "Illustrator", Component: SiAdobeillustrator}
                        ],
                        missions: [
                            "Alimentation des réseaux sociaux",
                            "Organisation d’événements pour les 100 ans de l’enseigne",
                            "Collaboration avec une agence de communication (Des Ronds Dans l’Eau)"
                        ],
                        savoirEtre: "Autonomie - Travail d'équipe - Curiosité - Analyse des besoins - Adaptabilité - ",
                        contexte: "Dans le cadre de mon alternance, je suis responsable de la communication digitale des magasins Maréchal & Brilleaud, Ambiance & Styles Brest et Culinarion Brest. J’ai également été chargé de créer et promouvoir des événements pour les 100 ans de Maréchal & Brilleaud en 2023 !",
                        titre: "Maréchal & Brilleaud",
                        sousTitre: "Communication",
                        lien: "https://www.instagram.com/marechalbrilleaud/"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator}
                        ],
                        missions: [
                            "Recherche d’informations et rédaction du scénario",
                            "Création du Storyboard",
                            "Montage du Motion Design"
                        ],
                        savoirEtre: "Autonomie - Autodidactie - Créativité - Curiosité - ",
                        contexte: "Lors de ma 2nde année de BUT MMI, j’ai crée un motion design ayant pour but de dynamiser la vidéo de présentation des consignes de sécurité de l’IUT. Celle ci est montrée aux nouveaux étudiants à chaque rentrée !",
                        titre: "Motion Design IUT Lannion",
                        sousTitre: "Audio-Visuel",
                        lien: "https://drive.google.com/file/d/1LCYMovjL2dUUcgHkRvkaRUtn1_gg8-Ab/view?usp=sharing"
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
                            {src: fablab_p, gridArea: '3 / 4 / 4 / 5'}
                        ],
                        logiciels: [
                            {nom: "Photoshop", Component: SiAdobephotoshop},
                            {nom: "Illustrator", Component: SiAdobeillustrator},
                            {nom: "After Effects", Component: SiAdobeaftereffects}
                        ],
                        missions: [
                            "Réaliser une veille du monde du streaming et de celui des FabLabs",
                            "Créer l’identité visuelle du FabLab",
                            "Rendre les informations accessibles et compréhensibles pour le client"
                        ],
                        savoirEtre: "Créativité - Travail d'équipe - Analyse des besoins - ",
                        contexte: "Ce projet a été réalisé en collaboration avec le Fablab de Lannion. Le but était de renforcer l’attractivité l’attractivité du Fablab en proposant une nouvelle activité, ici optimiser l’espace streaming.",
                        titre: "Fablab",
                        sousTitre: "Communication",
                        lien: "https://www.canva.com/design/DAGHvF0xc5Q/kqup48zEKNgNax2yvkocSg/edit?utm_content=DAGHvF0xc5Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "Figma", Component: SiFigma},
                            {nom: "Premiere Pro", Component: SiAdobepremierepro}
                        ],
                        missions: [
                            "Analyse des besoins",
                            "Gestion d’une équipe et des conflits",
                            "Création d’une vidéo publicitaire pour TikTok",
                            "Mise en pratique de la méthode Design Sprint"
                        ],
                        savoirEtre: "Créativité - Travail d'Équipe - Adaptabilité - ",
                        contexte: "Un workshop d’une semaine, encadré par des employés de Google et mené exclusivement en anglais, dans lequel mon but était de trouver une solution innovante pour l’utilisation des boîtes mail. J’ai réalisé ce workshop selon la méthode du “Design Sprint”.",
                        titre: "Google Insiders",
                        sousTitre: "UX Design",
                        lien: "https://www.canva.com/design/DAGHvFE5A3I/QmwtUOpRxZhG9qgxkt7rCg/edit?utm_content=DAGHvFE5A3I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "Premiere Pro", Component: SiAdobepremierepro}
                        ],
                        missions: [
                            "Audit de communication",
                            "Interview d’un membre",
                            "Ré-édition d’un livre",
                            "Mise en place d’une exposition"
                        ],
                        savoirEtre: "Travail d'équipe - Analyse des besoins - Créativité - Adaptabilité - Autonomie - ",
                        contexte: "ArmorScience est une association basée à Pleumeur-Bodou, qui oeuvre pour la diffusion de la culture scientifique en Bretagne. Lors de ma première année de BUT MMI, j’ai collaboré avec des membres de cette association dans le but de développer leur communication.",
                        titre: "Armor Science",
                        sousTitre: "Communication"
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
                            "Réfléchir à de nouvelles perspectives d’emploi et à un concept innovant",
                            "Étudier le marché et l’environnement de l’association ",
                            "Respecter la démarche RSE",
                            "Défendre son projet auprès du client"
                        ],
                        savoirEtre: "Analyse des besoins - Travail d'équipe - ",
                        contexte: "OES Quimper est une association qui a pour objectif d’aider à l’insertion sociale et professionnelle. Lors de ce workshop encadré par un membre de l’association, notre but était de trouver une solution pour élargir leurs offres d’emploi, en respectant une démarche RSE.",
                        titre: "OES Quimper",
                        sousTitre: "Communication",
                        lien: "https://www.canva.com/design/DAGHvKPhwOk/kHUiCjGWeGcB8UP7boRBpw/edit?utm_content=DAGHvKPhwOk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "Trouver une solution innovante",
                            "Créer l’identité visuelle de notre attraction",
                            "Développer le logiciel",
                            "Créer une vidéo démonstrative du produit"
                        ],
                        savoirEtre: "Adaptabilité - Travail d'équipe - Créativité - Autodidactie - ",
                        contexte: "Pour ce projet en collaboration avec l’Aquarium de Trégastel, nous avons créé une attraction interactive fonctionnant avec la technologie Kinect.",
                        titre: "Aquarium de Trégastel",
                        sousTitre: "UX Design"
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
                            {nom: "Blender", Component: BiLogoBlender}
                        ],
                        missions: [
                            "Modélisation du personnage",
                            "Gestion des lumières et de la caméra",
                            "Composition de la scène",
                            "Recherche de tutoriels et apprentissage de nouvelles méthodes"
                        ],
                        savoirEtre: "Créativité - Autodidactie - Persévérance - ",
                        contexte: "J’ai crée sur Blender un packshot de figurine Funko Pop à mon effigie. Ce projet m’a permis de grandement m’améliorer sur Blender et c’est l’un des projets dont je suis le plus satisfait !",
                        titre: "Funko Pop Maëlito",
                        sousTitre: "3D",
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
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "Analyser l’environnement de la structure",
                            "Réaliser la stratégie éditoriale de l’entreprise",
                            "Créer le media planning et la stratégie d’influence de la structure"
                        ],
                        savoirEtre: "Curiosité - Analyse des besoins - Créativité - Adaptabilité - ",
                        contexte: "Abask est un site de vente d’objets design et décoratifs haut de gamme. Le but de ce projet, encadré par un ancien employé d’Abask, était d’améliorer et de dynamiser sa communication digitale.",
                        titre: "Abask",
                        sousTitre: "Communication",
                        lien: "https://www.canva.com/design/DAGHvfZ9ve0/wAdNCWwOvObjt_JjaFb7SA/edit?utm_content=DAGHvfZ9ve0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "PremierePro", Component: SiAdobepremierepro},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "Trouver une solution pour améliorer le RU, selon une méthode d’UX Design",
                            "Maquettage de l’application ",
                            "Création d’une vidéo promotionnelle"
                        ],
                        savoirEtre: "Analyse des besoins - Travail d'équipe - Autonomie - ",
                        contexte: "Fast Collect est une application mobile fictive qui a pour but d’améliorer le Restaurant Universitaire, grâce à un système de Click & Collect.",
                        titre: "Fast Collect",
                        sousTitre: "UX Design",
                        lien: "https://www.canva.com/design/DAGHvi7MIlY/PV_kAqhsL1MGW7PLo40npg/edit?utm_content=DAGHvi7MIlY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator},
                            {nom: "Premiere Pro", Component: SiAdobepremierepro},
                            {nom: "After Effects", Component: SiAdobeaftereffects}
                        ],
                        missions: [
                            "Création du logo et de l'identité visuelle",
                            "Création de vidéos, montage et écriture",
                            "Élaboration du plan de communication"
                        ],
                        savoirEtre: "Créativité - Autonomie - Analyse des besoins - ",
                        contexte: "Avec un ami, nous avons créé un media Rap présent sur Instagram et Tiktok, qui œuvre pour la déconstruction des clichés de ce genre musical.",
                        titre: "Rap'As",
                        sousTitre: "Audio-Visuel",
                        lien: "https://www.tiktok.com/@rap_as_?_t=8n55qks6ptI&_r=1"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator}
                        ],
                        missions: [
                            "Création de différents logo",
                            "Création d’un Brandboard",
                            "Défendre mon projet face à un client"
                        ],
                        savoirEtre: "Créativité - Autodidactie - Curiosité - ",
                        contexte: "Lors de ma première année de BUT MMI, j’ai eu pour objectif de créer un logo pour une marque fictive de cosmétique haut de gamme nommée Rborho. Cet exercice m’a appris à utiliser les logiciels d’illustrations vectorielles, et à présenter mon projet à un client.",
                        titre: "Rborho",
                        sousTitre: "Graphisme"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator},
                            {nom: "Blender", Component: BiLogoBlender}
                        ],
                        missions: [
                            "Créer l’identité visuelle de la marque",
                            "Réfléchir à un plan de communication",
                            "Créer les designs de vêtements et les collections"
                        ],
                        savoirEtre: "Créativité - Autodidactie - Curiosité - ",
                        contexte: "Avec mon meilleur ami, nous créons une marque de vêtements, c’est un projet amusant et enrichissant mêlant direction artistique, graphisme, communication, gestion de projet, développement WEB et bien d’autres… Retrouvez nous très bientôt dans tous les Pop-Up Store !",
                        titre: "Rhodes",
                        sousTitre: "Graphisme"
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
                            {nom: "Figma", Component: SiFigma},
                            {nom: "WordPress", Component: FaWordpress}
                        ],
                        missions: [
                            "Récolte et tri des créations",
                            "Maquettage du site WEB",
                            "Développement du site WEB"
                        ],
                        savoirEtre: "Créativité - Autodidactie - ",
                        contexte: "Créa MMI est une boutique fictive, sur laquelle sont mis en vente des créations (prints, autoportraits,…) réalisés par les étudiants MMI. Il existe deux versions de ce projet, une faite avec WordPress et l’autre faite avec Prestashop.",
                        titre: "Créa MMI",
                        sousTitre: "Développement Web"
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
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "Création de l’identité visuelle",
                            "Création du business model et business plan",
                            "Gestion des ressources ",
                            "Planification sur 5 ans"
                        ],
                        savoirEtre: "Analyse des besoins - Travail d'équipe - Curiosité - Autonomie - ",
                        contexte: "L’École du Goût est un atelier de cuisine fictif, créé à l’occasion d’un Serious Game, un workshop d’une semaine ayant pour but de créer et faire évoluer son entreprise.",
                        titre: "Lécole du goût",
                        sousTitre: "Communication",
                        lien: "https://www.canva.com/design/DAGHvkYVtPs/ZXeIz46W1URM8TIIX7Lekw/edit?utm_content=DAGHvkYVtPs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
                            {nom: "Illustrator", Component: SiAdobeillustrator},
                            {nom: "Figma", Component: SiFigma}
                        ],
                        missions: [
                            "Création de l’identité visuelle et récolte d’éléments visuels",
                            "Réflexion sur l’ergonomie et l’UX",
                            "Maquettage du site"
                        ],
                        savoirEtre: "Créativité - Analyse des besoins - Travail d'équipe - ",
                        contexte: "Waf.fr, le site qui a du chien ! Le but de ce projet était de créer une maquette (ici de vente de vêtements pour chiens) axée sur l’ergonomie et l’Expérience Utilisateur.",
                        titre: "Waf.fr",
                        sousTitre: "Développement Web",
                        lien: "https://www.figma.com/proto/LAqltAgN8Nl8B9leDHMbPx/Untitled?node-id=2-2&starting-point-node-id=2%3A2&t=dSPOpsTHl17NASwK-1"
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
