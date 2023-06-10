import React from "react";
import Title from "./Title";
import Service from "./SingleService";
const AllServices = ({ title, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Service key={project.id} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default AllServices;
