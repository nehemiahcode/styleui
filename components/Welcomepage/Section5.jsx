"use client";
import { RiTwitterXLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function Section5() {
  const Cards = [
    {
      quote: `  
      For announcements, tips and general information.`,
      icon: <RiTwitterXLine />,
      name: "Twitter",
      url: "https://twitter.com/codehubby",
    },
    {
      quote: `To report bugs, request features and contribute to the project.`,
      icon: <BsGithub />,
      name: "Github",
      url: "https://github.com/nehemiahcode/styleui",
    },
  ];
  const router = useRouter();

  return (
    <section className=" py-6 px-2">
      <h1 className=" font-bold py-2 text-white text-center dark:text-black text-4xl">
        Community
      </h1>
      <p className=" text-sm text-white pb-2 dark:text-black text-center  font-medium">
        {" "}
        Get involved in our community. Everyone is welcome!
      </p>
      <div className=" w-full gap-3 grid lg:px-52 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-content-center place-items-center ">
        {Cards.map((card, index) => (
          <Card
            onClick={() => router.push(card.url)}
            isPressable
            key={index}
            className=" w-[100%] flex my-2  flex-col bg-[rgba(30,41,59,0.9)] border-[1px] dark:border-slate-300 border-slate-600 dark:bg-white shadow-xl py-3 px-2 h-[140px] text-white rounded-lg"
          >
            <div className=" flex gap-2 items-center">
              <span className=" rounded-full p-3 flex items-center justify-center text-2xl dark:text-black text-white">
                {card.icon}
              </span>
              <h1 className=" flex items-center gap-2  text-white dark:text-gray-800 font-semibold text-[1rem]">
                {card.name}
                <FiExternalLink />
              </h1>
            </div>
            <blockquote className=" text-md py-3 dark:text-gray-800 text-white">
              {card.quote}
            </blockquote>
          </Card>
        ))}
      </div>
    </section>
  );
}
