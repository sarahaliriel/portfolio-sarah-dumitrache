import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Tudo começou em 2022, quando entrei para o curso profissional de Informática de Sistemas. Foi nesse período que tive meu primeiro contato com o mundo da tecnologia e descobri um grande interesse pela área de desenvolvimento.",
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
    title: "Front End Developer",
    location: "Lisboa, PT",
    description:
      "Hoje, continuo me dedicando à área, aprimorando minhas habilidades, aprendendo novas tecnologias e desenvolvendo projetos que refletem minha evolução como futura desenvolvedora front-end.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Inserir Proj",
    description:
      "Desc proj 1.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Inserir Proj 2",
    description:
      "Desc proj 2.",
    tags: ["HTML", "CSS", "API", "SQL", "PHP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Inserir Proj 3",
    description:
      "Desc proj 3.",
    tags: ["HTMTL", "CSS", "SQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
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
  "PHP",
  "Git",
  "Github"
] as const;