import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { Timeline } from "./components/Timeline";
import { Background } from "./components/Background";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* To have the starry background */}
      {/* <Background /> */}

      <div className="blob"></div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={{ position: "relative", zIndex: 1 }}>
            <NavBar />
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
