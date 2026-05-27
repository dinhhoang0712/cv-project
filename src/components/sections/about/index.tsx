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
import { FaPhone } from "react-icons/fa";
import "./about.scss";
import { MdEmail } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* INTRO */}
      <Row>
        <h3 className="text-center mb-md-5 mb-3 brand-red">
          {t("about.title")}
        </h3>
        <Col md={6} xs={12}>
          <p className="text-center mb-4 text-secondary">
            {t("about.subtitle")}
          </p>

          <div className="about-content">
            <p>{t("about.intro.p1")}</p>
            <p>{t("about.intro.p2")}</p>
            <p>{t("about.intro.p3")}</p>
            <p>{t("about.intro.p4")}</p>
            <p>{t("about.intro.p5")}</p>
          </div>

          {/* INTERESTS */}
          <div className="mt-4">
            <h5 className="brand-red mb-3">{t("about.interests.title")}</h5>

            <ul>
              {(
                t("about.interests.items", {
                  returnObjects: true,
                }) as string[]
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CURRENT FOCUS */}
          <div className="mt-4">
            <h5 className="brand-red mb-3">{t("about.currentFocus.title")}</h5>

            <ul>
              {(
                t("about.currentFocus.items", {
                  returnObjects: true,
                }) as string[]
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CAREER GOAL */}
          <div className="mt-4">
            <h5 className="brand-red mb-3">{t("about.careerGoal.title")}</h5>

            <p>{t("about.careerGoal.description")}</p>
          </div>

          {/* FUN FACT */}
          <div className="mt-4">
            <h5 className="brand-red mb-3">{t("about.funFact.title")}</h5>

            <p>{t("about.funFact.description")}</p>
          </div>

          {/* QUOTE */}
          <div className="mt-4">
            <p className="text-center brand-red fst-italic">
              "{t("about.quote.text")}"
            </p>

            <p className="text-center brand-red">— {t("about.quote.author")}</p>
          </div>
        </Col>

        {/* ANIMATION */}
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center gap-4"
        >
          <AnimationLottie
            width="80%"
            animationPath={JSON.parse(JSON.stringify(codingJSON))}
          />

          <AnimationLottie
            animationPath={JSON.parse(JSON.stringify(experienceJSON))}
          />
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

                      <p className="company">{t("about.education.school")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Col>
      </Row>

      <Divider />

      {/* CONTACT */}
      <Row>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <h3 className="mb-md-3 mb-2">{t("about.contact.title")}</h3>
          <p className="text-secondary mb-4">
            {t("about.contact.description")}
          </p>
          <SocialMedia
            github="https://github.com/dinhhoang0712"
            linkedin=""
            facebook="https://www.facebook.com/vu.inh.hoang.443763"
            email="vuhoang5053@gmail.com"
          />
          <div className="contact-phone">
            <FaPhone className="me-2" />
            <span>0343721388</span>
          </div>

          <div className="contact-phone">
            <MdEmail className="me-2" />
            <span>vuhoang5053@gmail.com</span>
          </div>
        </Col>

        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />

          <h4 className="text-center mt-2">{t("about.contact.title")}</h4>
        </Col>
      </Row>

      <div className="mb-5"></div>
    </>
  );
};

export default About;
