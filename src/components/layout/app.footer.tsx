import SocialMedia from "components/sections/social.media";
import Reveal from "components/share/reveal";
import "./footer.scss";

const FOOTER_TECH = ["Java", "Spring Boot", "React", "TypeScript", "Docker"];

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <Reveal>
          {/* LOGO / NAME */}
          <h4 className="footer-logo">
            Vũ Đình <span>Hoàng</span>
          </h4>

          {/* DESCRIPTION */}
          <p className="footer-description">
            Third-year IT Student at HUS-VNU • Backend Developer • Passionate
            about scalable systems and modern software engineering
          </p>

          {/* SOCIAL */}
          <div className="footer-social">
            <SocialMedia
              github="https://github.com/dinhhoang0712"
              linkedin="https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-765750412"
              facebook="https://www.facebook.com/vu.inh.hoang.443763"
              email="vuhoang5053@gmail.com"
            />
          </div>

          {/* TECH */}
          <div className="footer-tech">
            {FOOTER_TECH.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {/* LINE */}
          <div className="footer-line"></div>

          {/* COPYRIGHT */}
          <p className="footer-copy">
            © {new Date().getFullYear()} Vũ Đình Hoàng. Built with{" "}
            <span className="heart">♥</span> using React & TypeScript.
          </p>

          {/* EXTRA */}
          <p className="footer-bottom-text">
            Always learning, building, and improving 🚀
          </p>
        </Reveal>
      </div>
    </footer>
  );
};

export default AppFooter;
