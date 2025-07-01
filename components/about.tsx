"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Meu nome é Sarah Dumitrache e sou uma jovem{" "}
        <span className="font-medium">apaixonada</span> por tecnologia e desenvolvimento web.{" "}
        <span className="font-medium">Estou em formação na área de</span>{" "}
        <span className="italic">Informática de Sistemas</span> e venho me dedicando a aprender e aplicar meus conhecimentos em projetos práticos, com foco em desenvolvimento <span className="italic">full-stack</span>. 
        Gosto de transformar ideias em soluções funcionais, combinando programação, design e usabilidade. Estou sempre em busca de novos desafios e oportunidades para evoluir como desenvolvedora e contribuir com projetos que façam a diferença.
      </p>

      <p>
        <span className="italic">Quando não estou "codando"</span>, eu gosto de
        ver filmes, ler livros, editar vídeos e ouvir música. Tenho prazer em adquirir novos conhecimentos,{" "}
        <span className="font-medium">pois aprecio o processo de aprendizagem</span>!
      </p>
    </motion.section>
  );
}