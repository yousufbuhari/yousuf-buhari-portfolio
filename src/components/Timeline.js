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
        "• Built and maintained Android apps using Kotlin and Java.",
        "• Used MVVM and Room Database for clean and efficient data handling.",
        "• Added Firebase (Auth, FCM, Analytics, Crashlytics) for secure logins and tracking.",
        "• Designed simple, modern UIs with XML, Jetpack Compose and Material Design.",
        "• Developed location-based features using Ola Maps SDK.",
        "• Implemented additional integrations including PayU for payments and OCR for document scanning.",
        "• Ensured application reliability through testing with JUnit, Espresso, and AndroidX Test.",
        "• Improved performance, reduced crashes, and ensured smooth app experience on all Android versions.",
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
        "Kotlin Coroutines",
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
        "• Learned full-stack web development using Java, Spring Boot, and REST APIs.",
        "• Created responsive web pages with HTML, CSS, JavaScript.",
        "• Designed and managed MySQL databases for better data handling.",
        "• Worked on complete projects using CRUD operations and MVC pattern.",
        "• Deployed apps with Apache Tomcat and used Git/GitHub for version control.",
      ],
      icon: icCourse,
    },
    {
      date: "Aug 2019 - May 2023",
      title: "B.E Mechanical Engineering",
      company: "PSNACET, Dindigul",
      descriptions: [
        "• Completed Bachelor's in Mechanical Engineering, building analytical and problem-solving skills.",
        "• Worked on academic projects and practical assignments to apply engineering concepts.",
        "• Attended workshops and technical sessions to improve knowledge and skills.",
        "• Completed mini and main projects, gaining hands-on experience in design, analysis, and project execution.",
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
                <img src={item.icon} alt="Briefcase" />
              </div>

              <h3 className="timeline-title">{item.title}</h3>

              <div className="timeline-header">
                <h4 className="timeline-subtitle">{item.company}</h4>
                <h4 className="timeline-date">{item.date}</h4>
              </div>

              <div className="timeline-divider"></div>

              {item.descriptions.map((desc, i) => (
                <p key={i} className="timeline-description">
                  {desc}
                </p>
              ))}

              <div className="tech-tags">
                {item.tech?.map((tag, index) => (
                  <span key={index} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};