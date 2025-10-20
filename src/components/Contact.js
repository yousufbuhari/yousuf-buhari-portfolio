import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import navIcon1 from "../assets/img/ic-linkedin.svg";
import navIcon2 from "../assets/img/ic-github.png";
import navIcon3 from "../assets/img/ic-email.svg";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleString(),
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formDetails,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setButtonText("Send");
          setSnackbar({
            open: true,
            message: "Something went wrong, please try again later.",
            severity: "error",
          });
        }
      );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <section className="contact" id="connect">
      <Container className="contact-content">
        <Row className="contact-container">
          <Col xs={12} lg={6} className="text-center mb-4 mb-lg-0">
            <div data-aos="fadr-right">
              <h2 className="get-in-touch-title" data-aos="fade-right">
                Let's <br /> Get In <br /> Touch.
              </h2>

              <div className="social-wrapper" data-aos="fade-right">
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/yousufbuhari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>

                  <a
                    href="https://github.com/yousufbuhari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon2} alt="GitHub" />
                  </a>

                  <a
                    href="mailto:iyousufbuhari@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon3} alt="Email" />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div>
              <form onSubmit={handleSubmit} data-aos="fade-left">
                <Row>
                  <Col xs={12} className="mb-2">
                    <input
                      type="text"
                      value={formDetails.name}
                      placeholder="Who am I talking to?"
                      onChange={(e) => onFormUpdate("name", e.target.value)}
                      required
                    />
                  </Col>

                  <Col xs={12} className="mb-2">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Where can I send a reply?"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>

                  <Col xs={12} className="mb-2">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="What’s on your mind?"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    ></textarea>
                  </Col>

                  <Col xs={12}>
                    <button type="submit" className="w-100">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          severity={snackbar.severity}
          variant="filled"
          sx={{
            fontFamily: "Centra, Arial, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </section>
  );
};