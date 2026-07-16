import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import experienceJSON from "assets/lottie/code.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "@/components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider";
import SocialMedia from "../social.media";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaQuoteLeft,
  FaHeart,
  FaBullseye,
  FaFlagCheckered,
  FaLightbulb,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Reveal from "components/share/reveal";
import "./about.scss";
import { MdEmail } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HEADER */}
      <Row>
        <Col xs={12}>
          <Reveal className="text-center mb-md-5 mb-3">
            <span className="section-badge">
              <BsStars /> {t("about.eyebrow")}
            </span>

            <h3 className="section-heading about-gradient-heading">
              {t("about.title")}
            </h3>

            <p className="mb-0 text-secondary">{t("about.subtitle")}</p>
          </Reveal>
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={12}>
          <Reveal>
            {/* INTERESTS */}
            <div className="about-subsection">
              <h5 className="about-subsection-title brand-red mb-3">
                <span className="about-subsection-icon">
                  <FaHeart />
                </span>
                {t("about.interests.title")}
              </h5>

              <div className="about-badge-list">
                {(
                  t("about.interests.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <span className="about-badge" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CURRENT FOCUS */}
            <div className="about-subsection mt-4">
              <h5 className="about-subsection-title brand-red mb-3">
                <span className="about-subsection-icon">
                  <FaBullseye />
                </span>
                {t("about.currentFocus.title")}
              </h5>

              <div className="about-badge-list">
                {(
                  t("about.currentFocus.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <span className="about-badge" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CAREER GOAL & FUN FACT */}
            <div className="about-info-grid mt-4">
              <div className="about-info-card">
                <div className="about-subsection-icon small">
                  <FaFlagCheckered />
                </div>

                <h5 className="brand-red mb-2">
                  {t("about.careerGoal.title")}
                </h5>

                <p className="mb-0">{t("about.careerGoal.description")}</p>
              </div>

              <div className="about-info-card">
                <div className="about-subsection-icon small">
                  <FaLightbulb />
                </div>

                <h5 className="brand-red mb-2">{t("about.funFact.title")}</h5>

                <p className="mb-0">{t("about.funFact.description")}</p>
              </div>
            </div>

            {/* QUOTE */}
            <div className="about-quote mt-4">
              <FaQuoteLeft className="about-quote-icon" />

              <p className="about-quote-text">{t("about.quote.text")}</p>

              <p className="about-quote-author">
                — {t("about.quote.author")}
              </p>
            </div>
          </Reveal>
        </Col>

        {/* ANIMATION */}
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center gap-4"
        >
          <Reveal delay={150}>
            <AnimationLottie
              width="80%"
              animationPath={JSON.parse(JSON.stringify(codingJSON))}
            />

            <AnimationLottie
              animationPath={JSON.parse(JSON.stringify(experienceJSON))}
            />
          </Reveal>
        </Col>
      </Row>

      {/* EDUCATION */}
      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>

        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <Reveal>
            <div className="d-flex flex-column align-items-center gap-3">
              <h4 className="text-center brand-red">
                {t("about.education.title")}
              </h4>

              <GlowCard identifier={`education-1`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>{t("about.education.duration")}</p>
                    </div>

                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>

                      <div className="info">
                        <p className="title">{t("about.education.major")}</p>

                        <p className="company">
                          {t("about.education.school")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </Reveal>
        </Col>
      </Row>

      <Divider />

      {/* CONTACT */}
      <Row id="contact" className="contact-row">
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <Reveal>
            <div className="contact-card">
              <span className="section-badge">
                <BsStars /> {t("about.contact.eyebrow")}
              </span>

              <h3 className="contact-heading">{t("about.contact.title")}</h3>

              <p className="text-secondary mb-4">
                {t("about.contact.description")}
              </p>

              <SocialMedia
                github="https://github.com/dinhhoang0712"
                linkedin="https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-765750412"
                facebook="https://www.facebook.com/vu.inh.hoang.443763"
                email="vuhoang5053@gmail.com"
              />

              <div className="contact-pills">
                <a className="contact-pill" href="tel:+84343721388">
                  <FaPhone /> 84+ 343 721 388
                </a>

                <a
                  className="contact-pill"
                  href="mailto:vuhoang5053@gmail.com"
                >
                  <MdEmail /> vuhoang5053@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </Col>

        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Reveal delay={150}>
            <AnimationLottie
              width="50%"
              animationPath={JSON.parse(CONTACT_LOTTIE)}
            />
          </Reveal>
        </Col>
      </Row>

      <div className="mb-5"></div>
    </>
  );
};

export default About;
