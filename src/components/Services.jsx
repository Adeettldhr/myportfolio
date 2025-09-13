import { content } from "../Content";
import { createElement, useState } from "react";

const Services = () => {
  const { services } = content;
  const { skills } = content;


  return (
    <section id="skills" >
      <div className="bg-bg_light_primary">
      <div className="md:container px-5 py-14 ">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-7 justify-center">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="min-w-[14rem] duration-300 cursor-pointer bg-white border border-slate-200 rounded-xl text-center  p-10 flex-1 transform hover:scale-110 hover:shadow-2xl hover:border-primary hover:bg-bg_light_primary transition-all ease-in-out"
            >
              <div className="hover:scale-105 transition-all ease-in-out">
              <img src={content.logo} alt="..." className="mx-auto w-12 h-12" />
              <h6 className="my-3 font-semibold text-lg text-dark_primary">
                {content.title}
              </h6>
              <p className="leading-7 text-sm text-slate-600">{content.para}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      <div className="min-h-fit " >
      
      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div

                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
