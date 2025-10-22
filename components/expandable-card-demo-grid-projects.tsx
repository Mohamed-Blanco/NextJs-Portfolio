"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="text-left fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="">
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between  items-start p-4 gap-5 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className=" text-neutral-700 text-left font-bold dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400  text-left text-base"
                    >
                      {active.description}{" "}
                      <a
                        href={active.ctaLink}
                        className="underline text-blue-500"
                      >
                        View All
                      </a>
                    </motion.p>

                    {/* Tech Stack Display */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-3"
                    >
                      <div className="flex flex-wrap gap-2">
                        {active.techStack?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-300 shadow-md dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-[#16181C] dark:hover:bg-neutral-800 rounded-xl cursor-pointer group bg-[#B8B5AA] h-full"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="border-2 rounded-lg border-gray-200  "
              >
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top bg-white"
                />
              </motion.div>

              <div className="flex justify-center flex-col transition-all duration-150">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" text-[#16181C] group-hover:text-white dark:text-neutral-200  text-left text-base font-bold"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className=" group-hover:text-white text-[#16181C] text-left text-sm"
                >
                  {card.description}
                </motion.p>

                {/* Tech Stack Preview */}
                <div className="mt-2">
                  <div className="flex flex-wrap gap-1">
                    {card.techStack?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#16181C] group-hover:bg-white text-white group-hover:text-[#16181C] rounded text-xs font-medium transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                    {card.techStack && card.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-[#16181C] group-hover:bg-white text-white group-hover:text-[#16181C] rounded text-xs font-medium transition-colors duration-150">
                        +{card.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Built from scratch high performance in memory Database in C.",
    date: "February 2024 ",
    title: "In Memory Database!",
    src: "images/RESP.jpg",
    ctaText: "View",
    ctaLink: "/projects/redisclone",
    techStack: [
      "C",
      "TCP",
      "Non-blocking I/O",
      "Event-driven Architecture",
      "Systems Programming",
    ],
    content: () => {
      return (
        <p>
          I developed a high-performance in-memory database in C as a demo
          project, showcasing low-level systems programming and scalable server
          design. The system features a custom TCP server built from scratch
          using non-blocking I/O and an event-driven architecture, enabling
          efficient handling of concurrent client connections.
        </p>
      );
    },
  },
  {
    description:
      " AI-powered platform that centralizes job opportunities across multiple sources ",
    title: "OppSeeker",
    date: "February 2024 ",
    src: "/images/oppsseker-min.png",
    ctaText: "View",
    ctaLink: "/projects/oppseeker",
    techStack: [
      "Next.js",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Ansible",
      "Grafana",
      "NLP",
      "React",
    ],
    content: () => {
      return (
        <p>
          OppSeeker is an AI-powered job search platform that automates
          multi-source job scraping, builds structured datasets with NLP, and
          delivers personalized recommendations. It integrates a Next.js
          frontend with a Spring Boot + MySQL backend, ensuring clean
          architecture and scalability. The platform is fully containerized and
          deployed with Docker, Ansible, and Grafana for monitoring and
          performance.
        </p>
      );
    },
  },
  {
    description: "Fully high speed automated Linkdein job scrapper .",
    date: "February 2024 ",
    title: "CareerRadar !",
    src: "/images/careerRadar.jpg",
    ctaText: "View",
    ctaLink: "/projects/jobscrapper",
    techStack: [
      "Python",
      "Selenium",
      "Flask",
      "SpaCy",
      "NumPy",
      "PostgreSQL",
      "ETL",
      "NLP",
    ],
    content: () => {
      return (
        <p>
          JobSeeker is a high-speed automated job scraper that collects postings
          from LinkedIn, Indeed, and DreamJob using Selenium + Flask API,
          retrieving over 4,000 jobs in under 20 minutes. A Python ETL pipeline
          with NLP (SpaCy, NumPy) structures job descriptions into skill-based
          datasets stored in PostgreSQL.
        </p>
      );
    },
  },
  {
    description: "Rebuilt CIMR's legacy Excel-based project tracker .",
    date: "February 2024 ",
    title: "CIMR DSI Manager",
    src: "/images/CIMRloginpage copy-min.png",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/CIMR-Backend",
    techStack: [
      "Angular",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Jenkins",
      "GitHub",
      "CI/CD",
    ],
    content: () => {
      return (
        <p>
          Rebuilt CIMR's legacy Excel tracker into a secure Angular + Spring
          Boot web app, enabling real-time management of 50+ projects and
          eliminating manual workflows. Integrated Spring Security with JWT for
          authentication and collaborated on a Jenkins CI/CD pipeline with
          GitHub webhooks to automate deployment.
        </p>
      );
    },
  },
  {
    description:
      "Development and Industrialization of a Complete CRM with Symfony & DevOps",
    title: "MyCRM Pro",
    src: "/images/mycrm-min.jpeg",
    date: "February 2024 ",
    ctaText: "View",
    ctaLink: "/projects/mycrm",
    techStack: [
      "Symfony 6",
      "Bootstrap",
      "Docker",
      "Jenkins",
      "GitLab CI",
      "SonarQube",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    content: () => {
      return (
        <p>
          Developed and industrialized a full CRM system with Symfony 6,
          featuring modular architecture, secure authentication, and a
          responsive Bootstrap interface. On the DevOps side, implemented a full
          CI/CD pipeline with Docker, Jenkins, GitLab CI, SonarQube, Ansible,
          and real-time monitoring using Prometheus + Grafana, ensuring code
          quality, scalability, and automated deployment.
        </p>
      );
    },
  },
  {
    description: "Built E-comerce website to help small pharmacies in PHP.",
    date: "February 2024 ",
    title: "E-comerce Pharma ",
    src: "/images/Pharmacieweb-min.png",
    ctaText: "View",
    ctaLink: "/projects/ecomerce",
    techStack: ["PHP", "Custom MVC", "MySQL", "HTML", "CSS", "JavaScript"],
    content: () => {
      return (
        <p>
          Developed an E-commerce platform for small pharmacies using pure PHP
          with a custom MVC architecture, built entirely without frameworks or
          external libraries. Implemented core features like product management,
          cart handling, and order workflows from scratch, ensuring full control
          over the system's design and performance.
        </p>
      );
    },
  },
  {
    description:
      "Desktop Tracking & Management application for pharmacies with JavaFX.",
    date: "February 2024 ",
    title: "Pharma !",
    src: "/images/New Project-min.png",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/Pharmacie-Management-System",
    techStack: ["JavaFX", "MySQL", "Java", "Desktop Application"],
    content: () => {
      return (
        <p>
          Built a desktop pharmacy management system with JavaFX, streamlining
          inventory, suppliers, user roles, and sales tracking. Integrated with
          a MySQL database, the application provided real-time data access and
          performance analytics, improving operational efficiency for
          pharmacies.
        </p>
      );
    },
  },
  {
    description: "Desktop Depot Management application in C++ using QT .",
    date: "February 2024 ",
    title: "C++ Desktop App ",
    src: "/images/c++-min.png",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/Pharmacie-depots-QMake",
    techStack: ["C++", "Qt", "MySQL", "Desktop Application"],
    content: () => {
      return (
        <p>
          Developed an advanced inventory management system in C++ with Qt,
          enabling efficient categorization, scaling, and tracking of
          pharmaceutical stock. Designed for seamless integration with a shared
          MySQL database, the solution ensured accurate, real-time
          synchronization and supported business growth through scalable
          inventory control.
        </p>
      );
    },
  },
  {
    description: "Developed an functional infinty qoutes scroll Android app .",
    title: "Infinity Quotes !",
    date: "February 2024 ",
    src: "/images/icon-foreground-min.png",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/android-qoutes-application",
    techStack: [
      "Angular",
      "Capacitor",
      "Android",
      "TypeScript",
      "Mobile Development",
    ],
    content: () => {
      return (
        <p>
          Developed Infinity Quotes, an Android app built with Angular and
          Capacitor, featuring an infinite scroll of quotes with smooth
          performance and responsive design. The app demonstrated cross-platform
          mobile development using modern web technologies packaged for native
          deployment.
        </p>
      );
    },
  },
  {
    description:
      "This project is part of Angela Yu’s Web Development Bootcamp 2021 .",
    title: "Simpsons Memory Game !",
    date: "February 2024 ",
    src: "/images/simpsongame.png",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/android-qoutes-application",
    techStack: [
      "Angular",
      "Capacitor",
      "Android",
      "TypeScript",
      "Mobile Development",
    ],
    content: () => {
      return (
        <p>
          You are given 4 colors, each paired with a unique sound. The game
          plays a sequence by lighting up a color and playing its sound. Your
          task is to repeat the sequence by clicking the corresponding colors in
          the correct order. Each level adds one more color and sound to the
          sequence. Your goal is to remember the longest possible sequence
          without making a mistake.
        </p>
      );
    },
  },
  {
    description: "Developed and published an Moroccan Recipes on android app.",
    title: "Recipy ?",
    src: "/images/recipy-min.png",
    date: "February 2024 ",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/android-cooking-recipes",
    techStack: [
      "Angular",
      "Capacitor",
      "Firebase",
      "Android",
      "TypeScript",
      "API Integration",
    ],
    content: () => {
      return (
        <p>
          Developed and published Recipy, an Android app built with Angular and
          Capacitor that delivers Moroccan recipes by consuming an external API.
          Integrated with Firebase for data management and user interactions,
          the app provides a responsive and user-friendly mobile experience.
        </p>
      );
    },
  },
  {
    description: "Website to help people adopt Dogs.",
    title: "Tindog",
    src: "/images/tindog-min.png",
    date: "February 2024 ",
    ctaText: "View",
    ctaLink: "https://github.com/Mohamed-Blanco/dogs-adoptation",
    techStack: [
      "Bootstrap 4",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    content: () => {
      return (
        <p>
          Built Tindog, a responsive website for dog adoption, as part of the
          Angela Yu Full Web Bootcamp in 2021. Developed using Bootstrap 4, the
          platform supports both desktop and mobile devices, providing a
          user-friendly interface to browse and adopt dogs.
        </p>
      );
    },
  },
  {
    description: "Built an Weather app inspired by the ios weather app",
    title: "Weather Phone App",
    src: "/images/sunsetimg-min.jpg",
    date: "February 2024 ",
    ctaText: "View",
    ctaLink: "/images/sunsetimg-min.jpg",
    techStack: [
      "HTML",
      "JavaScript",
      "Bootstrap",
      "Weather API",
      "Responsive Design",
    ],
    content: () => {
      return (
        <p>
          Developed a Weather Phone App inspired by the iOS Weather app, using
          HTML, JavaScript, and Bootstrap. The app consumes an external weather
          API to provide real-time weather updates with a responsive,
          mobile-friendly interface.
        </p>
      );
    },
  },
];

const Index = () => {
  return <ExpandableCardDemo />;
};

export default Index;
