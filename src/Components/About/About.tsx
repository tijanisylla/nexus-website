import { FC, useState, useEffect } from "react";
import "./About.css";
import { teamList } from "../data/data";
import logo from "../assets/ai.png";
const About: FC = () => {
  // Create a carousel for the team members and their descriptions
  const [current, setCurrent] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const length = teamList.length; // 6

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrent((current) => (current === length - 1 ? 0 : current + 1));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [current, paused]);

  if (!Array.isArray(teamList) || teamList.length <= 0) {
    return null;
  }

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Us</h2>
      <span className="section__subtitle">
        Our story and what we do to help you achieve your financial goals.
      </span>

      <div className="about__container container grid">
        {/* About */}
        <div className="about__img__and__text--conainter">
          <div className="about__img--container">
            <div className="about__img">
              <img
                src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/5664377182cf5a4d89b672f8/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png"
                alt="img"
              />
            </div>
          </div>
          <div className="about__text--container">
            <div className="about__text">
              <p className="about__description">
                Welcome to{" "}
                <span className="about__subtitle__highlight">Nexus</span>, where
                we believe that everyone should have access to smart and
                efficient investment and wealth management tools. Our mission is
                to make this a reality through our cutting-edge AI virtual
                assistant app. At Nexus, we have a team of experts in finance,
                technology, and data science, who are dedicated to developing
                innovative solutions for our users. With their expertise, our AI
                virtual assistant will provide you with personalized investment
                portfolios, tax optimization strategies, and risk management
                tools that are tailored to your individual needs. We are
                committed to responsible and ethical investing, and our values
                reflect this commitment. Our team is always researching and
                implementing the latest sustainable investing strategies to help
                you achieve your financial goals while making a positive impact
                on the world. With Nexus, you can trust that you are in good
                hands. Our team is passionate about providing you with the best
                investment and wealth management experience possible, and we
                can't wait to help you take control of your financial future.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div
          className="about__card--content"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {teamList.map(({ id, name, position, description, image }) => {
            return (
              <>
                <div
                  className="about--card"
                  key={id}
                  style={{
                    transform: `translateX(${current * -100}%)`,
                    transition: "transform 1s ease-in-out",
                  }}
                >
                  <div className="about__image--content">
                    <span className="overlay" />
                    {/* Solial */}

                    <div className="card-image">
                      <img src={image} alt="img avatar" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2>{name}</h2>
                    <p className="about__card--position">{position}</p>
                    <p className="about__card--description">{description}</p>
                    <button className="about__btn--card">
                      View More <i className="bx bx-right-arrow-alt "></i>
                    </button>
                  </div>
                </div>
              </>

              // <div
              //   className="about--card"
              //   key={id}
              //   style={{
              //     transform: `translateX(${current * -100}%)`,
              //     transition: "transform 1s ease-in-out",
              //   }}
              // >
              //   <div className="about__image--content">
              //     <span className="overlay" />
              //     <div className="card-image">
              //       <img src={image} alt="" />
              //     </div>
              //   </div>
              //   <div className="card-content">
              //     <h2>{name}</h2>
              //     <p className="about__card--position">{position}</p>
              //     <p className="about__card--description">{description}</p>
              //     <button className="about__btn--card">
              //       View More <i className="bx bx-right-arrow-alt "></i>
              //     </button>
              //   </div>
              // </div>
            );
          })}
        </div>
        {/* Button */}
        <div className="about__btn--container">
          <button
            className="about__btn"
            onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          {/* Dotes */}
          <div className="about__dots--container">
            {teamList.map((_, index) => {
              return (
                <div
                  className={`about__dots ${
                    current === index ? "d-active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
          {/* Right Arrow */}
          <button
            className="about__btn"
            onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
          >
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>

        {/* Card */}
        {/* <div className="about__card--content">
          {teamList.map(({ id, name, position, description, image }) => {
            return (
              <div className="about--card" key={id}>
                <div className="about__image--content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img src={image} alt="" />
                  </div>
                </div>
                <div className="card-content">
                  <h2>{name}</h2>
                  <p className="about__card--position">{position}</p>
                  <p className="about__card--description">{description}</p>
                  <button className="about__btn--card">
                    View More <i className="bx bx-right-arrow-alt "></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default About;
