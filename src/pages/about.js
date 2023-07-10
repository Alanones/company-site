import React from "react";
import Title from "../components/Title";
import about from "../../static/images/about.jpg";
import Layout from "../components/Layout";
const About = () => {
  const { title, info, stack } = data;
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={about} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;

const data = {
  title: "about us",
  info: "At our company, we offer a comprehensive suite of services to cater to your business needs and help you achieve your goals.",
  stack: [
    {
      id: 1,
      title: "Software development",
    },
    {
      id: 2,
      title: "Mobile applications development",
    },
    {
      id: 3,
      title: "Design",
    },
    {
      id: 4,
      title: "Content writing",
    },
    {
      id: 5,
      title: "Marketing",
    },
  ],
};
