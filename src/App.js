import { Fragment, useState, useEffect } from "react";

import "./assets/css/style.css";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`08/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  console.log(timeLeft);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Fragment>
      <body>
        <header id="header" className=" d-flex align-items-center">
          <div className="container d-flex flex-column align-items-center">
            <h1>Market Yeti</h1>
            <h2>
              We're working hard on bringing an innovative solution to all
              traders and will be launching on August 1st, 2021.
            </h2>
            <div className="countdown d-flex justify-content-center">
              <div>
                <h3>{days}</h3>
                <h4>Days</h4>
              </div>
              <div>
                <h3>{hours}</h3>
                <h4>Hours</h4>
              </div>
              <div>
                <h3>{minutes}</h3>
                <h4>Minutes</h4>
              </div>
              <div>
                <h3>{seconds}</h3>
                <h4>Seconds</h4>
              </div>
            </div>
            <div className="subscribe">
              <h4>Subscribe now to get the latest updates!</h4>
              <form method="post" role="form">
                <div className="subscribe-form">
                  <input type="email" name="email" required />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>

            <div className="social-links text-center">
              <a
                target="_blank"
                href="https://twitter.com/MarketYetiNews"
                className="twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/marketyeti"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </header>

        <main id="main">
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About Us</h2>
                <p>
                  Illo velit quae dolorem voluptate pireda notila set. Corrupti
                  voluptatum tempora iste ratione deleniti corrupti nostrum ut
                </p>
              </div>

              <div className="row mt-2">
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box">
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Contact Us</h2>
              </div>

              <div className="row">
                <div className="col-lg-12 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>

                    <div className="email">
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>support@marketyeti.com</p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386733.09012575535!2d-112.20066948817527!3d40.77626912917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1623717393216!5m2!1sen!2sus"
                      frameborder="0"
                      style={{ border: "0", width: "100%", height: "290px" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </Fragment>
  );
}

export default App;
