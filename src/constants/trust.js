import React from "react";
import { FiThumbsUp, FiClock } from "react-icons/fi";
import { BsXDiamond } from "react-icons/bs";
const trust = [
  {
    id: 1,
    icon: <FiThumbsUp className="trust-icon" />,
    title: "High quality services",
    text: `We are committed to delivering top-notch software solutions that meet and exceed our clients' expectations. Our team of experienced developers adheres to industry best practices and follows a rigorous quality assurance process to ensure that the software we deliver is robust, reliable, and scalable. We take pride in our attention to detail and strive for excellence in every project we undertake.`,
  },
  {
    id: 2,
    icon: <FiClock className="trust-icon" />,
    title: "Quick turnaround",
    text: `We value our clients' time and understand the importance of timely delivery. Our efficient project management practices and streamlined development processes enable us to provide quick turnaround times without compromising on quality. We work closely with our clients to establish clear project timelines and milestones, ensuring that projects are completed within the agreed-upon deadlines.`,
  },
  {
    id: 3,
    icon: <BsXDiamond className="trust-icon" />,
    title: "Professionalism",
    text: `Professionalism is at the core of our company culture. We approach every project with a high level of integrity, transparency, and respect. Our team maintains open lines of communication, actively listens to our clients' needs, and provides regular progress updates. We prioritize clear and concise documentation, accurate project estimations, and thorough testing to ensure a smooth development process.`,
  },
];

export default trust;
