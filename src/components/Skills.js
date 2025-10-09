import icKotlin from "../assets/img/ic-kotlin.png";
import icJava from "../assets/img/ic-java.png";
import icAndroid from "../assets/img/ic-android-studio.png";
import icPostman from "../assets/img/ic-postman.png";
import icGit from "../assets/img/ic-git.png";
import icFirebase from "../assets/img/ic-firebase.png";
import icVsCode from "../assets/img/ic-vscode.png";
import icXML from "../assets/img/ic-xml.svg";
import icJetpack from "../assets/img/ic-jetpack.svg";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skills = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="skill" id="skills">
      <div class="spotlight-container" data-aos="fade-up">
        <span class="spotlight-heading">Skills</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="tech-stack-highlight" data-aos="fade-up">Tech Stack</span>
            <ul className="skill-box-wrapper">
              <li className="skill-box" data-aos="fade-up">
                <img src={icKotlin} alt="Kotlin" />
                <span className="tooltip">Kotlin</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icJava} alt="Java" />
                <span className="tooltip">Java</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icJetpack} alt="Jetpack" />
                <span className="tooltip">Compose</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icXML} alt="XML=" />
                <span className="tooltip">XML</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icAndroid} alt="AS" />
                <span className="tooltip">
                  <span className="tooltip-full">Android Studio</span>
                  <span className="tooltip-short">Android Studio</span>
                </span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icVsCode} alt="VS Code" />
                <span className="tooltip">VS Code</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icPostman} alt="Postman" />
                <span className="tooltip">Postman</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icGit} alt="GIT" />
                <span className="tooltip">GIT</span>
              </li>

              <li className="skill-box" data-aos="fade-up">
                <img src={icFirebase} alt="Firebase" />
                <span className="tooltip">Firebase</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
