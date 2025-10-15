import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="blob"></div>
          <NavBar />
          <Banner />
          <AboutMe />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;