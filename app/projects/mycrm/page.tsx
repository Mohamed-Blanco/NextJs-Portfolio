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
} from "@tabler/icons-react";
import Link from "next/link";

export default function JobScraper() {
  const techStack = [
    {
      name: "Symfony",
      icon: IconCode,
      color: "bg-purple-500/20 text-purple-400",
    },
    { name: "PHP 8.3", icon: IconCode, color: "bg-blue-500/20 text-blue-400" },
    {
      name: "MySQL",
      icon: IconDatabase,
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      name: "Docker",
      icon: IconBrandGithub,
      color: "bg-gray-500/20 text-gray-400",
    },
    {
      name: "Jenkins",
      icon: IconBrandGithub,
      color: "bg-red-500/20 text-red-400",
    },
    {
      name: "Ansible",
      icon: IconBrain,
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      name: "Prometheus",
      icon: IconClock,
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Grafana",
      icon: IconEye,
      color: "bg-yellow-500/20 text-yellow-400",
    },
    { name: "Bootstrap", icon: IconTag, color: "bg-pink-500/20 text-pink-400" },
    {
      name: "SonarQube",
      icon: IconCode,
      color: "bg-indigo-500/20 text-indigo-400",
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
                MyCRM Pro – Symfony CRM with Full DevOps Integration{" "}
              </h1>

              <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <IconCalendar size={16} />
                  <span>Published: May, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock size={16} />
                  <span>4min read</span>
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
                  href="https://gitlab.com/symfonygroup3/symfony_devops_exam"
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
                <img src="/images/mycrm.jpeg" alt="" className="py-8 " />
                <p className="text-gray-300 leading-relaxed text-lg">
                  Managing client data and invoices can be cumbersome without a
                  reliable system. MyCRM Pro was designed to streamline these
                  processes with a modern, secure, and scalable CRM built on
                  Symfony and Bootstrap, supported by a complete DevOps pipeline
                  including Docker, Jenkins, GitLab CI, Ansible, Prometheus, and
                  Grafana.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    The Challenge
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Businesses need secure and efficient ways to manage clients,
                  invoices, and access permissions. Manual tracking is prone to
                  errors and delays, while traditional CRMs often lack
                  flexibility or automation. How could a system ensure fast,
                  reliable operations while maintaining strong security and
                  continuous deployment?*
                  <br />
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    The Solution
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We built MyCRM Pro with a clean, modular architecture
                  following SOLID principles. The system is organized around
                  services, DTOs, and repositories, separating concerns between
                  the front-end and back-end. Security is central: passwords are
                  hashed, authentication uses a custom login field, and Voters
                  control access to clients and invoices. CSRF protection is
                  applied to all sensitive forms.
                  <ul className="flex flex-col gap-5">
                    <br />
                    <li>
                      Entities & Services: Users, Clients, and Invoices are
                      managed through dedicated services and interfaces,
                      including dynamic invoice number generation.
                    </li>
                    <li>
                      Frontend: Responsive dashboards and modals, built with
                      Bootstrap and FontAwesome, provide a smooth user
                      experience.
                    </li>
                    <li>
                      Database: MySQL stores client and invoice data, populated
                      via seeding scripts for quick setup.
                    </li>
                  </ul>
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    DevOps & Automation{" "}
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The project integrates a full DevOps stack to ensure fast
                  deployment, code quality, and monitoring:
                </p>
                <ul className="flex flex-col gap-5">
                  <li>
                    Docker: Encapsulates Symfony (PHP 8.3 FPM), Nginx, MySQL,
                    PhpMyAdmin, Jenkins, SonarQube, Prometheus, and Grafana.
                  </li>
                  <li>
                    CI/CD: Jenkins pipelines automate composer installation,
                    code analysis with SonarQube, Docker builds, and Ansible
                    deployment.
                  </li>
                  <li>
                    Monitoring: Prometheus collects real-time metrics from
                    Symfony endpoints, while Grafana visualizes response times,
                    request counts, and resource usage.
                  </li>
                </ul>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-[#BDB5AA] m-0">
                    <br />
                    Results
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The CRM proved fast, efficient, and reliable. Users can
                  securely manage clients and invoices with minimal effort,
                  while automated workflows and DevOps pipelines ensure rapid
                  updates and consistent deployment. The system provides
                  real-time visibility into performance, enforces strict
                  security measures, and supports scalability, making it a
                  robust solution for modern business management.
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
