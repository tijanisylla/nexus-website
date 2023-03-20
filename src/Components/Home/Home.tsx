import { FC } from "react";
import "./Home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home: FC = () => {
  return (
    <section className="home section" id="home">
      <Social />
      <div className="home__container container">
        <div className="home__content">
          {/* <div className="home__img">
            <div className="home__img--inner"></div>
          </div> */}

          {/* <ScrollDown /> */}
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
