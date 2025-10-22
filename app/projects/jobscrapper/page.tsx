"use client";
import { Meteors } from "@/components/ui/meteors";
import {
  IconCalendar,
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

export default function JobScraper() {
  const techStack = [
    { name: "Python", icon: IconCode, color: "bg-red-500/20 text-red-400" },
    {
      name: "Selenium",
      icon: IconBrain,
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      name: "BeautifulSoup",
      icon: IconDatabase,
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Requests",
      icon: IconWorld,
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      name: "NLTK",
      icon: IconBrain,
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      name: "PostgreSQL",
      icon: IconDatabase,
      color: "bg-blue-500/20 text-blue-400",
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
              <h1 className="text-4xl md:text-5xl font-bold text-[#BDB5AA] leading-tight">
                Intelligent Web Scraper for Job Data
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Intelligent Data Collection: The Backbone of Our Job
                Recommendation System
              </p>

              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <IconCalendar size={16} />
                  <span>Published: September, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={16} />
                  <span>6min read</span>
                </div>
              </div>

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

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/Mohamed-Blanco/job-student-modular"
                  className="border border-[#BDB5AA] text-[#BDB5AA] hover:bg-[#BDB5AA] hover:text-[#1A1F28] px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <IconBrandGithub size={18} />
                  Proof Of Work
                </a>
              </div>
            </div>
          </header>

          <main className="flex flex-col gap-12">
            {/* Project Overview */}
            <section className="prose prose-invert max-w-none">
              <div className="bg-[#2C3647] p-8 rounded-md border border-gray-700/50">
                <div className="bg-cover w-full h-100 overflow-clip  justify-center flex items-center rounded-md mb-10">
                  <img
                    src="/images/ChatGPT Image Sep 26, 2025, 03_33_29 PM.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    Project Overview
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Collecting data is often the most critical—and complex—module
                  to implement in any information-driven system. Our platform’s
                  goal is to centralize job listings and recommend the best
                  opportunities available online. But how can this be achieved
                  efficiently, given the scattered nature of job postings across
                  the web?
                </p>
                <img src="/images/image-min.png" alt="" className="py-8 " />

                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    Why Automation Was Essential
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Most major job platforms, such as LinkedIn, Indeed, and
                  DreamJobMaroc, do not provide public or free APIs for direct
                  data access. Manually entering listings would not only be
                  time-consuming but also unsustainable over the long term. This
                  challenge raised an essential question: how could we gather
                  large volumes of reliable data without overwhelming human
                  resources? The answer was the development of an intelligent,
                  automated data collection module—also known as a web scraping
                  agent.
                </p>
                <img
                  src="/images/image copy-min.png"
                  alt=""
                  className="py-8 "
                />

                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    Why Python?
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Python became the obvious choice for building these agents.
                  Its rich ecosystem of libraries—Selenium, BeautifulSoup,
                  Requests, and more—makes web scraping both powerful and
                  flexible. Beyond technical convenience, Python is the language
                  most widely used in the community for bypassing anti-bot
                  protections, offering a wealth of shared solutions and best
                  practices.
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    Challenges and Strategic Solutions
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="underline font-bold">
                    {" "}
                    Dynamic Content:{" "}
                  </span>{" "}
                  Many platforms generate listings with JavaScript, making
                  traditional HTML scraping insufficient. Anti-Bot Measures:
                  Sites often block automated access through rate limits,
                  CAPTCHAs, or authentication walls. To mitigate this, we
                  implemented user-agent rotation and adaptive timing
                  strategies, though full proxy rotation is still in
                  development. Maintenance: Changes to a platform’s layout
                  require manual updates to the agents. Automation for DOM
                  changes remains a future goal.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  <br />
                  <span className="underline font-bold">
                    {" "}
                    Auth Manager:
                  </span>{" "}
                  Some sites, like LinkedIn, require authentication before
                  accessing listings. Auth Manager handles login simulation,
                  cookie management, and request timing. Failed logins are
                  logged, and retry strategies with exponential backoff are
                  applied to minimize bot detection.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <br />
                  <span className="underline font-bold">ID Extractor:</span> Job
                  listings are first identified by unique IDs on result pages,
                  even those with infinite scroll or dynamic pagination.
                  Extracted IDs are stored temporarily, helping prevent
                  duplicates and errors in subsequent processing.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <br />
                  <span className="underline font-bold">
                    {" "}
                    Batch Management and Temporary Tables:
                  </span>{" "}
                  Job Ensuring data uniqueness was critical. We implemented a
                  batch-based system combined with PostgreSQL temporary tables
                  as buffers for collected IDs. This method optimizes insertion
                  queries, reduces inconsistency risks during interruptions, and
                  allows conditional processing (like duplicate filtering)
                  before final storage.
                </p>
                <div className="justify-center items-center flex w-full">
                  <img
                    src="/images/image copy 2-min.png"
                    alt=""
                    className="py-8 "
                  />
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  <br />
                  <span className="underline font-bold">
                    {" "}
                    The Data Extractor:
                  </span>{" "}
                  Turning IDs into Insights Once IDs are secured, the Data
                  Extractor accesses each detailed job page to pull essential
                  information: title, company, location, posting date,
                  description, experience level, number of applicants, and more.
                  This module leverages Selenium for dynamic content rendering
                  and BeautifulSoup for parsing, complemented by text-cleaning
                  tools like regex and NLTK. The final output is a standardized
                  JSON dataset, ready for downstream analysis and recommendation
                  algorithms.
                </p>
                <div className="justify-center items-center flex">
                  <img
                    src="/images/image copy 3-min.png"
                    alt=""
                    className="py-8 "
                  />
                </div>
                <p>
                  The system proved highly efficient and fast, automating data
                  collection across multiple platforms while minimizing errors
                  and duplicates. It reliably gathers and processes large
                  volumes of job listings, producing clean, standardized, and
                  actionable data. This enables our platform to deliver timely
                  and relevant recommendations, all while significantly reducing
                  manual effort and ensuring scalability.
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
