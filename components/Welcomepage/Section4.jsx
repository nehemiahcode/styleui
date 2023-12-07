"use client";
import { Button } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
export default function Section4() {
  const Cards = [
    {
      quote: `  
      Make beautiful, modern, and fast websites/applications regardless of your design experience.`,
      icon: <FaOpencart />,
      name: "Getting Started",
    },
    {
      quote: `StyleUi is fully compatible with the new Next.js 13 app/ directory structure.`,
      icon: <SiNextdotjs />,
      name: "StyleUi + Next.js",
    },
  ];

  return (
    <section className="  w-full h-auto py-16 px-2 lg:px-10 flex flex-col lg:flex-row items-center gap-x-3">
      <div >
        <h1 className=" text-4xl py-2 text-white dark:text-black font-bold">
          Let&apos;s make the Web Prettier
        </h1>
        <p className=" text-sm text-white pb-2 dark:text-black font-medium">
          Experience it firsthand and show us your creations!
        </p>
        <div className=" flex gap-x-3 my-3 items-center">
          <Button className=" bg-blue-500 text-white rounded-full">
            Get started
          </Button>
          <Button startContent={<BsGithub />} className=" bg-slate-800 text-white">
            Github
          </Button>
        </div>
      </div>

      <div className=" w-full grid py-2 lg:p-0 sm:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-2">
        {Cards.map((card, index) => (
          <div
            key={index}
            className=" w-[100%] bg-[rgba(30,41,59,0.9)] border-[1px] dark:border-slate-300 border-slate-600 dark:bg-white shadow-xl py-3 px-2 h-[auto] text-white rounded-lg"
          >
            <div className=" flex gap-2 items-center">
              <span className=" rounded-full p-3 flex items-center justify-center bg-purple-800 text-xl text-white">
                {card.icon}
              </span>
              <h1 className=" text-white dark:text-gray-800 font-semibold text-[1rem]">
                {card.name}
              </h1>
            </div>
            <blockquote className=" text-sm py-3 dark:text-gray-800 text-white">
              {card.quote}
            </blockquote>
          </div>
        ))}
      </div>
   
    </section>
  );
}
