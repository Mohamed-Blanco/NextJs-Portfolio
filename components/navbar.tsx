"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Navbar({ scrollY }: { scrollY: number }) {
  return (
    <div className="">
      <div
        className={`  border border-gray-300 bg-white w-[64%] px-4 py-3 shadow-md justify-center items-center backdrop-blur-sm ${
          scrollY > 700 ? "rounded-full " : "rounded-lg "
        } `}
      >
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <a href="/" className="flex gap-4 px-4 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>

              <p className="text-[1.3rem] font-bold hover:text-gray-700 transition-colors duration-200 cursor-pointer">
                OppSeeker
              </p>
            </a>

            <ul className="flex items-center gap-8 text-sm">
              <li className="flex items-center gap-2 hover:text-gray-700 cursor-pointer transition-all duration-200 group">
                <a href="https://www.linkedin.com/in/labiad-mohamed-499b3a1a7/">
                  {" "}
                  Developers
                </a>

                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </li>
              <li
                onClick={() => {
                  scrollTo(0, -4000);
                }}
                className="flex items-center gap-2 hover:text-gray-700 cursor-pointer transition-all duration-200 group"
              >
                Features
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </li>
            </ul>
          </div>

          <a
            href="/Login"
            className={`group bg-[#272725] hover:bg-gray-900 text-sm font-semibold text-white px-6 py-2 transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 ${
              scrollY > 700 ? "rounded-full" : "rounded-lg"
            }`}
          >
            Try Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
