import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import bg from "assets/section.svg";
import Introduction from "components/sections/introduction";
import ResizeButton from "components/sections/resize.button";
import { useTranslation } from "react-i18next";
import Skill from "components/sections/skill";
import { useRef } from "react";
import Project from "@/components/sections/project";
import About from "@/components/sections/about";

const HomePage = () => {
  const { t } = useTranslation();
  const expRef = useRef<HTMLElement>(null);
  const scrollToExperienceSection = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homepage-screen">
      <div
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
      <section className="mt-md-7 mt-2">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft scrollToExperienceSection={scrollToExperienceSection} />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
            <Col
              xs={12}
              className="d-md-none d-flex mt-4 justify-content-center"
            >
              <ResizeButton
                btnText={t("heroSection.cv")}
                btnIcons={<MdFileDownload />}
              />
            </Col>
          </Row>
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
