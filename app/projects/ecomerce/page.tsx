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
  IconTag,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function JobScraper() {
  const techStack = [
    { name: "PHP", icon: IconCode, color: "bg-blue-500/20 text-blue-400" },
    {
      name: "MySQL",
      icon: IconDatabase,
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: IconTag,
      color: "bg-teal-500/20 text-teal-400",
    },
    {
      name: "JavaScript",
      icon: IconBrain,
      color: "bg-yellow-500/20 text-yellow-400",
    },
    {
      name: "jQuery",
      icon: IconWorld,
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      name: "Node.js",
      icon: IconCode,
      color: "bg-green-500/20 text-green-400",
    },
    { name: "Bootstrap", icon: IconTag, color: "bg-pink-500/20 text-pink-400" },
    { name: "PHP Mailer", icon: IconMail, color: "bg-red-500/20 text-red-400" },
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
                E-comerce website to help small pharmacies in PHP.
              </h1>

              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <IconCalendar size={16} />
                  <span>Published: June, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={16} />
                  <span>7min read</span>
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
                  href="https://github.com/Mohamed-Blanco/e-commerce-website"
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
                {" "}
                <div className="flex justify-center ">
                  <img
                    src="/images/ecomerce/image copy 2-min.png"
                    alt=""
                    className="py-8 "
                  />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    Why Build an E-Commerce Site for a Pharmacy?
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  In today’s fast-paced world, accessibility and convenience are
                  key. Traditional pharmacies are limited by opening hours and
                  physical location, which can be restrictive for clients who
                  need medications or healthcare products at any time. By
                  creating an online pharmacy platform, customers gain 24/7
                  access to products and services, allowing them to shop from
                  home, save time, and enjoy a seamless experience—especially
                  beneficial for the elderly, people with mobility constraints,
                  or those living in remote areas.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <br />
                  Beyond convenience, an online platform enables pharmacies to
                  reach a broader audience. Customers outside the immediate
                  geographic area can now browse products, while integrated
                  marketing tools such as newsletters, promotions, and loyalty
                  programs help attract and retain clients. The platform thus
                  becomes both a sales channel and a marketing engine, extending
                  the pharmacy’s reach and impact.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    Functional and Technical Overview{" "}
                  </h2>
                </div>
                <ul className="flex flex-col gap-5">
                  <li>
                    User Access: Anonymous users can browse products and add
                    items to their cart, while registered users have full access
                    to browse, select, and complete purchases seamlessly.
                  </li>
                  <li>
                    Landing Page & Product Listing: Displays up to 12 products
                    per page with filtering options by category or price,
                    arranged neatly in rows for easy navigation.
                  </li>
                  <div className="flex justify-center ">
                    <img
                      src="/images/ecomerce/image-min.png"
                      alt=""
                      className="w-[50%]"
                    />
                  </div>

                  <li>
                    Shopping Cart & Favorites: Customers can adjust quantities,
                    remove items, and manage favorites locally before checkout.
                  </li>
                  <div className="flex justify-center ">
                    <img
                      src="/images/ecomerce/image copy-min.png"
                      alt=""
                      className="w-[50%]"
                    />
                  </div>

                  <li>
                    Authentication System: Secure account creation and login
                    using email and password ensure safe user access.
                  </li>
                  <li>
                    Contact & Support: Integrated contact form powered by PHP
                    Mailer enables efficient communication and handling of
                    client inquiries or complaints.
                  </li>
                  <li>
                    Informational Pages: "About Us" page provides details about
                    the pharmacy, its values, and FAQs, enhancing user trust.
                  </li>
                  <li>
                    Checkout: Simplified checkout process supporting credit card
                    payments, displaying total amount including VAT.
                  </li>
                  <div className="flex justify-center ">
                    <img
                      src="/images/ecomerce/image copy 3-min.png"
                      alt=""
                      className="w-[50%]"
                    />
                  </div>
                  <li>
                    Architecture & Technologies: Built on MVC structure with PHP
                    for server-side logic, MySQL for data storage, Tailwind CSS
                    for responsive design, JavaScript & jQuery for
                    interactivity, Node.js for dependency management, Bootstrap
                    for consistent UI, and PHP Mailer for reliable
                    communication.
                  </li>
                </ul>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    Results
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The pharmacy e-commerce platform is efficient, user-friendly,
                  and scalable. Customers can access the site at any time,
                  browse products, and complete purchases securely. The
                  combination of a responsive UI, dynamic content, and
                  integrated communication tools ensures a seamless experience
                  for both clients and staff. By leveraging modern web
                  technologies and following a clean architecture, the platform
                  reduces manual effort, supports a growing client base, and
                  lays the foundation for future enhancements and integrations.
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
