'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  type Message = { id: string; sender: 'bot' | 'user'; text: string | React.ReactNode };
  const [messages, setMessages] = useState<Message[]>([
    { id: crypto.randomUUID(), sender: 'bot', text: 'Olá! Digite o que quiser saber sobre mim! ;)' }
  ]);
  const [input, setInput] = useState('');

  const respostasProgramadas: Record<string, React.ReactNode> = {

  'oi': 'Olá! Como posso te ajudar hoje?',
  'olá': 'Olá! Como posso te ajudar hoje?',
  'ola': 'Olá! Como posso te ajudar hoje?',
  'oii': 'Olá! Como posso te ajudar hoje?',
  'Oi': 'Olá! Como posso te ajudar hoje?',
  'Olá': 'Olá! Como posso te ajudar hoje?',
  'Ola': 'Olá! Como posso te ajudar hoje?',
  'Oii': 'Olá! Como posso te ajudar hoje?',
  'oi.': 'Olá! Como posso te ajudar hoje?',
  'olá.': 'Olá! Como posso te ajudar hoje?',
  'ola.': 'Olá! Como posso te ajudar hoje?',
  'oii.': 'Olá! Como posso te ajudar hoje?',
  'Oi.': 'Olá! Como posso te ajudar hoje?',
  'Olá.': 'Olá! Como posso te ajudar hoje?',
  'Ola.': 'Olá! Como posso te ajudar hoje?',
  'Oii.': 'Olá! Como posso te ajudar hoje?',


  'tudo bem?': 'Tudo ótimo! E você, como está? Se tiver alguma pergunta, estou aqui para ajudar!',
  'tudo bem': 'Tudo ótimo! E você, como está? Se tiver alguma pergunta, estou aqui para ajudar!',
  'Tudo bem?': 'Tudo ótimo! E você, como está? Se tiver alguma pergunta, estou aqui para ajudar!',
  'Tudo bem': 'Tudo ótimo! E você, como está? Se tiver alguma pergunta, estou aqui para ajudar!',


  'como você funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'como funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'como isso funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'você funciona?': 'Sim! Como pode ver, eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'isso funciona como?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como você funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como isso funciona?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Você funciona?': 'Sim! Como pode ver, eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Isso funciona como?': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'como você funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'como funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'como isso funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'você funciona': 'Sim! Como pode ver, eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'isso funciona como': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como você funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Como isso funciona': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Você funciona': 'Sim! Como pode ver, eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  'Isso funciona como': 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',



  'qual seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual é seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual é o seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual o seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual é seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual é o seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual o seu nome?': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual é seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual é o seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'qual o seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual é seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual é o seu nome': 'Meu nome é Sarah, prazer em conhecer você!',
  'Qual o seu nome': 'Meu nome é Sarah, prazer em conhecer você!',


  'quem é você?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem você é?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é a Sarah?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é a sarah?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é você?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem você é?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é a Sarah?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é a sarah?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é?': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é você': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem você é': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é a Sarah': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é a sarah': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'quem é': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é você': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem você é': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é a Sarah': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é a sarah': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  'Quem é': 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',


  'qual sua profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a sua profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a profissão da Sarah?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a profissão da sarah?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual sua profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a sua profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a profissão da Sarah?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a profissão da sarah?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual sua profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a sua profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a profissão da Sarah': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'qual a profissão da sarah': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual sua profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a sua profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a profissão da Sarah': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Qual a profissão da sarah': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Profissão?': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  'Profissão': 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  

  'como posso ver seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos da sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos da Sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos da sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos da Sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos da sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos da Sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os seus projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos da sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos da Sarah?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos da sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'como posso ver os projetos da Sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos da sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'onde posso ver os projetos da Sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos da sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Como posso ver os projetos da Sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os seus projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos da sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'Onde posso ver os projetos da Sarah': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'projetos?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'projetos': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'projeto?': 'Você pode conferir meus projetos na seção "Projetos" do site.',
  'projeto': 'Você pode conferir meus projetos na seção "Projetos" do site.',



  'como posso entrar em contacto?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso entrar em contato?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar mais com a Sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar mais com a sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar com a Sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar com a sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso entrar em contacto?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso entrar em contato?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar mais com a Sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar mais com a sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar com a Sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar com a sarah?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso entrar em contacto': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso entrar em contato': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar mais com a Sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar mais com a sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar com a Sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'como posso falar com a sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso entrar em contacto': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso entrar em contato': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar mais com a Sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar mais com a sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar com a Sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Como posso falar com a sarah': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'contacto?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'contato?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Contacto?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Contato?': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'contacto': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'contato': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Contacto': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',
  'Contato': 'Você pode enviar um E-mail para mim indo na seção "Contacto" do meu site,',


  'você trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Sarah trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'sarah trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Você trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Trabalha com qual linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'você trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Sarah trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'sarah trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Você trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'Trabalha com qual linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  '<Linguagem?': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  'linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',
  '<Linguagem': 'Trabalho com JavaScript, TypeScript, React, Next.js, Node.js e mais.',


  'quais tecnologias usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias Sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias a Sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias a sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias você usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias que você usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias Sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias a Sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias a sarah usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias você usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias que você usa?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias Sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias a Sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias a sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias você usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias que você usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'quais tecnologias': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias Sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias a Sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias a sarah usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias você usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias que você usa': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Quais tecnologias': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Tecnologias?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'tecnologias?': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'Tecnologias': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  'tecnologias': 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',


   'O que é programação?': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'O que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'o que é programação?': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'o que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'Me explique o que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'me explique o que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'diga o que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
   'Diga o que é programação': 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',


   'O que é HTML?': 'HTML é a linguagem que cria a estrutura das páginas da web.',
   'O que é HTML': 'HTML é a linguagem que cria a estrutura das páginas da web.',
   'o que é HTML?': 'HTML é a linguagem que cria a estrutura das páginas da web.',
   'o que é HTML': 'HTML é a linguagem que cria a estrutura das páginas da web.',
   'Me explique o que é HTML': 'HTML é a linguagem que cria a estrutura das páginas da web.',
   'me explique o que é HTML': 'HTML é a linguagem que cria a estrutura das páginas da web.',


   'O que é CSS?': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',
   'O que é CSS': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',
   'o que é CSS?': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',
   'o que é CSS': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',
   'Me explique o que é CSS': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',
   'me explique o que é CSS': 'CSS é a linguagem que define o estilo e o visual do site, como cores e fontes.',


   'O que é JavaScript?': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',
   'O que é JavaScript': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',
   'o que é JavaScript?': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',
   'o que é JavaScript': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',
   'Me explique o que é JavaScript': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',
   'me explique o que é JavaScript': 'JavaScript é a linguagem que adiciona interatividade e dinamismo às páginas.',

   
   'O que é Tailwind CSS?': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',
   'O que é Tailwind CSS': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',
   'o que é Tailwind CSS?': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',
   'o que é Tailwind CSS': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',
   'Me explique o que é Tailwind CSS': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',
   'me explique o que é Tailwind CSS': 'Tailwind CSS é uma ferramenta que facilita a criação rápida de estilos usando classes prontas.',


   'O que é Next.js?': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',
   'O que é Next.js': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',
   'o que é Next.js?': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',
   'o que é Next.js': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',
   'Me explique o que é Next.js': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',
   'me explique o que é Next.js': 'Next.js é um framework que ajuda a construir sites e aplicativos React de forma mais eficiente.',


   'O que é um portfólio?': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
   'O que é um portfólio': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
   'o que é um portfólio?': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
   'o que é um portfólio': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
   'Me explique o que é um portfólio': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
   'me explique o que é um portfólio': 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',


   'Para que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
   'para que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
   'Para o que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
   'para o que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
   'Me explique para o que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
   'me explique para o que serve um portfólio': 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',


   'O que é TypeScript?': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',
   'O que é TypeScript': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',
   'o que é TypeScript?': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',
   'o que é TypeScript': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',
   'Me explique o que é TypeScript': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',
   'me explique o que é TypeScript': 'TypeScript é uma versão do JavaScript que adiciona tipos para evitar erros e melhorar o código.',


   'O que é Front End?': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
   'O que é Front End': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
   'o que é Front End?': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
   'o que é Front End': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
   'Me explique o que é Front End': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
   'me explique o que é Front End': 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',


   'O que é Back End?': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
   'O que é Back End': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
   'o que é Back End?': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
   'o que é Back End': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
   'Me explique o que é Back End': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
   'me explique o que é Back End': 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',


   'O que é Full Stack?': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
   'O que é Full Stack': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
   'o que é Full Stack?': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
   'o que é Full Stack': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
   'Me explique o que é Full Stack': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
   'me explique o que é Full Stack': 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',


   'O que é Bootcamp?': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
   'O que é Bootcamp': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
   'o que é Bootcamp?': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
   'o que é Bootcamp': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
   'Me explique o que é Bootcamp': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
   'me explique o que é Bootcamp': 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',


  'onde posso ver seu currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde posso ver o seu currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde posso ver o currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'tem currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde está o currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver seu currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver o seu currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver o currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Tem currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde está o currículo?': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde posso ver seu currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde posso ver o seu currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde posso ver o currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'tem currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'onde está o currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver seu currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver o seu currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde posso ver o currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Tem currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',
  'Onde está o currículo': 'Você pode baixar meu currículo na seção "Início" do portfolio.',


  'tchau': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'tchau!': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'adeus': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'adeus!': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'Tchau': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'Tchau!': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'Adeus': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',
  'Adeus!': 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. :)',


  'obrigada': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'obrigado': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'obrigada!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'obrigado!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obrigada': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obrigado': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obrigada!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obrigado!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'obg': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'obg!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obg': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'muito obg!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obrigada': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obrigado': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obrigada!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obrigado!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obrigada': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obrigado': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obrigada!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obrigado!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obg': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Obg!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obg': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',
  'Muito obg!': 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. :)',


};

  const handleSend = () => {
    if (!input.trim()) return;

    const pergunta = input.toLowerCase();

    const resposta =
      respostasProgramadas[pergunta] || 'Desculpe, não estou programada para responder a isto. Tente perguntar outra coisa!';

    const novaMensagem = { id: crypto.randomUUID(), sender: 'user' as const, text: input };
    setMessages((prev) => [...prev, novaMensagem]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), sender: 'bot' as const, text: resposta }
      ]);
    }, 800);

    setInput('');
  };

 return (
<div className="fixed bottom-20 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#49321F] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#EAB897] transition-colors duration-300 hover:scale-[1.15] active:scale-105 transition-all"
      >
        {isOpen ? 'Fechar Chat' : 'Abrir Chat'}
      </button>

      {isOpen && (
        <div
          className="h-96 rounded-xl p-4 mt-4 flex flex-col shadow-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(21, 0, 0, 0.73) 0%, rgba(42, 37, 37, 0.14) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
  <div className="flex-1 overflow-y-auto mb-4 space-y-3 flex flex-col">
    {messages.map((msg) => (
<div
  key={msg.id}
  className={`p-3 rounded-lg text-white max-w-[80%] w-80 break-words ${
    msg.sender === 'bot' ? 'bg-[#49321F] self-start' : 'bg-[#EAB897] self-end'
  }`}
>
  {msg.text}
</div>
    ))}
  </div>

  <div className="flex gap-2">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      placeholder="Digite aqui..."
      className="flex-1 border border-black-300 rounded px-3 py-2 text-black focus:outline-none focus:border-[#49321F] transition-colors duration-200"/>
    <button
      onClick={handleSend}
      className="bg-[#49321F] text-white px-4 py-2 rounded hover:bg-[#3b2917] transition-colors duration-200"
    >
      Enviar
    </button>
  </div>
</div> 
)}
</div>
);
}