import { useEffect, useState } from "react";
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

const SECTION_IDS = ["skills", "projects", "about", "contact"];

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();

  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMode = (mode: ThemeContextType) => {
    localStorage.setItem("theme", mode);

    document.documentElement.setAttribute("data-bs-theme", mode);

    setTheme(mode);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "vi" : "en");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        } else if (window.scrollY < (sections[0]?.offsetTop ?? Infinity) - 200) {
          setActiveSection("home");
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
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
              <a
                href="/"
                className={`nav-item-link ${activeSection === "home" ? "active" : ""}`}
              >
                {i18n.resolvedLanguage === "en" ? "Home" : "Trang chủ"}
              </a>

              <a
                href="#skills"
                className={`nav-item-link ${activeSection === "skills" ? "active" : ""}`}
              >
                {i18n.resolvedLanguage === "en" ? "Skills" : "Kỹ năng"}
              </a>

              <a
                href="#projects"
                className={`nav-item-link ${activeSection === "projects" ? "active" : ""}`}
              >
                {i18n.resolvedLanguage === "en" ? "Projects" : "Dự án"}
              </a>

              <a
                href="#about"
                className={`nav-item-link ${activeSection === "about" ? "active" : ""}`}
              >
                {i18n.resolvedLanguage === "en" ? "About" : "Giới thiệu"}
              </a>

              <a
                href="#contact"
                className={`nav-item-link ${activeSection === "contact" ? "active" : ""}`}
              >
                {i18n.resolvedLanguage === "en" ? "Contact" : "Liên hệ"}
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
