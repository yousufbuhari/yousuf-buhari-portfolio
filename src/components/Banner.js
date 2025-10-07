import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Banner = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <section className="banner" id="home">
      <div>
        <h1 data-aos="fade-up"> {`Hello(); I'm`} </h1>
        <h1 id="name" data-aos="fade-up">Yousuf Buhari</h1>
        <h1 className="banner-heading" data-aos="fade-up">I design & code for Android.</h1>
      </div>
    </section>
  );
};
