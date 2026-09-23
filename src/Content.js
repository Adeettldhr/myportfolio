// import images
import Hero_person from "./assets/images/Hero/person.webp";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import uxqode from "./assets/images/Logo/uxqode.jpeg";
import ingg from "./assets/images/Logo/ingg.jpeg";
import nextnepal from "./assets/images/Logo/nextnepal.jpeg";
import amnil from "./assets/images/Logo/amnil.jpeg";


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
    title: "Web and Mobile Developer",
    firstName: "ADEET",
    LastName: "TULADHAR",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experience in Web & Mobile Development",
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
  ExperienceData : [
    {
      year: "2024 - 2025",
      project: "Ux-Qode Pvt. Ltd",
      jobTitle: "Web and Mobile Developer",
      description: "Designed and developed responsive web and mobile applications, integrated secure payment gateways, optimized performance, and ensured cross-platform compatibility.",
      image: uxqode,
    },
    {
      year: "2023 - 2024",
      project: "Innovate Nepal Group",
      jobTitle: "Software Engineer",
      description: "Engineered scalable software solutions, built dynamic React-based applications with Tailwind CSS, collaborated in full-stack development, and optimized user experience.",
      image: ingg,
    },
    {
      year: "2022 - 2023",
      project: "NEXT NEPAL Pvt. Ltd.",
      jobTitle: "Frontend Developer",
      description: "Developed interactive content modules, built responsive admin dashboards, maintained code quality, and collaborated with designers to enhance UI/UX during internship.",
      image: nextnepal,
    },
    {
      year: "2021 - 2022",
      project: "Amnil Technologies Pvt. Ltd.",
      jobTitle: "Frontend Developer Intern",
      description: "Implemented real-time messaging features using WebSocket, assisted in frontend development tasks, tested UI components, and gained practical experience in modern frameworks.",
      image: amnil,
    },
  ]
};
