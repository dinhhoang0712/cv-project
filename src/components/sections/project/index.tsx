import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";

import "./project.scss";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-section">
      {/* HEADING */}
      <Row>
        <Col xs={12}>
          <div className="text-center">
            <h3 className="projects-title brand-red">{t("projects.title")}</h3>

            <p className="projects-subtitle">{t("projects.subtitle")}</p>
          </div>
        </Col>
      </Row>

      {/* PROJECTS */}
      <Row className="justify-content-center">
        {PROJECTS?.map((item) => (
          <Col
            md={6}
            lg={4}
            className="project-card-wrapper mb-4"
            key={item.id}
          >
            <ProjectCard
              imgPath={item.imgPath}
              title={item.title}
              description={t(item.descriptionKey)}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
              techStack={item.techStack}
              date={t(item.date)}
            />
          </Col>
        ))}
      </Row>

      <div className="mb-7"></div>
    </div>
  );
};

export default Project;
