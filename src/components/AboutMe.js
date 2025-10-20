import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="about" id="aboutMe">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">About Me</span>
      </div>

      <div className="about-text-container" data-aos="fade-up">
        <div>
          <p>
            Hey there! I'm <strong>Yousuf Buhari K M</strong> — an Android
            developer who enjoys creating apps that are useful and fun to use.
          </p>

          <p>
            Funny enough, I started out with a{" "}
            <strong>B.E. in Mechanical Engineering</strong>, but somewhere along
            the way, I got hooked on coding. I took the leap, joined{" "}
            <strong>QSpiders</strong> for their{" "}
            <strong>Java Full Stack program</strong>, and that’s where my
            software journey really kicked off.
          </p>

          <p>
            I started learning <strong>Android development</strong> in 2024. Since then, I’ve
            enjoyed building apps that are easy to use, look good, and work
            well. I’m always learning new things to improve my skills and make
            better apps for users.
          </p>

          <p>
            I also explored <strong>Web development</strong> by building my
            portfolio with React and Bootstrap. It helped me learn responsive
            design, animations, and integrating tools like EmailJS, adding web
            skills alongside my Android experience.
          </p>
        </div>

        <div data-aos="fade-up">
          <button
            className="resume-btn"
            id="resume-btn"
            onClick={() => window.open("/yousuf-buhari-resume.pdf", "_blank")}
          >
            <div className="sign">
              <svg viewBox="0 0 640 512">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
              </svg>
            </div>
            <div className="text">Resume</div>
          </button>
        </div>
      </div>
    </section>
  );
};
