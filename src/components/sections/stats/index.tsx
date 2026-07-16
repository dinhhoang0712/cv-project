import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { PROJECTS } from "helpers/data";
import { TECH_STACK, SKILLS } from "components/sections/skill";
import Reveal from "components/share/reveal";
import StatCounter from "./stat-counter";
import "./stats.scss";

const START_YEAR = 2020;

const Stats = () => {
  const { t } = useTranslation();

  const yearsCoding = new Date().getFullYear() - START_YEAR;

  const STATS = [
    { target: PROJECTS.length, label: t("stats.projects") },
    { target: TECH_STACK.length, label: t("stats.technologies") },
    { target: yearsCoding, label: t("stats.years") },
    { target: SKILLS.length, label: t("stats.focusAreas") },
  ];

  return (
    <div className="stats-section">
      <Row className="justify-content-center">
        {STATS.map((stat, index) => (
          <Col xs={6} md={3} key={index} className="stat-col">
            <Reveal delay={index * 100}>
              <div className="stat-tile">
                <StatCounter target={stat.target} />
                <p className="stat-label">{stat.label}</p>
              </div>
            </Reveal>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Stats;
