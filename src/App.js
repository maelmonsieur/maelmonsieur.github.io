import './index.css';
import scrollAnimation from "./assets/img/scroll.json";
import logo from "./assets/img/logo_m.svg";
import canards from "./assets/img/banniere.png";

import AnimatedCursor from "react-animated-cursor";
import Lottie from "react-lottie-player";
import { ReactLenis } from '@studio-freight/react-lenis';

import Div from "./components/Div";
import Navbar from './components/Navbar';
import DeLa3D from './components/DeLa3D';

import ProjetsPerso from "./parts/ProjetsPerso";
import Services from './parts/Services';
import Whoami from "./parts/Whoami";
import ProjetsPro from "./parts/ProjetsPro";
import Parcours from './parts/Parcours';
import Go from './components/Go';
import Merci from './parts/Merci';

function App() {

  return (
    <div className="app">
          <ReactLenis root>
            <div className="eheheh" />

      <AnimatedCursor
        innerSize={6}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '2px solid var(--cursor-donut-color)',
          backgroundColor: '#ffffff3e',
          backdropFilter: 'blur(2px)'
        }}
        />
      <Navbar />
      <Div className="moi" id="top">
        <DeLa3D />
        <Go className='link scroll-animation' to="whoami">
          <Lottie 
            animationData={scrollAnimation}
            loop
            play
            />
          </Go>
        <Div className="gradient-bg"/>
        <Div className="moi-bg" />
      </Div>
      <Div className="content">
        <Whoami />
        <ProjetsPro />
        <ProjetsPerso />

        <div style={{
          position: "relative",
          left: "-16vw",
          width: "100vw",
          height: "250px",
          background: `url(${canards})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "50px",
          marginBottom: "50px"
        }} />

        <Services />
        <Parcours />
        <Merci />

        {/*<div className='parallax-background' style={{transform: `translateY(${scrollPosition}px)`}} />*/}
        <div className='not-parallax-background' />
      </Div>
      <Div className="footer">
        <Div className="column ts" style={{width: "33%"}}>
          <span>Maël LE DÛ</span>
          <a href="mailto:mael.ledu.contact@gmail.com">mael.ledu.contact@gmail.com</a>
          <a href="LeDu_Mael_CV.pdf" target="_blank">Mon CV</a>
        </Div>
        <Go to="top" style={{width: "30px"}} className="link logo-hover">
          <img src={logo} alt="Logo Maël Le Dû"/>
        </Go>
        <Div className="column te" style={{width: "33%"}}>
          <span>Rennes</span>
          <span>Saint-Brieuc</span>
          <span>Lannion</span>
        </Div>
      </Div>
      { /* content */ }
    </ReactLenis>
    </div>
  );
}

export default App;
