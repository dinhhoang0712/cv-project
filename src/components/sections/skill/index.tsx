import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { FaServer, FaDatabase, FaSitemap, FaCloud } from "react-icons/fa";

import { skillsImage } from "helpers/skill.image";
import Reveal from "components/share/reveal";
import GlowCard from "components/share/glow-card";
import "./skill.scss";

export const SKILLS = [
  {
    title: "Backend Development",
    icon: <FaServer />,
    items: [
      "RESTful APIs",
      "Authentication & Authorization",
      "Microservices",
      "Clean Architecture",
    ],
  },

  {
    title: "Database Management",
    icon: <FaDatabase />,
    items: [
      "Relational Database Design",
      "NoSQL Database",
      "Caching Strategies",
      "Query Optimization",
    ],
  },

  {
    title: "System & Architecture",
    icon: <FaSitemap />,
    items: ["SOLID Principles", "Design Patterns", "DDD", "System Design"],
  },

  {
    title: "DevOps & Deployment",
    icon: <FaCloud />,
    items: [
      "Containerization",
      "CI/CD",
      "Linux Environment",
      "Deployment Workflow",
    ],
  },
];

export const TECH_STACK = [
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

const renderTechItem = (skill: string, index: number) => (
  <div className="tech-item" key={index}>
    <div className="tech-card">
      <img src={skillsImage(skill)} alt={skill} width={42} height={42} />

      <p className="tech-name">{skill}</p>
    </div>
  </div>
);

const TECH_STACK_ROW_1 = TECH_STACK.slice(0, Math.ceil(TECH_STACK.length / 2));
const TECH_STACK_ROW_2 = TECH_STACK.slice(Math.ceil(TECH_STACK.length / 2));

const Skill = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-wrapper">
      {/* TECHNICAL SKILLS */}
      <Row className="skills-container">
        <Col xs={12} className="text-center mb-5">
          <Reveal>
            <h3 className="skills-title section-heading brand-red">{t("skill.title")}</h3>

            <p className="skills-subtitle">{t("skill.subtitle")}</p>
          </Reveal>
        </Col>

        {SKILLS.map((group, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <Reveal delay={index * 100} className="h-100">
              <GlowCard identifier={`skill-${index}`} bare className="h-100">
                <div className="skill-group">
                  <div className="skill-group-icon">{group.icon}</div>

                  <h4 className="skill-group-title">{group.title}</h4>

                  <div className="skill-list">
                    {group.items.map((skill, idx) => (
                      <div className="skill-badge" key={idx}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          </Col>
        ))}
      </Row>

      {/* TECH STACK */}
      <Row className="tech-stack-container">
        <Col xs={12} className="text-center mb-5">
          <Reveal>
            <h3 className="skills-title section-heading brand-red">{t("skill.techStack")}</h3>

            <p className="skills-subtitle">{t("skill.techSubtitle")}</p>
          </Reveal>
        </Col>

        <Col xs={12}>
          <Reveal>
            <div className="tech-marquee-wrapper mb-3">
              <Marquee gradient={false} speed={42} pauseOnHover pauseOnClick>
                {TECH_STACK_ROW_1.map(renderTechItem)}
              </Marquee>
            </div>

            <div className="tech-marquee-wrapper">
              <Marquee
                gradient={false}
                speed={36}
                direction="right"
                pauseOnHover
                pauseOnClick
              >
                {TECH_STACK_ROW_2.map(renderTechItem)}
              </Marquee>
            </div>
          </Reveal>
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
