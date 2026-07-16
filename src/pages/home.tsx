import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import bg from "assets/section.svg";
import Introduction from "components/sections/introduction";
import { useTranslation } from "react-i18next";
import Skill from "components/sections/skill";
import { useRef } from "react";
import Project from "@/components/sections/project";
import About from "@/components/sections/about";
import Stats from "components/sections/stats";

const HomePage = () => {
  const { i18n } = useTranslation();
  const expRef = useRef<HTMLElement>(null);
  const scrollToExperienceSection = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homepage-screen">
      <div
        className="hero-bg-decoration"
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-7">
        <Container style={{ position: "relative" }}>
          <Row className="align-items-center">
            <Col md={6}>
              <HeroLeft scrollToExperienceSection={scrollToExperienceSection} />
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <HeroRight />
            </Col>
          </Row>

          <div className="scroll-cue">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Scroll to skills section"
            >
              <span className="scroll-cue-icon">
                <span></span>
              </span>
              {i18n.resolvedLanguage === "en" ? "Scroll" : "Cuộn xuống"}
            </button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Stats />
        </Container>
      </section>
      <section>
        <Container>
          <Introduction />
        </Container>
      </section>
      <section id="skills">
        <Container>
          <Skill />
        </Container>
      </section>

      <section id="projects">
        <Container>
          <Project />
        </Container>
      </section>

      <section id="about">
        <Container>
          <About />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
