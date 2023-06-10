import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Trust from "../components/Trust";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Trust />
      <Projects />
    </Layout>
  );
}
