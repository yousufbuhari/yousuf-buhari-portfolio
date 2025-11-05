import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icBriefcase from "../assets/img/ic-briefcase.svg";
import icCourse from "../assets/img/ic-course.svg";
import icCollege from "../assets/img/ic-college.svg";

export const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const timelineData = [
    {
      date: "Feb 2024 - Present",
      title: "Android Developer",
      company: "Milespeak Technologies Pvt. Ltd., Chennai",
      descriptions: [
        `Developed and managed Android apps using <strong>Kotlin</strong> and <strong>Java</strong>.`,
        `Designed modern UIs with <strong>XML</strong>, <strong>Jetpack Compose</strong> and <strong>Material Design</strong>.`,
        `Built scalable <strong>MVVM</strong> architectures with <strong>Room Database</strong> for efficient data handling.`,
        `Integrated <strong>RESTful APIs</strong> for secure and seamless backend communication.`,
        `Added <strong>Firebase</strong> features like authentication, analytics, crashlytics, push notifications, and social logins.`,
        `Implemented location features with <strong>Ola Maps SDK</strong>, along with <strong>PayU</strong> for payments and <strong>OCR</strong> for document scanning.`,
        `Improved app performance and compatibility across Android versions, reducing crash rates and improving stability.`,
      ],
      icon: icBriefcase,
      tech: [
        "Kotlin",
        "Java",
        "XML",
        "Jetpack Compose",
        "MVVM",
        "Retrofit",
        "Room",
        "Firebase",
        "JUnit",
        "Espresso",
      ],
    },
    {
      date: "July 2023 - Feb 2024",
      title: "Java Full Stack Web Development",
      company: "Qspiders, Chennai",
      descriptions: [
        `Learned full-stack web development using <strong>Java</strong>.`,
        `Created responsive web pages with <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>.`,
        `Designed and managed <strong>SQL</strong> databases for better data handling.`,
        `Worked on projects using CRUD operations and the MVC pattern.`,
        `Deployed apps with <strong>Apache Tomcat</strong> and used <strong>GitHub</strong> for version control.`,
      ],
      tech: [
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "JSP",
        "Servlets",
        "Apache Tomcat",
        "Maven",
        "Git",
        "GitHub",
      ],
      icon: icCourse,
    },
    {
      date: "Aug 2019 - May 2023",
      title: "B.E Mechanical Engineering",
      company: "PSNACET, Dindigul",
      descriptions: [
        `Completed Bachelor's in <strong>Mechanical Engineering</strong>, building analytical and problem-solving skills.`,
        `Worked on academic projects and assignments to apply engineering concepts.`,
        `Attended workshops and technical sessions to improve knowledge and skills.`,
        `Completed mini and main projects, gaining hands-on experience in design, analysis, and project execution.`,
      ],
      icon: icCollege,
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Timeline</span>
      </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-card">
              <div className="timeline-icon">
                <img src={item.icon} alt="icon" />
              </div>

              <h3 className="timeline-title">{item.title}</h3>

              <div className="timeline-header">
                <h4 className="timeline-subtitle">{item.company}</h4>
                <h4 className="timeline-date">{item.date}</h4>
              </div>

              <div className="timeline-divider"></div>

              {item.descriptions.map((desc, i) => (
                <p
                  key={i}
                  className="timeline-description"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              ))}

              {item.tech && (
                <div className="tech-tags">
                  {item.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
