import React, { useEffect } from "react";
import "./Scrollup.css";

const ScrollUp: React.FC = () => {
  // When the scroll is higher than 560 viewport height, add the show-scroll class to tag with the scroll-top class
  const scrollListener = (): void => {
    const scrollPosition = document.querySelector(".scrollup") as HTMLElement;
    if (window.scrollY >= 560) scrollPosition.classList.add("show-scroll");
    else scrollPosition.classList.remove("show-scroll");
  };

  useEffect((): void => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <a href="/#" style={{ cursor: "pointer" }} className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
