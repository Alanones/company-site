import React from "react";
import { FaCode, FaSketch } from "react-icons/fa";
import { SiWritedotas } from "react-icons/si";
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "software development",
    text: `Our expert team of software developers excels in crafting customized software solutions tailored to meet your unique business requirements. From ideation to implementation, we provide end-to-end development services, ensuring high-quality, scalable, and efficient software solutions that drive your business growth.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "software design",
    text: `Our design team brings creativity and innovation to every project, ensuring visually stunning and user-centric designs. Whether it's creating a captivating website interface, designing a compelling logo, or developing an engaging user experience (UX), we strive to enhance your brand identity and leave a lasting impression on your audience.`,
  },
  {
    id: 3,
    icon: <SiWritedotas className="service-icon" />,
    title: "content writing",
    text: `Compelling and well-crafted content is vital for engaging your audience and driving conversions. Our talented team of content writers delivers high-quality content that is tailored to your brand's voice and style. From website copy and blog posts to social media content and marketing materials, we provide persuasive and informative content that resonates with your target audience.`,
  },
];

export default services;
