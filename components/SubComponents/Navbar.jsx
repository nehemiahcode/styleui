"use client"
import { Tab } from "@nextui-org/react";
import { TabLayout } from "../Codelayout";
import TabView , {TabCode}from "../Tabview";


export default function Navbar() {
  return (
    <div className=" my-5 w-full flex">
      <h1 className="font-bold text-white dark:text-black text-3xl">404 Pages</h1>
      <p className="py-2 text-white dark:text-black">
        Footer display more information about a website and its located at the bottom of the site
      </p>
      <TabLayout>
        <Tab key={"previe"} title={<TabView/>}></Tab>
        <Tab key={"code"} title={<TabCode/>}></Tab>
      </TabLayout>
    </div>
  )
}
