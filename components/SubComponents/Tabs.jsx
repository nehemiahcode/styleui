"use client";
import Codelayout, { TabLayout } from "../Codelayout";
import { Tab, Tabs, Card, CardBody, Snippet } from "@nextui-org/react";
import TabView, { TabCode } from "../Tabview";
import { useState } from "react";

const code = `
import { Tab, Tabs, Card, CardBody } from "@nextui-org/react";

 export default function Tabs() {
  return (
    <Tabs aria-label="Options">
    <Tab key="photos" title="Photos">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
      </Card>
    </Tab>
    <Tab key="music" title="Music">
      <Card>
        <CardBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </CardBody>
      </Card>
    </Tab>
    <Tab key="videos" title="Videos">
      <Card>
        <CardBody>
          Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CardBody>
      </Card>
    </Tab>
  </Tabs>
  )
}`;
const code2 = `
import {useState} from "react";

export default function Tabs() {
  const [active, setActive] = useState("1");
  const Tabitems = [
    { argument: "1", buttonText: "Tab1", content: "Tab1" },
    { argument: "2", buttonText: "Tab2", content: "Tab2" },
    { argument: "3", buttonText: "Tab3", content: "Tab3" },
  ];

  return (
    <div>
    <div className=" flex items-center py-3 gap-x-4">
    {Tabitems.map((items, index) => (
      <button
        type="button"
        key={index}
        className={\${
          active === items.argument &&
          " bg-white text-blue-500"
        } text-black duration-300 bg-blue-600 rounded-md px-5 py-1}
        onClick={() => setActive(items.argument)}
      >
        {items.buttonText}
      </button>
    ))}
    </div>
    {active === "1" && (
      <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
        Tab1
      </div>
    )}
    {active === "2" && (
      <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
        Tab2
      </div>
    )}
    {active === "3" && (
      <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
        Tab3
      </div>
    )}
  </div>
  )
}`;

export default function Tabss() {
  const [selected, setSelected] = useState("1");
  const [active, setActive] = useState("1");
  const Tabitems = [
    { argument: "1", buttonText: "Tab1", content: "Tab1" },
    { argument: "2", buttonText: "Tab2", content: "Tab2" },
    { argument: "3", buttonText: "Tab3", content: "Tab3" },
  ];

  return (
    <>
      <div className="flex my-5 w-full flex-col">
        <Snippet className=" bg-blue-600 text-white w-[fit-content] my-3">
          npm i nextui/react framer-motion react-icons
        </Snippet>
        <h1 className="font-bold text-white dark:text-black text-3xl">
          Tabs with External packages
        </h1>
        <p className="py-2 text-white dark:text-black">
          Tabs organize content into multiple sections and allow users to
          navigate between them.
        </p>

        <Tabs
          selectedKey={selected}
          onSelectionChange={setSelected}
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none px-2 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-10",
            tabContent:
              "group-data-[selected=true]:text-[#06b6d4] text-white font-medium text-base dark:text-gray-900",
          }}
        >
          <Tab key={"1"} title={<TabView />}>
            <div className="flex  flex-col">
              <Tabs aria-label="Options">
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </Tab>
          <Tab key={"2"} title={<TabCode />}>
            <Codelayout code={code} filename={"tabs.jsx"} />
          </Tab>
        </Tabs>
      </div>
      <div className="flex my-10 w-full flex-col">
        <h1 className="font-bold text-white dark:text-black text-3xl">
        Custom Tabs
        </h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div>
              <div className=" flex items-center py-3 gap-x-4">
                {Tabitems.map((items, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`${
                      active === items.argument &&
                      " bg-white text-blue-500"
                    } text-black duration-300 bg-blue-600 rounded-md px-5 py-1`}
                    onClick={() => setActive(items.argument)}
                  >
                    {items.buttonText}
                  </button>
                ))}
              </div>

              {active === "1" && (
                <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
                  Tab1
                </div>
              )}
              {active === "2" && (
                <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
                  Tab2
                </div>
              )}
              {active === "3" && (
                <div className=" bg-white rounded-md px-2 py-2 text-black dark:text-white">
                  Tab3
                </div>
              )}
            </div>
          </Tab>

          <Tab key={"code"} title={<TabCode />}>
            <Codelayout code={code2} filename={"tabs.jsx"} />
          </Tab>
        </TabLayout>
      </div>
    </>
  );
}
