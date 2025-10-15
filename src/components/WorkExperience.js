import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const WorkExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Experience</span>
      </div>

    </section>
  );
};
