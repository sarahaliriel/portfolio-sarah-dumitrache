import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dashboardImg from "@/public/dashboard.png";
import sushizitoImg from "@/public/sushizito.png";
import memorygameImg from "@/public/memorygame.png";


export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ensino Profissional",
    location: "Lisboa, PT",
    description:
      "Tudo começou em 2022, quando entrei para o curso profissional de Informática de Sistemas na Casa Pia de Lisboa. Foi nesse período que tive meu primeiro contato com o mundo da tecnologia e descobri um grande interesse pela área de desenvolvimento.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Estudos e Projetos Práticos",
    description:
      "Ao longo do curso, tive a certeza de que essa era a carreira que queria seguir. Comecei a estudar com mais profundidade, a desenvolver projetos práticos e a explorar cada vez mais o universo do desenvolvimento web.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Lisboa, PT",
    description:
      "Ainda no começo deste ano, participei de um Bootcamp de uma semana o qual não só coloquei em prática o que já sabia, mas também aperfeiçoei meus conhecimentos em HTML, CSS e JavaScript. Hoje, continuo me dedicando à área, aprimorando minhas habilidades, aprendendo novas tecnologias e desenvolvendo projetos que refletem minha evolução como futura desenvolvedora full-stack.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "DashBoard Design",
    description: "Desenvolvimento de um dashboard moderno e responsivo, pensado para facilitar a visualização e o gerenciamento de dados importantes de forma intuitiva.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: dashboardImg,
    githubUrl: "https://github.com/sarahaliriel/dashboard-design",
    liveUrl: "https://dashboard-roan-zeta-69.vercel.app/",
  },
  {
    title: "Jogo da Memória",
    description: "Jogo simples feito com HTML, CSS e JavaScript. O utilizador encontra pares de cartas iguais, exercitando a memória e a concentração.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: memorygameImg,
    githubUrl: "https://github.com/sarahaliriel/jogo-memoria/tree/main",
    liveUrl: "https://sarahaliriel.github.io/jogo-memoria/",
  },
    {
    title: "Landing Page SushiZito",
    description: "Design de uma landing page atraente e responsiva para uma loja ficcional online de comida japonesa.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: sushizitoImg,
    githubUrl: "https://github.com/sarahaliriel/sushi-landingpage",
    liveUrl: "https://sushizito.vercel.app/",
  },
] as const;

export const skillsData = [
  "IA",
  "Discord Bots",
  "Design",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "C",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Typescript",
  "MySQL",
  "Prisma",
  "Docker",
  "PHP",
  "Git",
  "Github"
] as const;