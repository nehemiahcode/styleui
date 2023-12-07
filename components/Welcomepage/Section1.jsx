"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Section1() {
  const router = useRouter();
  return (
    <section className=" relative h-[auto]">
      <section className=" relative z-[99]  py-10 ">
        <h1 className=" lg:w-[60%] sm:w-[70%] w-[97%] mx-auto xl:w-[70%] py-4 font-bold lg:text-5xl  sm:text-4xl text-4xl text-center dark:text-gray-800 text-white ">
          Build modern websites regardless of your design skills.
        </h1>
        <p className=" font-medium text-center px-2  dark:text-gray-800 text-white">
          Build faster apps with beautiful, responsive UI components with modern
          design, 100% free and open-source.
        </p>
        <div className="flex flex-col  sm:flex-row justify-center px-4 w-full items-center gap-4 my-3">
          <Button
            onClick={() => router.push("/component", {scroll:false})}
            className=" bg-blue-500 shadow-xl w-full sm:w-auto"
            endContent={
              <span className=" text-lg">
                <HiOutlineArrowNarrowRight />
              </span>
            }
          >
            Get started
          </Button>
          <Button
            onClick={() => router.push("", {scroll:false, prefetch:false})}
            className="w-full sm:w-auto shadow-xl"
            startContent={
              <span className=" text-xl">
                <BsGithub />
              </span>
            }
          >
            Github
          </Button>
        </div>
      </section>
      <div className="div absolute inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl"></div>
    </section>
  );
}
