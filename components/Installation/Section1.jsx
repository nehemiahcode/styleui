"use client";
import { Snippet } from "@nextui-org/react";
import Link from "next/link";
import { NPMS } from "../Tabview";

function Section1() {
  const List = [
    { name: "React 18", link: "" },
    { name: "Tailwind CSS 3", link: "" },
    { name: "Framer Motion 4", link: "" },
  ];
  return (
    <section className=" w-[95%] sm:w-[80%] lg:w-[70%] mx-auto  xl:w-[68%] 2xl:w-[70%]  py-5">
      <div className="  w-[100%]">
        <h1 className=" text-white font-bold py-2 text-4xl dark:text-black">
          Installation
        </h1>
        <p className=" text-white dark:text-black">Requirements:</p>
        <ul className=" border-b-1 border-slate-500">
          {List.map((list, idx) => (
            <li key={idx} className=" flex items-center gap-x-2 py-1">
              <Link
                href={list.link}
                scroll={false}
                prefetch={false}
                className=" text-blue-600 font-medium list-inside list-disc "
              >
                {list.name}
              </Link>
              <span className=" text-white font-medium dark:text-black">
                or later
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" my-5 w-full">
        <h1 className="  text-white  dark:text-black">
          To use StyleUI in your project, you need to follow the following
          steps:
        </h1>
        <NPMS />
        <div>
          <p className="text-white  dark:text-black py-2">
            This icon Library <Link href={'https://react-icons.github.io/react-icons'} className="  underline font-medium text-blue-500">React icons</Link> is recomended so you can choose to install it or
            not
          </p>
          <Snippet className=" bg-blue-600 dark:bg-black font-medium dark:text-white text-white">
            react-icons
          </Snippet>
        </div>
      </div>
    </section>
  );
}

export default Section1;
