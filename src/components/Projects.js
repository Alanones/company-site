import React from "react";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="section bg-grey" style={{marginTop:"32px"}}>
      <Title title="recent projects" />
      <div className="card-center">
        <div className="card-container">
          <div className="card">
            <div className="front-content">{/* <p>E-commerce site</p> */}</div>
            <div className="content">
              <p className="heading">E-commerce website</p>
              <p>
                An e-commerce web application with payment integrations, products filtering, categorization, and inventory management. 
              </p>
            </div>
          </div>
        </div>
        {/* Second card */}
        <div className="card-container">
          <div className="card">
            <div className="front-content">{/* <p>E-commerce site</p> */}</div>
            <div className="content">
              <p className="heading">Saving mobile app</p>
              <p>
                A cross-platform financial management application that allow users to track their savings and send money through M-Pesa.
              </p>
            </div>
          </div>
        </div>
        {/* Third card */}
        <div className="card-container">
          <div className="card">
            <div className="front-content">{/* <p>E-commerce site</p> */}</div>
            <div className="content">
              <p className="heading">Grocery app</p>
              <p>
                A grocery shopping web application that allow customers to shop for wide range of products. Payment gateways fully integrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
