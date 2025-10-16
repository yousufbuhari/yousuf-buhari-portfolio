import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import appLogo1 from "../assets/img/ic-jusride.png";
import appLogo2 from "../assets/img/ic-ems.png";

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectsData = [
    {
      id: 1,
      logo: appLogo1,
      logoClass: "project-logo1",
      title: "JusRide - A Ride Companion for Cyclists",
      fullDescription:
        "JusRide is a community app for cyclists to create/join rides, form groups, and share posts with ride stats (distance, elevation, speed). It also offers cycle service booking and a social layer to follow, interact, and connect with riders — making it a complete cycling community platform.",
      techStack: [
        { label: "Languages", value: "Kotlin | Java" },
        {
          label: "UI/UX",
          value: "XML | Material Design | Data Binding | Navigation Component",
        },
        { label: "Architecture", value: "MVVM" },
        { label: "Testing", value: "JUnit | Espresso | AndroidX Test" },
        {
          label: "Core Libraries",
          value: "Retrofit | RxJava | Gson | Glide | ExoPlayer | Room",
        },
        {
          label: "Firebase Services",
          value: "Auth | Analytics | Crashlytics | FCM",
        },
        {
          label: "Integrations",
          value: "PayU | OlaMaps SDK | Google Sign-In | Facebook SDK | ML Kit OCR",
        },
      ],
    },
    {
      id: 2,
      logo: appLogo2,
      logoClass: "project-logo2",
      title: "Employee Management System",
      fullDescription:
        "Employee management App is an employee leave and timesheet management app with secure login/OTP flows, leave requests and status tracking, timesheet submission. It is a demo project developed to validate the core functionalities and workflows before implementing a real-time, full-scale project.",
      techStack: [
        { label: "Languages", value: "Kotlin | Java" },
        {
          label: "UI/UX",
          value: "Jetpack Compose | Material 3 | Navigation Compose",
        },
        { label: "Architecture", value: "MVVM" },
        { label: "Testing", value: "JUnit | Espresso | AndroidX Test" },
        {
          label: "Core Libraries",
          value: "Retrofit | Gson | Kotlin Coroutines | Room | Coil | Media3",
        },
        { label: "Firebase Services", value: "Analytics | FCM" },
      ],
    },
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section className="project" id="projects">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Projects</span>
      </div>

      <div className="project-wrapper">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="fade-up"
          >
            <div className="project-header">
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className={project.logoClass}
              />
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {expandedProject === project.id
                  ? project.fullDescription
                  : project.fullDescription}
              </p>
            </div>

            <button
              className="expand-btn"
              onClick={() => toggleExpand(project.id)}
            >
              {expandedProject === project.id ? "Hide Tech Stack" : "Show Tech Stack"}
            </button>

            {expandedProject === project.id && (
              <div className="project-details">
                <div className="tech-stack-section">
                  <div className="tech-stack-grid">
                    {project.techStack.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <span className="tech-label">{tech.label}</span>
                        <span className="tech-value">{tech.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
