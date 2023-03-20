import { FC, useEffect, useState, LegacyRef } from "react";
import { servicesList } from "../data/data";
import "./Services.css";

const Services: FC = () => {
  return (
    <section className={`services section `} id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Our services</span>
      <div className="services_container grid">
        <div className="services__content grid">
          {servicesList.map(({ id, title, icon, description }) => {
            return (
              <div className="services-card" key={id}>
                <div className="content">
                  <div className="icon">
                    <i className={icon} />
                  </div>
                  <div className="title">{title}</div>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
