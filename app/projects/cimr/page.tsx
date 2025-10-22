import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { Meteors } from "@/components/ui/meteors";

export default function Oppseeker() {
  return (
    <div className="h-full">
      <div className="  text-white z-20 flex justify-center flex-col mt-[-5rem] h-full gap-20 items-center overflow-y-auto min-h-screen bg-[#2C3647]">
        <Meteors number={30} className="  z-10" />
        <div className="bg-[#1A1F28] w-[80%] pt-50 min-h-screen px-8">
          <header>
            <p className="text-4xl font-bold pb-10">
              OppSeeker Morocco's first AI-powered job search tool{" "}
            </p>
            <p className="text-lg font-bold">
              Published : August 29,2025 | Tags:{" "}
              <span className="">
                #NLP #AI #Scrapping #Flask #SpringBoot #Nextjs{" "}
              </span>{" "}
            </p>
          </header>
          <main className="flex flex-col py-10 gap-10">
            <img src="/images/oppsseker-min.png" alt="" className="" />
            <section className="flex flex-col gap-5 ">
              <p className="text-xl font-bold">Project Overview : </p>
              <p>
                OppSeeker is Morocco’s first AI-powered job search platform. It
                helps candidates discover opportunities efficiently by
                leveraging Natural Language Processing (NLP) and content-based
                recommendation systems. Unlike traditional job boards, OppSeeker
                centralizes all postings from multiple sources and intelligently
                matches them to users’ profiles, saving time and improving
                accuracy.
              </p>
            </section>
            <section className="flex flex-col gap-5 ">
              <p className="text-xl font-bold">Problem Statement : </p>
              <p>
                Finding relevant internships or jobs in Morocco is fragmented
                and time-consuming. Many postings are outdated, scattered across
                multiple platforms, and hard to filter efficiently. Existing
                tools didn’t provide accurate matches or were not free. The
                challenge was to create a centralized, intelligent system that
                reduces manual search effort and improves match quality.
              </p>
            </section>
            <section className="flex flex-col gap-5 ">
              <p className="text-xl font-bold">Solution & Architecture : </p>
              <p>
                OppSeeker is built as a microservices platform, each with a
                dedicated role:
              </p>
              <img src="/images/Search-min.png" alt="" className="" />
            </section>
            <section className="flex flex-col gap-5 ">
              <p className="text-xl font-bold">Summary : </p>
              <p>
                OppSeeker demonstrates a full-stack, AI-powered solution solving
                real-world problems in job searching. It combines data
                engineering, NLP, recommendation systems, and scalable
                microservices architecture, making it an impressive showcase for
                any portfolio.
              </p>
            </section>
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}
