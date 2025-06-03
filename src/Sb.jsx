import React from "react";
import "./Sb.css";

function Sb() {
  return (
    <>
      <div className="nav">
        <div className="navLogo">
          <img src="src\assets\sb-engineers-logo.png" alt="" />
        </div>
        <div className="navContent">
          <a href="">Home</a>
          <a href="#company">Company</a>
          <a href="#service">Service</a>
          <a href="#project">Project Portfolio</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="navContact">
          <small>
            <i className="bi bi-telephone-fill"></i> +91-9787447307
          </small>
          <small>
            <i className="bi bi-envelope-fill"></i> admin@sbecc.in
          </small>
          <small>
            <i className="bi bi-geo-alt-fill"></i> 4th West Cross Road, Vellore
          </small>
        </div>
      </div>

      <section>
        <div className="heroBg">
          <img src="src\assets\hero.png" alt="" />
        </div>
        <div className="heroContent">
          <h1>
            Your Vision,
            <br />
            Our Expertise
          </h1>
          <p className="d-flex">
            <span className="check">
              <i className="bi bi-check2"></i>
            </span>{" "}
            Quality Control System, Satisfaction Guarantee
          </p>
          <p className="d-flex">
            <span className="check">
              <i className="bi bi-check2"></i>
            </span>{" "}
            Highly Profesional Staff, Accurate Testing
          </p>
          <p className="d-flex">
            <span className="check">
              <i className="bi bi-check2"></i>
            </span>{" "}
            Unrivalled, Professional and Qualified
          </p>
          <button className="heroButton d-flex">
            <div className="heroRightArrow">
              <i className="bi bi-arrow-right"></i>
            </div>
            Know More
          </button>
        </div>
        <div className="hero">
          <div className="leftArrow">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="rightArrow">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </section>

      <section>
        <div className="abt d-flex">
          <div className="abtPic">
            <img src="src\assets\sb-engineers-abt.png" alt="" />
            <div className="abtExp">
              <h1>10</h1>
              <p>Years Of Experience!</p>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="abtEngineer">
            <span>Ut enim minim quis nostrud exercitation ullamo</span>
            <h1>About SB Engineers</h1>
            <p>
              SB Engineers is a premier engineering design firm dedicated to
              delivering comprehensive solutions for a diverse range of
              structural projects. With a strong emphasis on excellence and
              innovation, we provide unparalleled engineering design services
              across various disciplines.
            </p>
            <div className="d-flex abtimg">
              <div className="d-flex">
                <img src="src\assets\sb-engineers-abt-1.png" alt="" />
                <small>Visionary Solutions Lasting Impact</small>
              </div>
              <div className="d-flex">
                <img src="src\assets\sb-engineers-abt-2.png" alt="" />
                <small>Accurate Processes Testing Guarantee</small>
              </div>
            </div>
            <p>
              Our unwavering commitment to high-quality design and strict
              adherence to industry standards guarantees to our clients.
            </p>
            <button className="heroButton d-flex">
              <div className="heroRightArrow">
                <i className="bi bi-arrow-right"></i>
              </div>
              More About Us
            </button>
          </div>
        </div>
      </section>

      <section id="company">
        <div className="d-flex">
          <div className="tsec">
            <h1>We Help You Build On Your Past And Prepare For The Future.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ipsa, necessitatibus iusto hic quibusdam enim quidem
              ullam expedita illum tempora?
            </p>
            <div className="d-flex iconbox">
              <div className="iconBox">
                <img src="src\assets\icon-1.png" alt="" />
                <span>Where Integrity Meets Excellence</span>
              </div>
              <div className="iconBox">
                <img src="src\assets\icon-2.png" alt="" />
                <span>Quality Control System</span>
              </div>
              <div className="iconBox">
                <img src="src\assets\icon-3.png" alt="" />
                <span>Collaborate For Success</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              enim ipsa est, ducimus amet excepturi.
            </p>
            <button className="d-flex">
              <div className="heroRightArrow">
                <i className="bi bi-arrow-right"></i>
              </div>
              Know More
            </button>
          </div>
          <div className="tsecImg">
            <img src="src\assets\3-section.png" alt="" />
          </div>
        </div>
      </section>

      <section id="service">
        <div className="fsec">
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <h1 className="text-center">Our Service Beyond Exceptations</h1>
          <div className="fcard d-flex">
            <div className="cardImg">
              <h1>Architectural Design</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit corrupti ad velit esse ipsam laborum!
              </p>
              <small className="d-flex gap-2">
                <div className="heroRightArrow">
                  <i className="bi bi-arrow-right"></i>
                </div>
                Read More
              </small>
              <img src="src\assets\img1.png" alt="" />
            </div>
            <div className="cardImg">
              <h1>Structural Engineering</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                beatae, aliquid aperiam at inventore nesciunt.
              </p>
              <small className="d-flex gap-2">
                <div className="heroRightArrow">
                  <i className="bi bi-arrow-right"></i>
                </div>
                Read More
              </small>
              <img src="src\assets\img2.png" alt="" />
            </div>
            <div className="cardImg">
              <h1>Steel & Rebar Detailing</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                deleniti error? Expedita culpa amet architecto!
              </p>
              <small className="d-flex gap-2">
                <div className="heroRightArrow">
                  <i className="bi bi-arrow-right"></i>
                </div>
                Read More
              </small>
              <img src="src\assets\img3.png" alt="" />
            </div>
          </div>
          <button className="d-flex">
            <div className="heroRightArrow">
              <i className="bi bi-arrow-right"></i>
            </div>
            View All
          </button>
        </div>
      </section>

      <section id="project">
        <div className="project">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut.</p>
          <h1>Explore Our Project</h1>
          <img src="src\assets\last.png" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            ullam.
          </p>
          <h1 className="text-dark">Clients Who Trust Us</h1>
          <img src="src\assets\client.png" alt="" />
        </div>
      </section>

      <section id="contact">
        <div className="d-flex banner">
          <div className="rel">
            <div className="bannerCard">
              <img src="src\assets\blogo.png" alt="" />
              <h1>Get Started With Us</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, porro eligendi ab minus asperiores dolor?
              </p>
              <button>Reach Us Know</button>
            </div>
          </div>
          <div className="ban">
            <div className="banlink">
              <h4>SB Engineers</h4>
              <p>
                SB Engineers is a premier engineering design firm dedicated to
                delivering comprehensive solutions for a diverse range of
                structural projects.
              </p>
            </div>
            <div className="banlink">
              <h4>Quick Links</h4>
              <div className="link">
                <a href="">Services</a>
                <a href="">Why SB Engineers</a>
                <a href="">Project</a>
                <a href="">About Us</a>
                <a href="">Get a Quote</a>
                <a href="">Careers</a>
              </div>
            </div>
            <div className="banlink">
              <h4>Quick Contact</h4>
              <div className="link">
                <a href="">
                  4th West Cross Road, Gandhi Nagar, Katpadi Vellore, Tamilnadu.
                </a>
                <a href="">
                  If you have any questions or need help. feel free to contact
                  with our team.
                </a>
                <a href="" className="fs-6">
                  <i className="bi bi-telephone-fill"></i> +91-9787447307
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>Copyright 2025 © SB Engineers. Concept by repute.</footer>
    </>
  );
}

export default Sb;
