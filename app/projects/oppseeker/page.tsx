"use client";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { Meteors } from "@/components/ui/meteors";
import {
  IconCalendar,
  IconTag,
  IconArrowLeft,
  IconExternalLink,
  IconBrandGithub,
  IconEye,
  IconClock,
  IconCode,
  IconBrain,
  IconDatabase,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Oppseeker() {
  const techStack = [
    { name: "NLP", icon: IconBrain, color: "bg-blue-500/20 text-blue-400" },
    { name: "AI", icon: IconBrain, color: "bg-purple-500/20 text-purple-400" },
    {
      name: "Scrapping",
      icon: IconDatabase,
      color: "bg-green-500/20 text-green-400",
    },
    { name: "Flask", icon: IconCode, color: "bg-red-500/20 text-red-400" },
    {
      name: "SpringBoot",
      icon: IconCode,
      color: "bg-orange-500/20 text-orange-400",
    },
    { name: "Next.js", icon: IconWorld, color: "bg-cyan-500/20 text-cyan-400" },
  ];

  return (
    <div className="h-full">
      <div className="text-white z-20 flex justify-center flex-col mt-[-5rem] h-full gap-20 items-center overflow-y-auto min-h-screen bg-[#2C3647]">
        <Meteors number={30} className="z-10" />

        {/* Back Navigation */}
        <div className="w-[80%] pt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#BDB5AA] hover:text-white transition-colors duration-300 mb-8"
          >
            <IconArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>

        <div className="bg-[#1A1F28] w-[80%] min-h-screen px-8 py-12 rounded-t-2xl shadow-2xl">
          {/* Header Section */}
          <header className="mb-12">
            <div className="flex flex-col gap-6">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#BDB5AA] leading-tight">
                OppSeeker: Morocco's First AI-Powered Job Search Tool
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 max-w-3xl">
                Revolutionizing job discovery through intelligent matching and
                centralized search
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <IconCalendar size={16} />
                  <span>Published: August 29, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={16} />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full ${tech.color} border border-current/20`}
                  >
                    <tech.icon size={16} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://oppseeker.app"
                  className="bg-[#BDB5AA] hover:bg-[#A5998C] text-[#1A1F28] px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <IconEye size={18} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/Mohamed-Blanco/Job-Finding-WebApp-Nextjs"
                  className="border border-[#BDB5AA] text-[#BDB5AA] hover:bg-[#BDB5AA] hover:text-[#1A1F28] px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <IconBrandGithub size={18} />
                  Proof Of Work
                </a>
              </div>
            </div>
          </header>

          <main className="flex flex-col gap-12">
            {/* Hero Image */}
            <div className="w-full">
              <img
                src="/images/oppsseker-min.png"
                alt="OppSeeker Platform Screenshot"
                className="w-full h-auto rounded-md shadow-lg border border-gray-700/50"
              />
            </div>

            {/* Project Overview */}
            <section className="prose prose-invert max-w-none">
              <div className="bg-[#2C3647] p-8 rounded-md border border-gray-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#BDB5AA] rounded-md flex items-center justify-center">
                    <IconEye size={18} className="text-[#1A1F28]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    Project Overview
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  OppSeeker is Morocco's first AI-powered job search platform.
                  It helps candidates discover opportunities efficiently by
                  leveraging Natural Language Processing (NLP) and content-based
                  recommendation systems. Unlike traditional job boards,
                  OppSeeker centralizes all postings from multiple sources and
                  intelligently matches them to users' profiles, saving time and
                  improving accuracy.
                </p>
              </div>
            </section>

            {/* Problem Statement */}
            <section className="prose prose-invert max-w-none">
              <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">!</span>
                  </div>
                  <h2 className="text-2xl font-bold text-red-400 m-0">
                    Problem Statement
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Finding relevant internships or jobs in Morocco is fragmented
                  and time-consuming. Many postings are outdated, scattered
                  across multiple platforms, and hard to filter efficiently.
                  Existing tools didn't provide accurate matches or were not
                  free. The challenge was to create a centralized, intelligent
                  system that reduces manual search effort and improves match
                  quality.
                </p>
              </div>
            </section>

            {/* Solution & Architecture */}
            <section className="prose prose-invert max-w-none">
              <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-green-400 m-0">
                    Solution & Architecture
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  OppSeeker is built as a microservices platform, each with a
                  dedicated role:
                </p>
                <div className="w-full">
                  <img
                    src="/images/Search-min.png"
                    alt="OppSeeker Architecture Diagram"
                    className="w-full h-auto rounded-md shadow-lg border border-gray-700/50"
                  />
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#BDB5AA] mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI-Powered Matching",
                    description:
                      "Advanced NLP algorithms for intelligent job-profile matching",
                  },
                  {
                    title: "Centralized Search",
                    description:
                      "All job postings from multiple sources in one platform",
                  },
                  {
                    title: "Real-time Updates",
                    description:
                      "Fresh job postings updated regularly through web scraping",
                  },
                  {
                    title: "Microservices Architecture",
                    description: "Scalable and maintainable system design",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#2C3647] p-6 rounded-md border border-gray-700/50"
                  >
                    <h3 className="text-lg font-semibold text-[#BDB5AA] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Summary */}
            <section className="prose prose-invert max-w-none">
              <div className="bg-[#BDB5AA]/10 border border-[#BDB5AA]/20 p-8 rounded-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#BDB5AA] rounded-md flex items-center justify-center">
                    <span className="text-[#1A1F28] font-bold text-sm">★</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    Project Impact
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  OppSeeker demonstrates a full-stack, AI-powered solution
                  solving real-world problems in job searching. It combines data
                  engineering, NLP, recommendation systems, and scalable
                  microservices architecture, making it an impressive showcase
                  of modern software development practices and AI
                  implementation.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12">
              <div className="bg-gradient-to-r from-[#BDB5AA]/10 to-[#2C3647]/50 p-8 rounded-md border border-[#BDB5AA]/20">
                <h3 className="text-2xl font-bold text-[#BDB5AA] mb-4">
                  Interested in Learning More?
                </h3>
                <p className="text-gray-300 mb-6">
                  Explore the technical implementation and see the project in
                  action
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-[#BDB5AA] hover:bg-[#A5998C] text-[#1A1F28] px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2">
                    <IconExternalLink size={18} />
                    View Live Demo
                  </button>
                  <Link
                    href="/"
                    className="border border-[#BDB5AA] text-[#BDB5AA] hover:bg-[#BDB5AA] hover:text-[#1A1F28] px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <IconArrowLeft size={18} />
                    Back to Projects
                  </Link>
                </div>
              </div>
            </section>
          </main>

          <footer className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-400">
            <p>© 2024 Blanco, Labiad Mohamed. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
