import React from "react";
import Layout from "../components/Layout";
import { FaMailBulk, FaMobile } from "react-icons/fa";
const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article>
          <h2>Let's chat</h2>
          <h3>
            get in touch. <br />
            Tell us about your project.
          </h3>
          <p>Let's create something together</p>
          <p>
            <FaMailBulk /> info@opillis.co.ke
          </p>
          <p>
            <FaMobile /> +254 794 599 270
          </p>
        </article>
        <article className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control" />
              <input type="email" name="email" placeholder="email" className="form-control" />
              <textarea name="message" row="5" placeholder="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
