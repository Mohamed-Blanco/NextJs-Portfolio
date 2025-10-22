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
    description: "AI in Job Search!",
    title: "Exploiting NLPs for job search",
    src: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*0TNbqSW1gIJDCwtlQDgrqw-min.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    techStack: ["Meduim", "Linkdein"],
    content: () => {
      return (
        <p>
          OppSeeker isn’t just another LinkedIn or Indeed clone. We didn’t build
          it to show off technical skills. We built it because we couldn’t find
          a free tool like it . It’s basically a centralized platform that
          gathers all job postings in one place and filters them so you only get
          the ones that match you. Instead of trying every possible keyword and
          finding just one or two jobs — only to realize they were posted 6
          months ago LOL 😂 , OppSeeker saves you the time & effort..
        </p>
      );
    },
  },
];

const Index = () => {
  return <ExpandableCardDemo />;
};

export default Index;
