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
    src: "data:image/jpeg;base64,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",
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
