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
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  tesla,
  shopify,
  Grammacast,
  Tesla,
  tripguide,
  threejs,
  Webshop,
  microsoft,
  STN,
  IUT,
  } from "../assets";

const index =
{

  navLinks : [
    {
      id: "à propos",
      title: "à propos",
    },
    {
      id: "travail",
      title: "travail",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],

  services : [
    {
      title: "Frontend Développeur",
      icon: web,
    },
    {
      title: "Backend Développeur",
      icon: backend,
    },
    {
      title: "E-commerce",
      icon: mobile,
    },
    {
      title: "Monteur vidéo",
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
  
  experiences : [
    {
      title: "Tesla",
      company_name: "IUT Annecy",
      icon: tesla,
      iconBg: "#383E56",
      date: "Septembre 2022 - Avril 2023",
      points: [
        "Développer une base de données visant à répondre à tous les besoins techniques du client.",
        "Créer une API C# visant à permettre la communication entre la base de données et le front.",
        "Redessiner le site web de Tesla, en Vue.js tout en respectant la charte graphique.",
        "Participer à la revue de code et apporter des retours productifs aux autres développeurs.",
      ],
    },
    {
      title: "STN",
      company_name: "STN",
      icon: STN,
      iconBg: "#383E56",
      date: "Janvier 2022 - Décembre 2023",
      points: [
        "Comprendre une problématique cliente et réaliser un site web adapté.",
        "Travailler de manière autonome et régulière sur un projet personnel.",
        "Comprendre et réaliser des démarches administratives complexes.",
      ],
    },
    {
      title: "Web shop",
      company_name: "Eldora",
      icon: microsoft,
      iconBg: "#383E56",
      date: "Avril 2023 - Juin 2023",
      points: [
        "Développer un webshop en utilisant le framework SPFX de Microsoft.",
        "Se former sur un nouveau langage de programmation de manière autonome.",
        "Résoudre des problèmes de compatibilité entre les différents outils d'un projet.",
      ],
    },
    {
      title: "E-Portfolio",
      company_name: "IUT Annecy",
      icon: IUT,
      iconBg: "#E6DEDD",
      date: "Décembre 2023 - Janvier 2024",
      points: [
        "Développer un EPortfolio attractif.",
        "Modéliser un environnement 3D grâce à l'outil Blender.",
        "Résoudre des problèmes de \"responsive design\" et s'assurer d'une compatibilité multi-navigateur.",
      ],
    },
  ],
  
  projects : [
    {
      name: "Grammacast",
      description:
        "Grammacast est un RPG d'action dont le but est de sauver un village terrifié par l'activation d'un ancien golem. Ce fut mon tout premier jeu vidéo réalisé et j'en garde un très bon souvenir.",
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
        "Création d'un site web Tesla \"from scratch\" devant répondre à toutes les exigences standards imposées par notre client (professeur).",
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
        "Création d'un webshop afin de faciliter et d'optimiser le processus de commande de matériel des établissements partenaires.",
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
      s2: "| Étudiant",
    },
    hero: {
      s1: "Salut, je suis",
      s2: "Enzo",
      s3: "Je développe des interfaces utilisateur, et des applications web",
    },
    about: {
      s1: "Introduction",
      s2: "Aperçu.",
      s3: "Je suis un étudiant en 3e année de BUT informatique à l'IUT d'Annecy. J'aime me lancer dans de nombreux projets informatiques, que ce soit seul ou en team. Et découvrir de nouvelles technologies et/ou frameworks. Je pratique de la musculation et de l'escalade pour rester en bonne santé.",
    },
    experience: {
      s1: "Ce que j'ai fait jusqu'à présent",
      s2: "Expérience Professionnelle.",
    },
    work: {
      s1: "Mon travail",
      s2: "Projets.",
      s3: " Les projets suivants illustrent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers les dépôts de code et des démos en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies, et à gérer efficacement les projets.",
    },
    contact: {
      a1: "Merci. Je vous répondrai dès que possible.",
      a2: "Ah, quelque chose s'est mal passé. Veuillez réessayer.",
      s1: "ENTREZ EN CONTACT",
      s2: "Contact.",
      s3: "Votre Nom",
      s4: "Votre email",
      s5: "Votre Message",
      s6: "Envoi en cours...",
      s7: "Envoyer",
      p1: "Comment vous appelez-vous?",
      p2: "Quelle est votre adresse web?",
      p3: "Que voulez-vous dire?",
    },
  },
}

export { index };

  