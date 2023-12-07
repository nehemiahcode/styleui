"use client";
import Image from "next/image";
import MyImage from "@/public/shoes-1.webp";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

export default function Section1() {
  const router = useRouter();
  return (
    <section className="  w-full h-auto lg:px-16 md:px-5 xl:px-20 sm:px-3 px-3">
      <h1 className="  font-bold text-white py-3 dark:text-black text-4xl">
        Introduction
      </h1>
      <p className=" text-white py-3 text-lg font-medium dark:text-black">
        Welcome to STYLEUI component Library!
      </p>
      <div className="flex items-center border justify-center h-[300px] w-[97%] lg:w-[60%] my-2">
        <Image
          src={MyImage}
          alt="Styleui welcome image"
          className=" h-auto object-cover w-auto"
        />
      </div>
      <div className=" border-b-1 px-1 border-slate-600 my-3 lg:w-[50%] sm:w-[80%] ">
        <h1
          id="what-is-styleui"
          onClick={() => router.push("#what-is-styleui")}
          className="font-bold text-xl  cursor-default md:cursor-pointer text-white dark:text-black"
        >
          What is StyleUI?
        </h1>
        <p className="text-white py-3 text-sm dark:text-black">
          StyleUI is a UI library for React that helps you build beautiful and
          accessible user interfaces. Created on top of Tailwind CSS and React
          Aria, which also works in hand with other Ui component libraries to
          speed up customization.
        </p>
        <p className=" text-white py-3 text-sm dark:text-black">
          StyleUI&apos;s primary goal is to streamline the development process,
          offering a beautiful and adaptable system design for an enhanced user
          experience.
        </p>
      </div>

      <div className=" my-3 lg:w-[50%] px-2 sm:w-[80%]">
        <h1
          id="how-is-styleui-related-to-tailwindcss"
          onClick={() => router.push("#how-is-styleui-related-to-tailwindcss")}
          className=" text-white  cursor-default md:cursor-pointer dark:text-black font-semibold py-4 text-xl"
        >
          How is StyleUi related to TailwindCSS?
        </h1>
        <ul className=" text-sky-500 font-bold text-lg">
          {" "}
          <li>TailwindCSS:</li>
        </ul>
        <p className="  text-white py-3 text-sm dark:text-black">
          Tailwind CSS is a CSS Framework that provides atomic CSS classes to
          help you style components, leaving you to handle lots of other things
          like accessibility, component composition, keyboard navigation, style
          overrides, etc.
        </p>

        <ul className=" text-sky-500 font-bold  text-lg">
          <li>StyleUI:</li>
        </ul>
        <p className="  text-white py-3 text-sm dark:text-black">
          StyleUi is a UI library for React that combines the power of
          TailwindCSS with React and other external UI libraries to provide a
          complete components &bracket;logic and styles&bracket; for building accessible and
          customizable user interfaces. Since STyleUI uses TailwindCSS as its
          style engine, you can use all TailwindCSS classes within your NextUI
          components, ensuring optimal compiled CSS size.
        </p>
      </div>

      <div className=" my-3 lg:w-[50%] px-2  sm:w-[80%]">
        <h1
          id="does-style-ui-use-runtime-css?"
          onClick={() => router.push("#does-style-ui-use-runtime-css?")}
          className=" text-white cursor-default md:cursor-pointer dark:text-black font-semibold py-4 text-xl"
        >
          Does StyleUI use runtime CSS?
        </h1>
        <p className="  text-white py-3 text-sm dark:text-black">
          No, As StyleUI uses TailwindCSS as its style engine, it generates CSS
          at build time, eliminating the need for runtime CSS. This means that
          StyleUI is fully compatible with the latest React and Next.js
          versions.
        </p>

        <h1
          id="can-i-use-styleui-with-other"
          onClick={() => router.push("#can-i-use-styleui-with-other")}
          className=" text-white  cursor-default md:cursor-pointer dark:text-black font-semibold py-4 text-xl"
        >
          Can I use StyleUi with other front-end frameworks or libraries, such as
          Vue or Angular?
        </h1>
        <p id="2" className="  text-white py-3 text-sm dark:text-black">
          No, StyleUI is specifically designed for React as it is built on top of
          React Aria. However, you can still use the NextUI components styling
          part with other frameworks or libraries.
        </p>
        <div className="flex items-center justify-end">
          <Button
            size="sm"
          
            onClick={() => router.push("/installation")}
            endContent={<FaArrowRight />}
            className="text-black py-1 bg-white border "
          >
            Setup
          </Button>
        </div>
      </div>
    </section>
  );
}
