import Tilt from "react-parallax-tilt";
import HeroTerminal from "./hero.terminal";
import "./hero.scss";

const HeroRight = () => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1200}
      scale={1.015}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.08}
      glareColor="#8b5cf6"
      glarePosition="all"
      glareBorderRadius="10px"
      className="hero-right-tilt"
    >
      <div className="hero-right">
        <span className="hero-glow hero-glow-1"></span>
        <span className="hero-glow hero-glow-2"></span>
        <div className="border-top"></div>
        <div className="first">
          <div className="circle bg-first"></div>
          <div className="circle bg-second"></div>
          <div className="circle bg-third"></div>
        </div>
        <div className="second">
          <HeroTerminal />
        </div>
      </div>
    </Tilt>
  );
};

export default HeroRight;
