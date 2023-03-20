import { FC } from "react";

const Data: FC = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Welcome </h1>

      <h3 className="home__subtitle">to Nexus</h3>

      <p className="home__description">
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
        lorem ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium
        ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada
        feugiat. Proin eget tortor risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <a href="/#" className="button button--flex">
        Learn more
        <i className="uil uil-arrow-right button__icon"></i>
      </a>

      <a href="/#" className="button2  button--flex">
        Get in touch
        <i className="uil uil-envelope button__icon"></i>
      </a>
    </div>
  );
};

export default Data;
