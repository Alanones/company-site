import React from "react";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="section bg-grey">
      <Title title="recent projects" />
      <div className="card-center">
        <div className="card-container">
          <div className="card">
            <div className="front-content">{/* <p>E-commerce site</p> */}</div>
            <div className="content">
              <p className="heading">E-commerce website</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione
                adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.
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
                Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione
                adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.
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
                Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione
                adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
