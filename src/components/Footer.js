import "animate.css";
import "aos/dist/aos.css";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <span> Made with ❤️ by Yousuf Buhari </span>
      </div>
    </footer>
  );
};
