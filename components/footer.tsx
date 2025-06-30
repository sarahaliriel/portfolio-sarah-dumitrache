"use client";

import LikeButton from "@/components/likebutton";

export default function Footer() {
  return (
    <footer className="bg-[#17202a] text-white py-8 px-6 text-center md:text-left md:flex md:flex-col md:items-start gap-6">
      <p className="text-sm w-full">
        © 2025 Sarah Aliriel Dutra Farbelow Dumitrache. Todos os direitos reservados.
      </p>

      {/* Navegação */}
      <nav className="flex flex-wrap gap-4 text-sm w-full">
        <a href="#home" className="hover:underline">Início</a>
        <a href="#about" className="hover:underline">Sobre</a>
        <a href="#projects" className="hover:underline">Projetos</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#experience" className="hover:underline">Experiência</a>
        <a href="#contact" className="hover:underline">Contacto</a>
      </nav>
      
      <div className="w-full flex justify-start pt-2">
        <LikeButton />
      </div>
    </footer>
  );
}
