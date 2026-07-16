import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

const HeroLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-left text-center text-md-start">
      <h3>
        {t("heroSection.hi")}{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        {t("heroSection.iAm")} &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <div className="hero-typewriter">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Backend Developer",
              "Java Spring Developer",
              "Microservices Enthusiast",
              "System Design Learner",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            wrapperClassName: "brand-green",
          }}
        />
      </div>

      <p className="hero-description mx-auto mx-md-0">
        {t("heroSection.description")}
      </p>

      <div className="mt-4 mt-md-6 mb-3 mb-md-5"></div>
      <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center justify-content-md-start">
        <ResizeButton
          href="https://github.com/dinhhoang0712"
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton
          href="https://drive.google.com/file/d/1WhMoPvGf_E3CIdSLTBewj-upTdB3Xp03/view?usp=sharing"
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
