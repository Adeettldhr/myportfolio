import { content } from "../Content";
import React from "react";
import kumaricapital from "../assets/images/Projects/kumaricapital.png";
import suyatra from "../assets/images/Projects/suyatra.png";
import ingskill from "../assets/images/Projects/ingskill.png";
import nschome from "../assets/images/Projects/nschome.png";

const projects = [
  {
    title: "Kumari Capital Limited",
    description:
      "A financial platform enabling users to manage SIPs, lump sum investments, and buy/sell mutual funds. Built with a secure and scalable architecture for a seamless investment experience.",
    imageUrl: kumaricapital, 
    projectUrl: "https://mutualfund.kumaricapital.com/",
    reverse: false,
  },
  {
    title: "Suyatra",
    description:
      "A hotel booking system designed for travelers to easily search, book, and manage stays. Features a responsive design and smooth user experience for hospitality services.",
    imageUrl: suyatra, 
    projectUrl: "https://suyatra.com.np/",
    reverse: true,
  },
  {
    title: "IngSkill",
    description:
      "An educational platform aimed at providing skill development resources and learning tools. Focused on interactive learning and easy access to training content.",
    imageUrl: ingskill, 
    projectUrl: "https://ingskill.com/", 
    reverse: false,
  },
  {
    title: "NSC Drive It Home",
    description:
      "A driving awareness and safety campaign platform, promoting responsible driving habits and offering resources for learners and drivers.",
    imageUrl: nschome, 
    projectUrl: "#",
    reverse: true,
  },
];

const ProjectCard = ({ title, description, imageUrl, reverse, projectUrl }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } my-12 gap-10`}
    >
      {/* Left: Image */}
      <div className="w-full  md:w-1/2">
        <img src={imageUrl} alt={title} className="shadow-lg  object-cover" />
      </div>

      {/* Right: Text content with top and bottom border */}
      <div className="w-full md:w-1/2 border-t border-b border-gray-300 flex items-center">
        <div className="p-4 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <p className="text-sm text-gray-600 mb-6">{description}</p>
          <a href={projectUrl} target="_blank"><button className="border px-4 py-2 text-sm hover:bg-dark_primary hover:text-white transition">
            View Project
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="projects">
      <h2 className="title " data-aos="fade-down">
        Projects
      </h2>{" "}
      <h4 className="subtitle mb-20" data-aos="fade-down">
       MY CREATION
      </h4>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Testimonials;
