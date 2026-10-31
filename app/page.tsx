"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import MacCard from "@/components/MacCard";
import { CursorDrivenParticleTypography } from "@/components/CursorDrivenParticleTypography";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LayeredStack } from "@/components/LayeredStack";
import {
  CaseStudyFlipStack,
  CaseStudyFlipItem,
} from "@/components/CaseStudyFlipStack";
import {
  ArrowUpRight,
  Code2,
  FolderGit2,
  Music,
  Film,
  ExternalLink,
  Milestone,
  Terminal,
  Blocks,
  Cpu,
  Boxes,
  Tv,
  ChevronDown,
} from "lucide-react";

const Signature = dynamic(
  () => import("@/components/Signature").then((mod) => mod.Signature),
  { ssr: false },
);

export default function Home() {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const [isRoadmapExpanded, setIsRoadmapExpanded] = useState(false);

  const timeline = [
    {
      year: "2019",
      title: "Problem Solving & Python",
      desc: "Initial step into programming logic, automation, and foundational algorithms.",
      icon: Terminal,
    },
    {
      year: "2020 - 2021",
      title: "Frontend Foundations",
      desc: "Mastered HTML, CSS, JavaScript, and responsive user interface design principles.",
      icon: Code2,
    },
    {
      year: "2022 - 2023",
      title: "React, Next.js & Modern Tech Stack",
      desc: "Focused on building production-grade web applications using TypeScript & Next.js.",
      icon: Cpu,
    },
    {
      year: "2024 - Present",
      title: "Smart Contracts & Web3 Ecosystem",
      desc: "Engineering decentralized protocols, Solidity contracts, and on-chain EVM integrations.",
      icon: Blocks,
    },
  ];

  const hobbies = [
    "Smart Contract Development & EVM Protocols",
    "Modern UI/UX Design & Micro-animations",
    "Open Source Exploration & AI Toolings",
  ];

  const filmsList = [
    {
      title: "White Chicks",
      url: "https://www.imdb.com/title/tt0381707/",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg5ODE1NzM2MF5BMl5BanBnXkFtZTcwMjE1NzUyMQ@@._V1_FMjpg_UX300_.jpg",
    },
    {
      title: "Family Guy",
      url: "https://www.imdb.com/title/tt0182576/",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UY2880_.jpg",
    },
    {
      title: "Fight Club",
      url: "https://www.imdb.com/title/tt0137523/",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2RlYWM5MTUtYjk5Yy00YmI2LTkwN2YtY2QzOGYxMWYyNjdlXkEyXkFqcGc@._V1_FMjpg_UY709_.jpg",
    },
    {
      title: "The Odyssey",
      url: "https://www.imdb.com/title/tt33764258/",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTcyNmJlZmQtNDUwYy00NDBjLTg1NGQtYTY2Y2UxMWM3NmI1XkEyXkFqcGc@._V1_FMjpg_UY711_.jpg",
    },
  ];

  const animeList = [
    {
      title: "One Piece",
      url: "https://myanimelist.net/anime/21/One_Piece",
      image: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
    },
    {
      title: "Death Note",
      url: "https://myanimelist.net/anime/1535/Death_Note",
      image: "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
    },
    {
      title: "Dr. STONE: New World",
      url: "https://myanimelist.net/anime/48549/Dr_Stone__New_World",
      image: "https://cdn.myanimelist.net/images/anime/1316/136268.jpg",
    },
    {
      title: "Baki: Great Raitai Tournament Saga",
      url: "https://myanimelist.net/anime/39555/Baki__Dai_Raitaisai-hen",
      image: "https://cdn.myanimelist.net/images/anime/1924/109353.jpg",
    },
  ];

  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js / Express",
    "Solidity / EVM",
    "Ethers.js / Viem",
    "Wagmi / RainbowKit",
    "Smart Contracts",
    "REST & GraphQL API",
    "PostgreSQL / MongoDB",
  ];

  const projectFlipItems: CaseStudyFlipItem[] = [
    {
      number: "01",
      eyebrow: "Solana Ecosystem",
      title: "Cleasol.xyz",
      description:
        "A professional on-chain asset management platform designed to liquidate unused tokens and reclaim storage rent from vacant Solana accounts.",
      image: "/cleasol.png",
      imageAlt: "Cleasol Platform Interface",
      url: "https://cleasol.xyz",
    },
    {
      number: "02",
      eyebrow: "Social Network",
      title: "Vibeday.cloud",
      description:
        "A modern social platform allowing users to connect, share content, and interact online through personalized feeds, global search, and instant notifications.",
      image: "/vibeday.png",
      imageAlt: "Vibeday Social Interface",
      url: "https://vibeday.cloud",
    },
    {
      number: "03",
      eyebrow: "Tokenomics Protocol",
      title: "Soulpad.online",
      description:
        "Transform profile handles directly into tradeable, liquid digital assets via non-custodial smart contracts deployed across Base Network and Robinhood Chain.",
      image: "/soulpad.png",
      imageAlt: "Soulpad Protocol Interface",
      url: "https://soulpad.online",
    },
    {
      number: "04",
      eyebrow: "DEX & Token Tracker",
      title: "Orymarket.online",
      description:
        "Effortlessly trade tokens on the Solana network while tracking real-time new pair listings and market movements via an intuitive trading terminal.",
      image: "/orymarket.png",
      imageAlt: "Orymarket Solana Trading Interface",
      url: "https://orymarket.online",
    },
    {
      number: "05",
      eyebrow: "Artificial Intelligence",
      title: "SparkForge",
      description:
        "An all-in-one AI suite to generate stunning images, convert text to cinematic video, and chat with cutting-edge AI models seamlessly in one place.",
      image: "/sparkforge.png",
      imageAlt: "SparkForge AI Suite Interface",
      url: "https://sparkforge.xyz",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Rafikhalbi",
      iconClass: "fi fi-brands-github",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rafi__.16",
      iconClass: "fi fi-brands-instagram",
    },
    {
      name: "X",
      href: "https://x.com/Rafikhalbi",
      iconClass: "fi fi-brands-twitter-alt-circle",
    },
    {
      name: "Telegram",
      href: "https://t.me/raaf_0",
      iconClass: "fi fi-brands-telegram",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="text-slate-100 min-h-screen font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      <BackgroundCanvas />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6">
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center space-y-4 pt-16">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
            Hello, I&apos;m
          </motion.p>

          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full h-25 sm:h-45 -my-2 sm:-my-4">
                <CursorDrivenParticleTypography
                  text="Rafi Khalbi"
                  color="#10b981"
                  fontSize={80}
                  particleSize={1.8}
                  particleDensity={4}
                  dispersionStrength={20}
                  returnSpeed={0.08}
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="-mt-4 sm:-mt-6">
                <Signature
                  text="Rafi Khalbi"
                  color="#ffffff"
                  fontSize={14}
                  duration={2}
                  delay={0.2}
                  fontUrl="/LastoriaBoldRegular.otf"
                />
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="hidden sm:block shrink-0 relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl shadow-emerald-500/10">
              <Image
                src="/ace.webp"
                alt="Rafi Khalbi"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="20"
              />
            </motion.div>
          </div>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl sm:text-3xl font-semibold text-slate-200 tracking-tight pt-2">
            Full Stack &amp; Web3 Developer
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl">
            Specializing in engineering end-to-end web applications, modern
            dApps, and scalable backend services with a focus on seamless Web3
            interactions and high-performance architecture.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 text-sm">
              View Work <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium rounded-lg border border-slate-800 transition-all duration-200 text-sm">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-2 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200 flex items-center justify-center">
                <i className={`${social.iconClass} text-lg leading-none`} />
              </a>
            ))}
          </motion.div>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col justify-center space-y-8 py-16 relative">
          <div className="absolute -inset-x-12 -inset-y-10 -z-10 pointer-events-none flex items-center justify-center">
            <div
              className="w-full h-full max-w-5xl opacity-25 bg-cover bg-center"
              style={{
                backgroundImage: "url('/bg.webp')",
                maskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
              }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8">
            <div className="space-y-1 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase">
                <Milestone size={16} />
                <span>01. Journey &amp; Interests</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setIsRoadmapExpanded(!isRoadmapExpanded)}
                className="w-full text-left p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 flex items-center justify-between group cursor-pointer">
                <div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    Engineering Roadmap
                  </h3>
                  <p className="text-xs text-slate-400">
                    2019 — Present • Click to{" "}
                    {isRoadmapExpanded ? "collapse" : "expand"} journey details
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isRoadmapExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {isRoadmapExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden">
                    <div className="grid gap-3 pt-2">
                      {timeline.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-100">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-center shrink-0">
                            {item.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
              <div className="md:col-span-5 p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between space-y-3 relative overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                  style={{
                    backgroundImage: "url('/bg.webp')",
                    maskImage:
                      "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
                  }}
                />

                <div className="flex items-center justify-between w-full z-10">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Music size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Music Player
                    </span>
                  </div>
                </div>

                <div className="scale-85 sm:scale-90 flex justify-center py-1 z-10">
                  <MusicPlayer
                    src="https://www.youtube.com/watch?v=C59dJfEFz2w"
                    coverArt="/ace.webp"
                    autoPlay={false}
                  />
                </div>

                <div className="w-full pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] z-10">
                  <span className="text-slate-400">Source: YouTube</span>
                  <a
                    href="https://www.youtube.com/watch?v=C59dJfEFz2w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-medium">
                    Listen on YouTube <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Film size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Favorite Movies
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {filmsList.map((film, idx) => (
                      <a
                        key={idx}
                        href={film.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 h-24 flex flex-col justify-end p-2 shadow-md">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                          style={{ backgroundImage: `url(${film.image})` }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        <div className="relative z-10 space-y-0.5">
                          <p className="text-[10px] font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-tight">
                            {film.title}
                          </p>
                          <span className="inline-flex items-center gap-0.5 text-[8px] text-slate-400 group-hover:text-emerald-300">
                            IMDb <ExternalLink size={8} />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Boxes size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Passions
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {hobbies.map((hobby, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 bg-slate-950/50 border border-slate-800/60 p-2 rounded-xl flex items-center justify-center text-center">
                        <span className="leading-snug">{hobby}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Tv size={16} className="text-emerald-400" /> Favorite Anime
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  Hover to unstack
                </span>
              </div>

              <div className="pt-4 pb-8">
                <LayeredStack className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                  {animeList.map((anime, idx) => (
                    <a
                      key={idx}
                      href={anime.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/60 backdrop-blur-md transition-all duration-300 flex flex-col justify-end h-56 p-3 shadow-2xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        style={{ backgroundImage: `url(${anime.image})` }}
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="relative z-10 space-y-1">
                        <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {anime.title}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 group-hover:text-emerald-300">
                          MyAnimeList <ExternalLink size={10} />
                        </span>
                      </div>
                    </a>
                  ))}
                </LayeredStack>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center space-y-4 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <Code2 size={16} />
              <h2 className="text-xs font-bold uppercase tracking-wider">
                02. Skills &amp; Stack
              </h2>
            </div>

            <button
              onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
              className="w-full text-left p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  Technical Stack &amp; Frameworks
                </h3>
                <p className="text-xs text-slate-400">
                  Click to {isSkillsExpanded ? "collapse" : "expand"} full stack
                  list
                </p>
              </div>
              <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isSkillsExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            <AnimatePresence>
              {isSkillsExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden">
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="px-4 py-2 bg-slate-900/90 border border-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      <section id="projects" className="relative py-12">
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-emerald-400">
            <FolderGit2 size={16} />
            <h2 className="text-xs font-bold uppercase tracking-wider">
              03. Featured Projects
            </h2>
          </div>
        </div>

        <CaseStudyFlipStack
          items={projectFlipItems}
          className="bg-transparent text-slate-100"
        />
      </section>

      <main className="max-w-4xl mx-auto px-6">
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full text-center py-12 px-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open for technical discussions, Web3 infrastructure engineering,
                or full-stack collaboration.
              </p>
              <div className="pt-3">
                <a
                  href="mailto:rafikhalbi@icloud.com"
                  className="inline-block px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg shadow-md transition-all duration-200 text-sm">
                  Send Message
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
