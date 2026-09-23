// Project showcase — real client work (restored so the live site keeps this section)
import kumaricapital from "../assets/images/Projects/kumaricapital.png";
import kumaricapitalApp from "../assets/images/Projects/kumaricapital-app.jpg";
import suyatra from "../assets/images/Projects/suyatra.png";
import ingskill from "../assets/images/Projects/ingskill.png";
import nschome from "../assets/images/Projects/nschome.png";

const projects = [
  {
    title: "Kumari Capital Limited",
    description:
      "A financial platform enabling users to manage SIPs, lump sum investments, and buy/sell mutual funds. Built with a secure and scalable architecture for a seamless investment experience.",
    image: kumaricapital,
    link: "https://kumaricapital.com",
  },
  {
    title: "Kumari Capital App",
    description:
      "The official Kumari Capital mobile app on Google Play — invest in mutual funds, manage SIPs, and build long-term wealth with research-backed investment solutions, right from your phone.",
    image: kumaricapitalApp,
    link: "https://play.google.com/store/apps/details?id=com.kumaricapital&hl=en",
  },
  {
    title: "Suyatra",
    description:
      "A hotel booking system designed for travelers to easily search, book, and manage stays. Features a responsive design and smooth user experience for hospitality services.",
    image: suyatra,
  },
  {
    title: "IngSkill",
    description:
      "An educational platform aimed at providing skill development resources and learning tools. Focused on interactive learning and easy access to training content.",
    image: ingskill,
  },
  {
    title: "NSC Drive It Home",
    description:
      "A driving awareness and safety campaign platform, promoting responsible driving habits and offering resources for learners and drivers.",
    image: nschome,
  },
];

const Showcase = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          Projects
        </h2>
        <h4 className="subtitle mb-20" data-aos="fade-down">
          MY CREATION
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => {
            const Card = project.link ? "a" : "div";
            const linkProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Card
                key={i}
                {...linkProps}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className={`rounded-xl border border-slate-200 overflow-hidden bg-bg_light_primary hover:shadow-2xl transition-all duration-300 block ${
                  project.link ? "cursor-pointer" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-6">
                    {project.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
