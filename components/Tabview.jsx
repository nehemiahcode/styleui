import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiNpmjsLine } from "react-icons/ri";
import { SiPnpm } from "react-icons/si";
import { LiaYarn } from "react-icons/lia";
import { TabLayout } from "./Codelayout";
import { Snippet, Tab } from "@nextui-org/react";

export default function TabView() {
  return (
    <span className="flex items-center space-x-2">
      <AiOutlineEye /> <span> preview</span>
    </span>
  );
}

export function TabCode() {
  return (
    <span className="flex items-center space-x-2">
      <BsCodeSlash /> <span> code</span>
    </span>
  );
}

export function NPMS() {
  const tabs = [
    {
      icon: <RiNpmjsLine />,
      name: "npm",
      code: "npm i @nextui-org/react framer-motion",
      color1: true,
    },
    {
      icon: <SiPnpm />,
      name: "Pnpm",
      code: "pnpm add @nextui-org/react framer-motion",
      color2: true,
    },
    {
      icon: <LiaYarn />,
      name: "Yarn",
      code: "yarn add @nextui-org/react framer-motion",
      color3: true,
    },
  ];
  return (
    <TabLayout>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={
            <span className=" flex gap-x-1">
              <span
                className={`${tab.color1 && "text-red-700"} ${
                  tab.color2 && "text-blue-500"
                } ${tab.color3 && "text-yellow-500"} text-xl`}
              >
                {tab.icon}
              </span>
              <span className=" text-gray-700">{tab.name}</span>
            </span>
          }
        >
          <Snippet
            size="sm"
            className=" bg-blue-600 dark:bg-black dark:text-white text-white"
          >
            {tab.code}
          </Snippet>
        </Tab>
      ))}
    </TabLayout>
  );
}
