// import images
import Hero_person from "./assets/images/Hero/person.webp";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import suyatra from "./assets/images/Projects/suyatra.png";
import paisalabs from "./assets/images/Projects/paisalabs.png";
import matrixmutual from "./assets/images/Projects/image.png";
import person_project1 from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front end Web Developer",
    firstName: "ADEET",
    LastName: "TULADHAR",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Creates Front end app",
        logo: reactjs,
      },
      {
        name: "React Native",
        para: "Creates mobile app",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Create backend / server",
        logo: nodejs,
      },
      {
        name: "Figma",
        para: "Creates design",
        logo: figma,
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I specialize in creating responsive, modern, and high-performance websites using the latest web technologies, ensuring an optimized user experience across devices.",
        logo: services_logo1,
      },
      {
        title: "UI/UX Design",
        para: "I design intuitive and visually appealing user interfaces, focusing on delivering a seamless and enjoyable user experience that balances aesthetics with functionality.",
        logo: services_logo2,
      },
      {
        title: "React Native Development",
        para: "I build cross-platform mobile applications using React Native, delivering native-like experiences for both iOS and Android with a single codebase.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project1,
    project_content: [
      {
        title: "Suyatra",
        image: suyatra,
      },
      {
        title: "Paisalabs",
        image: paisalabs,
      },
      {
        title: "Matrix Mutual",
        image: matrixmutual,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a skilled developer to bring your ideas to life? I offer expertise in web and mobile development, delivering high-quality solutions tailored to your business needs. Let's collaborate to create something amazing!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "adeettuldhr5@gmail.com",
        icon: GrMail,
        link: "mailto:adeettuldhr5@gmail.com",
      },
      {
        text: "+977 9843641587",
        icon: MdCall,
        link: "https://wa.me/9843641587",
      },
      {
        text: "github",
        icon: BsGithub,
        link: "https://github.com/Adeettldhr",
      },
      {
        text: "linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/adeet-tuladhar-6934b1211/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
