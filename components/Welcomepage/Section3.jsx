"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import myImage from "@/public/shoes-1.webp";
import SyntaxHightlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Section3() {
  return (
    <section className=" py-10 lg:px-5">
      <h1 className="font-bold text-4xl py-1  text-center lg:text-left text-white dark:text-black px-2">
        Customization made easy.
      </h1>
      <p className="text-lg font-medium pb-3 w-[100%] lg:w-[60%] text-center lg:text-left px-2 text-white dark:text-black">
        StyleUI is based on Tailwind CSS, it simplifies component slots
        customization while avoiding Tailwind class conflicts
      </p>
      <div className="w-full">
        <ActiveTabs />
      </div>
    </section>
  );
}

export function ActiveTabs() {
  const [activeicon, setActiveIcon] = useState(2);
  const name = ["xS", "S", "M", "L"];
  const code = `{
              <div
              className={
                " lg:px-2 shadow-xl dark:bg-white bg-slate-800 flex flex-col lg:items-center lg:flex-row rounded-xl py-2 lg:py-0   w-[94%] lg:w-[100%]   h-[auto] mx-auto "
              }
            >
              <Image
                src={myImage}
                className=" h-[200px] mb-2 lg:m-0 lg:h-[85%] lg:object-cover   mx-auto rounded-md w-[90%] lg:w-[240px]"
              />
              <div className=" flex flex-col px-3  lg:px-2 justify-center gap-y-2">
                <h1 className=" font-semibold text-white px-2  dark:text-black text-xl">
                  Nike Adapt BB 2.0
                </h1>
                <p className="text-sm px-2 text-white font-medium  dark:text-black py-3">
                  Consistent, customized fit, game-changing
                </p>
                <div>
                  {name.map((text, index) => (
                    <Button
                      isIconOnly
                      size="sm"
                      onClick={() => setActiveIcon(index)}
                      key={index}
                      className={${`
                        // activeicon === index ? "bg-blue-600  text-white" : " bg-white"
                      }    text-lg font-medium mx-1 rounded-full text-black}
                     
                    >
                      {text}
                    </Button>
                  ))}
                </div>
                <div className=" gap-x-3 flex  justify-start lg:my-2 lg:justify-center items-center">
                  <Button className={" bg-blue-700 shadow-xl text-white"}>
                    Buy now
                  </Button>
                  <Button
                    className={"bg-white border-2 border-blue-500 text-black"}
                  >
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
           `}`;
  return (
    <div className=" w-full  grid grid-cols-1 gap-4 md:gap-2 lg:gap-4 md:grid-cols-2">
      <div
        className={` lg:px-2 shadow-xl border-2 border-slate-500 dark:bg-white bg-slate-800 flex flex-col lg:items-center lg:flex-row rounded-xl pb-2 lg:py-0 sm:w-[80%]   w-[94%] lg:w-[100%]   h-[auto] mx-auto `}
      >
        <div className="bg-white dark:bg-slate-800 rounded-md h-[200px] lg:h-[85%] p-2">
          <Image
            src={myImage}
            alt=" Nike Adapt sneekers"
            className=" h-[200px] mb-2 lg:m-0 lg:h-[85%] lg:object-cover   mx-auto rounded-md w-[90%] lg:w-[240px]"
          />
        </div>
        <div className=" flex flex-col px-3  lg:px-2 justify-center gap-y-2">
          <h1 className=" font-semibold text-white px-2  dark:text-black text-xl">
            Nike Adapt BB 2.0
          </h1>
          <p className="text-sm px-2 text-white font-medium  dark:text-black py-3">
            Consistent, customized fit, game-changing
          </p>
          <div>
            {name.map((text, index) => (
              <Button
                isIconOnly
                size="sm"
                onClick={() => setActiveIcon(index)}
                key={index}
                className={`${
                  activeicon === index ? "bg-blue-600  text-white" : " bg-white text-black"
                }    text-lg font-medium mx-1 rounded-full `}
              >
                {text}
              </Button>
            ))}
          </div>
          <div className=" gap-x-3 flex  justify-start lg:my-2 lg:justify-center items-center">
            <Button className={` bg-blue-700 shadow-xl text-white`}>
              Buy now
            </Button>
            <Button className={`bg-white border-2 border-blue-500 text-black`}>
              Add to bag
            </Button>
          </div>
        </div>
      </div>

      <div className=" relative w-[97%] sm:w-[80%] py-4 px-2 mx-auto scrollbar-hide overflow-y-auto  lg:w-[100%] md:h-[400px] lg:h-[300px] h-[300px]">
        <div className="scrollbar-hide w-full h-[300px]">
          <SyntaxHightlighter
            language="jsx"
            style={atomOneDark}
            wrapLongLines={false}
          >
            {code.toString()}
          </SyntaxHightlighter>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" bg-slate-900 absolute z-[999] top-0  right-0 text-white w-full py-2">
          {copy ? (
            <Button startContent={<BiCheckDouble />} className=" text-sm">
              {" "}
              copied
            </Button>
          ) : (
            <Button
              startContent={<RxCopy />}
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
              className=" text-sm"
            >
              {" "}
              copy code
            </Button>
          )}
        </div> */
}
