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

export default function RedisClone() {
  const techStack = [
    { name: "C", icon: IconCode, color: "bg-red-500/20 text-red-400" },
    {
      name: "Networking",
      icon: IconWorld,
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      name: "Data Structures",
      icon: IconDatabase,
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Concurrency",
      icon: IconBrain,
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      name: "Low-level Systems",
      icon: IconCode,
      color: "bg-orange-500/20 text-orange-400",
    },
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
                High-Performance In-Memory Database in C
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 max-w-3xl">
                Building a Redis-Like Server from Scratch
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <IconCalendar size={16} />
                  <span>Published: October, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={16} />
                  <span>5min read</span>
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
                  href="https://github.com/Mohamed-Blanco/Remote-Dicionary-Server-in-C-Redis-"
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
                src="/images/RESP.jpg"
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
                  Ever wondered how a Redis server manages thousands of
                  simultaneous requests? How do its core data structures and
                  event loops work together to provide lightning-fast
                  performance? I challenged myself to answer these questions by
                  building a Redis-like key-value server entirely from scratch,
                  implementing networking, concurrency, and low-level C
                  programming along the way.
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
                  What does it take to truly understand a system-level software?
                  Can you grasp it without building it yourself? By creating
                  every component—from the TCP server to the event loop and data
                  structures—I had to confront questions about memory
                  management, data organization, and client-server communication
                  head-on.
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
                  The server implements core Redis features: socket programming,
                  TCP client-server communication, a request-response protocol,
                  concurrent I/O models, an event loop, and advanced data
                  structures like hashtables, balanced binary trees, and sorted
                  sets. Features like timers, cache expiration (TTL), and thread
                  pools ensure real-world usability and performance.
                </p>
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
                    title: "TCP Networking",
                    description:
                      "Handles multiple client connections simultaneously.",
                  },
                  {
                    title: "Event Loop & Concurrency",
                    description:
                      "Efficiently processes requests without blocking.",
                  },
                  {
                    title: "Advanced Data Structures",
                    description:
                      "Hashtables, binary trees, and sorted sets for performance.",
                  },
                  {
                    title: "Cache Expiration & TTL",
                    description:
                      "Supports real-time cache management with timers.",
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
                  This Redis-like project demonstrates hands-on mastery of
                  low-level C, networking, data structures, and concurrency. It
                  shows that complex, real-world systems can be reconstructed
                  independently, providing both technical depth and practical
                  problem-solving experience.
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
            <p>© 2025 Blanco, Labiad Mohamed. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
