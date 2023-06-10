import React from "react";
import Services from "../components/AllServices";
import { services } from "../constants/allProjects";
import Layout from "../components/Layout";
const ProjectsPage = () => {
  return (
    <>
      <Layout>
        <section className="projects-page">
          <Services title="all services" projects={services} />
        </section>
      </Layout>
    </>
  );
};

export default ProjectsPage;
