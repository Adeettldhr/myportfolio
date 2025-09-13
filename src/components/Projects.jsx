import { content } from "../Content";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Projects = () => {
  const { ExperienceData:experienceData } = content;
  return (
    <section id="services" className=" bg-bg_light_primary">
      <div className="md:container px-5 py-14 ">
        <h2 className="title " data-aos="fade-down">
          Experience
        </h2>
        <h4 className="subtitle mb-20" data-aos="fade-down">
          Where I've Worked
        </h4>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-green-500"></div>

        <div className="space-y-16">
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                {isLeft && (
                  <div className="w-full md:w-5/12 text-right md:pr-8">
  <div className="flex justify-center items-center">
    {/* Image - 25% width */}
    <div className="w-1/4 flex justify-center">
      <img
        src={exp.image}
        alt={exp.project}
        className="w-full h-full"
      />
    </div>

    {/* Text info - 75% width */}
    <div className="w-3/4 text-left ml-4 ">
      <p className="text-green-600 font-bold text-sm">{exp.year}</p>
      <h3 className="text-xl font-semibold text-teal-700 italic">{exp.project}</h3>
      <p className="italic text-sm text-teal-600">{exp.jobTitle}</p>
      
    </div>
  </div>
  <p className="mt-2 text-gray-600 text-left">{exp.description}</p>
</div>

                  
                )}

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Right Content */}
                {!isLeft && (
                 <div className="w-full md:w-5/12 text-left md:pl-8 md:ml-auto">
                 <div className="flex justify-center items-center">
                   {/* Image - 25% width */}
                   <div className="w-1/4 flex justify-center">
                     <img
                       src={exp.image}
                       alt={exp.project}
                       className="w-full h-full"
                     />
                   </div>
               
                   {/* Text info - 75% width */}
                   <div className="w-3/4 ml-4">
                     <p className="text-green-600 font-bold text-sm">{exp.year}</p>
                     <h3 className="text-xl font-semibold text-teal-700 italic">{exp.project}</h3>
                     <p className="italic text-sm text-teal-600">{exp.jobTitle}</p>      
                   </div>
                 </div>
                 <p className="mt-2 text-gray-600 text-left">{exp.description}</p>
               </div>
               
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>

  );
};

export default Projects;
