import "animate.css";
import "aos/dist/aos.css";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <span className="footer-text">&#169; {currentYear} Yousuf Buhari K M</span>
        <span className="footer-divider" aria-hidden="true">•</span>
        <span className="footer-rights">All rights reserved.</span>
      </div>
    </footer>
  );
};