import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  csharp,
  tailwind,
  nodejs,
  mongodb,
  postgres,
  git,
  docker,
  tesla,
  Tesla,
  shopify,
  carrent,
  Grammacast,
  jobit,
  tripguide,
  threejs,
  Webshop,
  microsoft,
  STN,
  IUT,
} from "../assets";

const index = {
  navLinks: [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],

  services: [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "E-commerce",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ],


  technologies : [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ],

  experiences: [
    {
      title: "Tesla",
      company_name: "IUT Annecy",
      icon: tesla,
      iconBg: "#383E56",
      date: "September 2022 - April 2023",
      points: [
        "Develop a database to meet all the technical needs of the client.",
        "Create a C# API to enable communication between the database and the front-end.",
        "Redesign the Tesla website in Vue.js while adhering to the graphic charter.",
        "Participate in code reviews and provide constructive feedback to other developers.",
      ],
    },
    {
      title: "STN",
      company_name: "STN",
      icon: STN,
      iconBg: "#383E56",
      date: "January 2022 - December 2023",
      points: [
        "Understand client issues and create a tailored website.",
        "Work independently and consistently on a personal project.",
        "Understand and complete complex administrative procedures.",
      ],
    },
    {
      title: "Web shop",
      company_name: "Eldora",
      icon: microsoft,
      iconBg: "#383E56",
      date: "April 2023 - June 2023",
      points: [
        "Develop a webshop using the SPFX framework from Microsoft.",
        "Self-train on a new programming language.",
        "Resolve compatibility issues between different project tools.",
      ],
    },
    {
      title: "E-Portfolio",
      company_name: "IUT Annecy",
      icon: IUT,
      iconBg: "#E6DEDD",
      date: "December 2023 - January 2024",
      points: [
        "Develop an attractive EPortfolio.",
        "Model a 3D environment using Blender.",
        "Resolve 'responsive design' issues and ensure multi-browser compatibility.",
      ],
    },
  ],

  projects: [
    {
      name: "Grammacast",
      description:
        "Grammacast is an action RPG whose goal is to save a village terrified by the activation of an ancient golem. It was my very first video game, and I have very fond memories of it.",
      tags: [
        { name: "Csharp", color: "blue-text-gradient" },
        { name: "Tild", color: "green-text-gradient" },
        { name: "Monogame", color: "pink-text-gradient" },
      ],
      image: Grammacast,
      source_code_link: "https://github.com/DewDonut/SAE_DEV_GrammaCast",
    },
    {
      name: "Tesla",
      description:
        "Creation of a Tesla website from scratch to meet all the standard requirements imposed by our client (professor).",
      tags: [
        { name: "PostgresSQL", color: "blue-text-gradient" },
        { name: "Api csharp", color: "green-text-gradient" },
        { name: "Vuejs", color: "pink-text-gradient" },
      ],
      image: Tesla,
      source_code_link: "https://github.com/leichtmj/Client-Tesla",
    },
    {
      name: "Webshop",
      description:
        "Creation of a webshop to facilitate and optimize the ordering process for materials from partner establishments.",
      tags: [
        { name: "Reactjs", color: "blue-text-gradient" },
        { name: "SPFX", color: "green-text-gradient" },
        { name: "Tailwind css", color: "pink-text-gradient" },
      ],
      image: Webshop,
      source_code_link: "https://github.com/Zolkn/Webshop-project",
    },
  ],
  
  strings : {
    nav: {
      s1: "Enzo",
      s2: "| Student",
    },
    hero: {
      s1: "Hi, I'm",
      s2: "Enzo",
      s3: "I develop user interfaces and web applications",
    },
    about: {
      s1: "Introduction",
      s2: "Overview.",
      s3: "I am a third-year computer science student at IUT Annecy. I enjoy taking on various computer projects, whether alone or in a team. Exploring new technologies and/or frameworks is something I am passionate about. I engage in weightlifting and climbing to maintain good health.",
    },
    experience: {
      s1: "What I have done so far",
      s2: "Work Experience.",
    },
    work: {
      s1: "My work",
      s2: "Projects.",
      s3: " The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    },
    contact: {
      a1: "Thank you. I will get back to you as soon as possible.",
      a2: "Ah, something went wrong. Please try again.",
      s1: "GET IN TOUCH",
      s2: "Contact.",
      s3: "Your Name",
      s4: "Your email",
      s5: "Your Message",
      s6: "Sending...",
      s7: "Send",
      p1: "What's your good name?",
      p2: "What's your web address?",
      p3: 'What you want to say?',
    },
  },
  
};

export { index };
