import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import appLogo1 from "../assets/img/ic-jusride.png";
import appLogo2 from "../assets/img/ic-ems.png";

export const Projects = () => {
  const [expandedMeta, setExpandedMeta] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMetaExpansion = (projectId, metaIndex) => {
    const key = `${projectId}-${metaIndex}`;
    setExpandedMeta(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleMetaItemClick = (projectId, metaIndex, metaValue) => {
    toggleMetaExpansion(projectId, metaIndex);
    
    const element = document.querySelector(`[data-project="${projectId}"][data-meta="${metaIndex}"]`);
    if (element) {
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
        element.style.transform = '';
      }, 150);
    }
  };

  return (
    <section className="project" id="projects">
      <div className="spotlight-container" data-aos="fade-up">
        <span className="spotlight-heading">Projects</span>
      </div>

      <div className="project-wrapper">
        <div className="project-card" data-aos="fade-up">
          <div className="project-content" data-aos="fade-up">
            <img
              src={appLogo1}
              alt="Contact"
              className="project-logo1"
            />

            <h3 className="project-title" data-aos="fade-up">
              JusRide - A Ride Companion for Cyclists
            </h3>

            <p className="project-description" data-aos="fade-up">
              JusRide is a community app for cyclists to create/join rides, form
              groups, and share posts with ride stats (distance, elevation,
              speed). It also offers cycle service booking and a social layer to
              follow, interact, and connect with riders — making it a complete
              cycling community platform.
            </p>
            <div className="project-meta" data-aos="fade-up">
              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="0"
                onClick={() => handleMetaItemClick('jusride', 0, 'Kotlin | Java')}
                onMouseEnter={() => setHoveredItem('jusride-0')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Languages</span>
                <span className="meta-value">Kotlin | Java</span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="1"
                onClick={() => handleMetaItemClick('jusride', 1, 'MVVM')}
                onMouseEnter={() => setHoveredItem('jusride-1')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Architecture</span>
                <span className="meta-value">MVVM</span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="2"
                onClick={() => handleMetaItemClick('jusride', 2, 'JUnit | Espresso | AndroidX Test')}
                onMouseEnter={() => setHoveredItem('jusride-2')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Testing</span>
                <span className="meta-value">
                  JUnit | Espresso | AndroidX Test
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="3"
                onClick={() => handleMetaItemClick('jusride', 3, 'Retrofit | RxJava | Gson | Glide | ExoPlayer | Room')}
                onMouseEnter={() => setHoveredItem('jusride-3')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Core Libraries</span>
                <span className="meta-value">
                  Retrofit | RxJava | Gson | Glide | ExoPlayer | Room
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="4"
                onClick={() => handleMetaItemClick('jusride', 4, 'Auth | Analytics | Crashlytics | FCM')}
                onMouseEnter={() => setHoveredItem('jusride-4')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Firebase Services</span>
                <span className="meta-value">
                  Auth | Analytics | Crashlytics | FCM
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="5"
                onClick={() => handleMetaItemClick('jusride', 5, 'XML | Material Design | Data Binding | Navigation Component')}
                onMouseEnter={() => setHoveredItem('jusride-5')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">UI/UX</span>
                <span className="meta-value">
                  XML | Material Design | Data Binding | Navigation Component
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="6"
                onClick={() => handleMetaItemClick('jusride', 6, 'Google Maps SDK | OlaMap SDK')}
                onMouseEnter={() => setHoveredItem('jusride-6')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Maps & Location</span>
                <span className="meta-value">Google Maps SDK | OlaMap SDK</span>
              </div>

              <div 
                className="meta-item"
                data-project="jusride"
                data-meta="7"
                onClick={() => handleMetaItemClick('jusride', 7, 'PayU | Google Sign-In | Facebook SDK | ML Kit OCR')}
                onMouseEnter={() => setHoveredItem('jusride-7')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Integrations</span>
                <span className="meta-value">
                  PayU | Google Sign-In | Facebook SDK | ML Kit OCR
                </span>
              </div>
            </div>

            <div className="view-btn-wrapper" data-aos="fade-up">
              <button
                className="view-btn"
                onClick={() => console.log("View in projects")}
              >
                <div className="sign">
                  <svg viewBox="0 0 120 100" width="120" height="100">
                    <path
                      d="M15 50 H85 L65 30 M85 50 L65 70"
                      stroke="white"
                      stroke-width="12"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text">View in Playstore</div>
              </button>
            </div>
          </div>
        </div>

        <div className="project-card" data-aos="fade-up">
          <div className="project-content" data-aos="fade-up">
            <img
              src={appLogo2}
              alt="Contact"
              className="project-logo2"
            />

            <h3 className="project-title" data-aos="fade-up">
              Employee Management System
            </h3>

            <p className="project-description" data-aos="fade-up">
              Leave management App is an employee leave and timesheet management
              app with secure login/OTP flows, leave requests and status
              tracking, timesheet submission. It is a demo project developed to
              validate the core functionalities and workflows before
              implementing a real-time, full-scale project.
            </p>
            <div className="project-meta" data-aos="fade-up">
              <div 
                className="meta-item"
                data-project="ems"
                data-meta="0"
                onClick={() => handleMetaItemClick('ems', 0, 'Kotlin | Java')}
                onMouseEnter={() => setHoveredItem('ems-0')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Languages</span>
                <span className="meta-value">Kotlin | Java</span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="1"
                onClick={() => handleMetaItemClick('ems', 1, 'MVVM')}
                onMouseEnter={() => setHoveredItem('ems-1')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Architecture</span>
                <span className="meta-value">MVVM</span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="2"
                onClick={() => handleMetaItemClick('ems', 2, 'JUnit | Espresso | AndroidX Test')}
                onMouseEnter={() => setHoveredItem('ems-2')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Testing</span>
                <span className="meta-value">
                  JUnit | Espresso | AndroidX Test
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="3"
                onClick={() => handleMetaItemClick('ems', 3, 'Retrofit | Gson | Kotlin Coroutines | Room | Coil | Media3')}
                onMouseEnter={() => setHoveredItem('ems-3')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Core Libraries</span>
                <span className="meta-value">
                  Retrofit | Gson | Kotlin Coroutines | Room | Coil | Media3
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="4"
                onClick={() => handleMetaItemClick('ems', 4, 'Analytics | FCM')}
                onMouseEnter={() => setHoveredItem('ems-4')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Firebase Services</span>
                <span className="meta-value">Analytics | FCM</span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="5"
                onClick={() => handleMetaItemClick('ems', 5, 'Jetpack Compose | Material 3 | Navigation Compose')}
                onMouseEnter={() => setHoveredItem('ems-5')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">UI/UX</span>
                <span className="meta-value">
                  Jetpack Compose | Material 3 | Navigation Compose
                </span>
              </div>

              <div 
                className="meta-item"
                data-project="ems"
                data-meta="6"
                onClick={() => handleMetaItemClick('ems', 6, 'Google Maps SDK')}
                onMouseEnter={() => setHoveredItem('ems-6')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="meta-label">Maps & Location</span>
                <span className="meta-value">Google Maps SDK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};