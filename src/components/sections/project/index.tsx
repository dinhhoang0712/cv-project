import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ProjectCard from "./project.card";
import FeaturedProjectCard from "./project.featured";
import { PROJECTS } from "helpers/data";
import Reveal from "components/share/reveal";
import GlowCard from "components/share/glow-card";

import "./project.scss";

const Project = () => {
  const { t } = useTranslation();

  const featuredProject = PROJECTS.find((item) => item.featured);
  const otherProjects = PROJECTS.filter((item) => !item.featured);

  return (
    <div className="projects-section">
      {/* HEADING */}
      <Row>
        <Col xs={12}>
          <Reveal className="text-center">
            <h3 className="projects-title section-heading brand-red">{t("projects.title")}</h3>

            <p className="projects-subtitle">{t("projects.subtitle")}</p>
          </Reveal>
        </Col>
      </Row>

      {/* FEATURED PROJECT */}
      {featuredProject && (
        <Reveal>
          <GlowCard identifier="project-featured" bare>
            <FeaturedProjectCard
              imgPath={featuredProject.imgPath}
              title={featuredProject.title}
              description={t(featuredProject.descriptionKey)}
              githubLink={featuredProject.githubLink}
              demoLink={featuredProject.demoLink}
              techStack={featuredProject.techStack}
              date={t(featuredProject.date)}
              badgeLabel={t("projects.featuredBadge")}
            />
          </GlowCard>
        </Reveal>
      )}

      {/* PROJECTS */}
      <Row className="justify-content-center">
        {otherProjects?.map((item, index) => (
          <Col
            md={6}
            lg={4}
            className="project-card-wrapper mb-4"
            key={item.id}
          >
            <Reveal delay={(index % 3) * 100} className="h-100 w-100">
              <GlowCard identifier={`project-${item.id}`} bare className="h-100">
                <ProjectCard
                  imgPath={item.imgPath}
                  title={item.title}
                  description={t(item.descriptionKey)}
                  githubLink={item.githubLink}
                  demoLink={item.demoLink}
                  techStack={item.techStack}
                  date={t(item.date)}
                />
              </GlowCard>
            </Reveal>
          </Col>
        ))}
      </Row>

      <div className="mb-7"></div>
    </div>
  );
};

export default Project;
