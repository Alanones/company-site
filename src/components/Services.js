import React from "react";
import Title from "./Title";
import services from "../constants/services";
import { Link } from "gatsby";
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to="/services" className="btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default Services;
