"use client"
import { Tab } from "@nextui-org/react";
import Codelayout, { TabLayout } from "../Codelayout";
import TabView, { TabCode } from "../Tabview";

const code = `export  function Accordions() {
  return (
    <div className="flex w-full flex-col">
      <TabLayout>
        <Tab key={"preview"} title="Preview">
          Accordion1
        </Tab>
        <Tab key={"preview2"} title="Preview2">
      <Codelayout code={code} filename={"accordion.jsx"}/>
        </Tab>
      </TabLayout>
    </div>
  );
}`;

export default function Accordions() {
  return (
    <div className="flex w-full flex-col">
      <TabLayout>
        <Tab key={"preview"} title={<TabView/>}>
          Accordion1
        </Tab>
        <Tab key={"preview2"} title={<TabCode/>}>
          <Codelayout code={code} filename={"accordion.jsx"} />
        </Tab>
      </TabLayout>
    </div>
  );
}
