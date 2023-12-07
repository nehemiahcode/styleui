"use client";
import { GiFastArrow } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { MdAccessible } from "react-icons/md";
import { PiArrowsInSimple } from "react-icons/pi";

export default function Section2() {
  const Cards = [
    {
      title: "Fast",
      icon: <GiFastArrow />,
      quote:
        "Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.",
    },
    {
      title: "Unique DX",
      icon: <FaLaptopHouse />,
      quote:
        "StyleUi is fully-typed to minimize the learning curve, and provide the best possible developer experience.",
    },
    {
      title: "Responsive",
      icon: <PiArrowsInSimple />,
      quote:
        "Responsive designed components that look great on mobile, tablet and desktop.",
    },
    {
      title: "Accesible",
      icon: <MdAccessible />,
      quote:
        "Building websites that can be used by all individuals is one of our highest priorities.",
    },
  ];
  return (
    <section className=" py-16">
      <h1 className=" font-bold text-4xl text-center  dark:text-gray-800 text-white px-1">
        Web design best practices
      </h1>
      <p className="  font-medium text-center px-1 dark:text-gray-800 text-white py-2">
        We follow web design best practices for high quality components and
        templates.
      </p>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4  px-4 lg:px-10">
        {Cards.map((card, index) => (
          <div
            key={index}
            className=" bg-[rgba(30,41,59,0.9)] border-[1px] dark:border-slate-300 border-slate-600 dark:bg-white shadow-xl py-3 px-2 h-[auto] text-white rounded-lg"
          >
            <div className=" flex gap-2 items-center">
              <span className=" rounded-full p-3 flex items-center justify-center bg-purple-800 text-xl text-white">
                {card.icon}
              </span>
              <h1 className=" text-white dark:text-gray-800 font-semibold text-[1rem]">
                {card.title}
              </h1>
            </div>
            <blockquote className=" text-sm py-3 dark:text-gray-800 text-white">{card.quote}</blockquote>
          </div>
        ))}
      </section>
    </section>
  );
}
