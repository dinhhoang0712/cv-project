import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.png";
import "./introduction.scss";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="introduction-section my-5 my-md-7"
      style={{ position: "relative" }}
    >
      <Row>
        <Col xs={12} md={9}>
          <h2 className="text-center text-md-start">
            {i18n.resolvedLanguage === "en" ? (
              <>
                ABOUT <span className="text-pink-100">ME</span>
              </>
            ) : (
              <>
                <span className="text-pink-100">GIỚI THIỆU</span> BẢN THÂN
              </>
            )}
          </h2>

          <br />

          <p className="intro-text">
            {t("introSection.p1")}
            <span className="text-pink-100"> Backend Development</span>
            {t("introSection.p2")}
            <br />
            <br />
            {t("introSection.p3")}
            <span className="text-pink-100"> Java Spring </span>
            {t("introSection.and")}
            <span className="text-pink-100"> Node.js</span>
            .
            <br />
            <br />
            {t("introSection.p4")}
            <span className="text-pink-100"> System Design</span>,
            <span className="text-pink-100"> Design Patterns</span>,
            <span className="text-pink-100"> SOLID Principles </span>
            {t("introSection.and")}
            <span className="text-pink-100"> Domain-Driven Design (DDD)</span>
            .
            <br />
            <br />
            {t("introSection.p5")}
            <span className="text-pink-100"> Docker </span>
            {t("introSection.and")}
            <span className="text-pink-100"> Kubernetes</span>
            .
            <br />
            <br />
            {t("introSection.p6")}
          </p>
        </Col>
        <Col md={3} className="d-md-block d-none">
          <Tilt>
            <div className="avatar-wrapper">
              <img src={avatarImg} className="img-fluid avatar" alt="avatar" />
            </div>
          </Tilt>
        </Col>
      </Row>
      {/* <div className="about-container d-none d-md-flex">
        <span className="about-label">{t("introSection.about")}</span>
        <span className="vertical-line"></span>
      </div> */}
    </section>
  );
};

export default Introduction;
