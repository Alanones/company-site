import React from "react";
import { FaCode, FaSketch } from "react-icons/fa";
import { SiWritedotas } from "react-icons/si";
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "software development",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "software design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <SiWritedotas className="service-icon" />,
    title: "content writing",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
];

export default services;
