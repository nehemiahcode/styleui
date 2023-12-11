"use client";
import { Button, Tabs } from "@nextui-org/react";
import { useState } from "react";
import SyntaxHightlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { RxCopy } from "react-icons/rx";
import { BiCheckDouble } from "react-icons/bi";

export default function Codelayout({ code, filename }) {
  const [copy, setCopy] = useState(false);
  return (
    <div className=" w-[100%] mx-auto">
    
      <div className=" w-full flex justify-end items-center bg-slate-900 py-1  px-1">
        <span className=" text-gray-400 text-sm pr-10">{filename}</span>
        {copy ? (
          <Button startContent={<span className="text-lg"><BiCheckDouble /></span>} size="sm">
            copied
          </Button>
        ) : (
          <Button
            startContent={<span className="text-lg"><RxCopy /> </span>}
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 2000);
            }}
          >
            copy
          </Button>
        )}
      </div>
      <div className=" h-[auto] min-h-[200px] max-h-[300px]  overflow-y-auto ">
        <SyntaxHightlighter
          language="jsx"
          style={atomOneDark}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHightlighter>
      </div>
    </div>
  );
}

export function TabLayout({ children }) {
  const [selected, setSelected] = useState("preview");
  return (
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
        tabContent: "group-data-[selected=true]:text-[#06b6d4] text-white font-medium text-base dark:text-gray-900",
      }}
    >
      {children}
    </Tabs>
  );
}
