import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

import { skillsImage } from "helpers/skill.image";
import "./skill.scss";

const SKILLS = [
  {
    title: "Backend Development",
    items: [
      "RESTful APIs",
      "Authentication & Authorization",
      "Microservices",
      "Clean Architecture",
    ],
  },

  {
    title: "Database Management",
    items: [
      "Relational Database Design",
      "NoSQL Database",
      "Caching Strategies",
      "Query Optimization",
    ],
  },

  {
    title: "System & Architecture",
    items: ["SOLID Principles", "Design Patterns", "DDD", "System Design"],
  },

  {
    title: "DevOps & Deployment",
    items: [
      "Containerization",
      "CI/CD",
      "Linux Environment",
      "Deployment Workflow",
    ],
  },
];

const TECH_STACK = [
  "Java",
  "Spring",
  "NodeJS",
  "NestJS",
  "React",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "Git",
  "Linux",
  "Tailwind",
];

const Skill = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-wrapper">
      {/* TECHNICAL SKILLS */}
      <Row className="skills-container">
        <Col xs={12} className="text-center mb-5">
          <h3 className="skills-title brand-red">{t("skill.title")}</h3>

          <p className="skills-subtitle">{t("skill.subtitle")}</p>
        </Col>

        {SKILLS.map((group, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="skill-group">
              <h4 className="skill-group-title">{group.title}</h4>

              <div className="skill-list">
                {group.items.map((skill, idx) => (
                  <div className="skill-badge" key={idx}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* TECH STACK */}
      <Row className="tech-stack-container">
        <Col xs={12} className="text-center mb-5">
          <h3 className="skills-title brand-red">{t("skill.techStack")}</h3>

          <p className="skills-subtitle">{t("skill.techSubtitle")}</p>
        </Col>

        <Col xs={12}>
          <Marquee gradient={false} speed={45} pauseOnHover pauseOnClick>
            {TECH_STACK.map((skill, index) => (
              <div className="tech-item" key={index}>
                <div className="tech-card">
                  <img
                    src={skillsImage(skill)}
                    alt={skill}
                    width={42}
                    height={42}
                  />

                  <p className="tech-name">{skill}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
