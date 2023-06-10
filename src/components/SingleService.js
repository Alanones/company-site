import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const SingleService = ({ description, linkedin, facebook, title, stack, index, image }) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={facebook}>
            <FaFacebook className="project-icon" />
          </a>
          <a href={linkedin}>
            <FaLinkedinIn className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default SingleService;
