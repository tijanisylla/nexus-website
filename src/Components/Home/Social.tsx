import { FC } from "react";

const Social: FC = () => {
  return (
    <div className="home__social">
      <a
        href="/#"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="/#"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-facebook"></i>
      </a>

      <a
        href="/#"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram-alt"></i>
      </a>
      <a
        href="/#"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-twitter"></i>
      </a>
    </div>
  );
};

export default Social;
