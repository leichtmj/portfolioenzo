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
  Grammacast,
  Tesla,
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
      id: "skills",
      title: "Compétence",
    },
    {
      id: "about",
      title: "à propos",
    },
    {
      id: "work",
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
    skill: {
      s1: "Karuta",
      s2: "Apprentissages Critiques.",
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
    apprentissagecritique: {
      s_2: "COLLABORER AU SEIN D’ UNE EQUIPE INFORMATIQUE",
      s_1: "OPTIMISER DES APPLICATIONS",
      s_0: "REALISER UN DEVELOPPEMENT",
      s0_1: "Karuta",
      s0_2: "Apprentissage Critique",
      s0_3: "Au cours de mon stage chez Groupe-Entis, j'ai acquis et développé de nombreuses compétences techniques et professionnelles essentielles pour un développeur. Les actions réalisées pendant cette période m'ont permis d'aborder divers aspects du développement logiciel, de la conception de l'architecture à la gestion de projet en passant par l'optimisation des performances. Voici un aperçu des apprentissages critiques et des actions spécifiques que j'ai entreprises pour chaque compétence ",
      s0: "Choisir et implémenter les architectures adaptées",
      s1: "Faire évoluer une application existante",
      s2: "Intégrer des solutions dans un environnement de développement, de test ou de production",
      s3: "Anticiper les résultats de diverses métriques",
      s4: "Profiler, analyser et justifier le comportement d un code existant",
      s5: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d application",
      s6: "Organiser et partager une veille numérique",
      s7: "Identifier les principaux coûts et gains de la (ou des) mission(s)",
      s8: "Guider la conduite du changement informatique au sein d une organisation",
      s9: "Accompagner le management de projet informatique",
    },
    appcritiText: {
      t0_1: "> Choix des logiciels : Utilisation de Blazor pour le frontend, Bootstrap pour le design, et AutoMapper pour le mapping d'entités.",
      t0_2: "> Conception de l'architecture de l'API en utilisant le pattern code first pour une intégration efficace avec la base de données.",

      t1_1: "> Modification du code existant pour intégrer la fonctionnalité d'importation de fichiers Excel.",
      t1_2: "> Réécriture des méthodes de contrôle pour améliorer la gestion des erreurs et des exceptions.",

      t2_1: "> Utilisation de Git pour le versioning du code, incluant les commandes push, pull et merge.",
      t2_2: "> Gestion des branches de développement pour coordonner les modifications avec l'équipe.",

      t3_1: "> Évaluation des performances des requêtes SQL pour optimiser le temps de réponse des API.",

      t4_1: "> Réalisation de tests unitaires sur les contrôleurs de l'API pour vérifier leur bon fonctionnement.",

      t5_1: "> Intégration de la bibliothèque AutoMapper pour simplifier le mapping entre les entités et les DTO.",
      t5_2: "> Adoption de Moq pour les tests unitaires afin de simuler les dépendances et vérifier le comportement des contrôleurs.",

      t6_1: "> Réalisation de présentations internes sur les nouvelles technologies et outils utilisés, comme Blazor et MSAL.",
      t6_2: "> Partage de ressources et articles pertinents avec l'équipe via une plateforme de collaboration.",

      t7_1: "> Calcul du nombre d'heures passé sur le projet avec le taux horraire.",

      t8_1: "> Participation à des réunions avec des clients pour comprendre leurs besoins et ajuster les fonctionnalités de l'application en conséquence.",
      t8_2: "> Communication régulière avec les utilisateurs finaux pour recueillir des retours sur l'application.",

      t9_1: "> Participation aux réunions de planification de sprint pour définir les priorités et les tâches à accomplir.",
      t9_2: "> Suivi des progrès et mise à jour des statuts de projet avec gitlab.",

    },
  },
}

export { index };