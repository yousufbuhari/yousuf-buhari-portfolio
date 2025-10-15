import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import letsConnectIcon from "../assets/img/ic-email.svg";

export const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="banner" id="home">
      <div>
        <h1 data-aos="fade-up"> {`Hello(); I'm`} </h1>
        <h1 id="name" data-aos="fade-up">
          Yousuf Buhari
        </h1>
        <h1 className="banner-heading" data-aos="fade-up">
          I design & code for Android.
        </h1>

        <a
          href="#connect"
          className="connect-button flex flex-col items-center gap-1 w-full max-w-xs mx-auto"
          data-aos="fade-up"
        >
          <span className="text-center">Let's Connect !</span>
          <svg
            viewBox="0 0 333 16"
            className="w-full h-1.5 sm:h-4"
            style={{ display: "block" }}
          >
            <defs>
              <linearGradient
                id="letsconnect-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#aa367c" />
                <stop offset="100%" stopColor="#4a2fbd" />
              </linearGradient>
            </defs>
            <path
              fill="url(#letsconnect-gradient)"
              d="M321.168 12.5539C284.212 11.8871 247.278 10.9345 210.323 10.5943C156.589 10.1043 102.813 9.45113 49.2252 13.0847C38.3658 13.8196 27.5065 14.5001 16.6679 15.2622C8.16388 15.8474 2.8697 13.9829 1.05633 9.65532C-0.465227 6.02176 2.7654 2.81003 8.39309 3.50409C27.8816 5.88564 46.9116 2.38818 66.1708 2.07517C102.292 1.47638 138.414 0.727848 174.556 0.496497C200.944 0.33319 227.373 0.74147 253.76 1.19056C275.583 1.57161 297.385 2.38811 319.208 3.02773C320.48 3.06855 321.835 3.09582 322.981 3.42244C327.483 4.71528 334.32 5.45012 332.715 9.58721C331.944 11.5605 325.816 12.6629 322.106 14.1462C321.793 13.6155 321.501 13.0847 321.188 12.5539H321.168Z"
              strokeWidth="2"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
