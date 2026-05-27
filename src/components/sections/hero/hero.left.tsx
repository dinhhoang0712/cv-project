import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
interface IProps {
  scrollToExperienceSection: () => void;
}
const HeroLeft = (props: IProps) => {
  const { t } = useTranslation();
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handelDownloadCV = () => {
    openInNewTab(
      "https://drive.google.com/file/d/1Wv9uglvTU9oflierfuI3Ksuxzb5KLC5v/view?pli=1",
    );
  };
  return (
    <div className="hero-left">
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

      <p className="hero-description">
        Passionate about building scalable backend systems and RESTful APIs.
      </p>

      <div className="mt-md-6 mt-3 mb-md-5 mb-2"></div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={props.scrollToExperienceSection}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton
          onClick={handelDownloadCV}
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
