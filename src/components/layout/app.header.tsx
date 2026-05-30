import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";

import viFlag from "assets/svg/language/vi.svg";
import enFlag from "assets/svg/language/en.svg";

import "./header.scss";
import SocialMedia from "../sections/social.media";

type ThemeContextType = "light" | "dark";

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();

  const { t, i18n } = useTranslation();

  const handleMode = (mode: ThemeContextType) => {
    localStorage.setItem("theme", mode);

    document.documentElement.setAttribute("data-bs-theme", mode);

    setTheme(mode);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "vi" : "en");
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        {/* LOGO */}
        <a className="navbar-brand brand-logo" href="/">
          <span className="brand-green">{t("appHeader.brand")}</span>
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-inner">
            {/* CENTER NAV */}
            <Nav className="mx-auto nav-links">
              <a href="/" className="nav-item-link">
                {i18n.resolvedLanguage === "en" ? "Home" : "Trang chủ"}
              </a>

              <a href="#skills" className="nav-item-link">
                {i18n.resolvedLanguage === "en" ? "Skills" : "Kỹ năng"}
              </a>

              <a href="#projects" className="nav-item-link">
                {i18n.resolvedLanguage === "en" ? "Projects" : "Dự án"}
              </a>

              <a href="#about" className="nav-item-link">
                {i18n.resolvedLanguage === "en" ? "About" : "Giới thiệu"}
              </a>
            </Nav>

            {/* RIGHT ACTIONS */}
            <div className="header-actions">
              <SocialMedia
                github="https://github.com/dinhhoang0712"
                linkedin="https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-765750412"
                facebook="https://www.facebook.com/vu.inh.hoang.443763"
                email="vuhoang5053@gmail.com"
              />

              <button
                className="icon-btn"
                onClick={() => handleMode(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <MdOutlineLightMode size={18} />
                ) : (
                  <MdNightlight size={18} />
                )}
              </button>

              <button className="lang-btn" onClick={toggleLanguage}>
                <img
                  src={i18n.resolvedLanguage === "en" ? enFlag : viFlag}
                  alt="language"
                />

                <span>{i18n.resolvedLanguage === "en" ? "EN" : "VI"}</span>
              </button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
