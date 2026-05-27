import "./footer.scss";

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        {/* LOGO / NAME */}
        <h4 className="footer-logo">
          Vũ Đình <span>Hoàng</span>
        </h4>

        {/* DESCRIPTION */}
        <p className="footer-description">
          Third-year IT Student at HUS-VNU • Backend Developer • Passionate
          about scalable systems and modern software engineering
        </p>
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
      </div>
    </footer>
  );
};

export default AppFooter;
