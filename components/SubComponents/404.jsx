"use client";
import Codelayout, { TabLayout } from "../Codelayout";
import { Button, Tab, Image } from "@nextui-org/react";
import TabView, { TabCode } from "../Tabview";
import Logo from "@/components/Logo.jsx";

const code1 = `
import { Button, Image } from "@nextui-org/react";
export default function NotFound() {
    return (
            <div className="max-w-screen-xl mx-auto px-4 flex  items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
                    <div className="pb-6 flex justify-center py-3">
                    <Image
                    src={'./assests/logo.png'}
                    width={40}
                    height={40}
                    alt="Style UI logo"
                  />
                  <p className="font-semibold dark:text-black text-[1rem] text-white">
                    Style{" "}
                    <span className="p-2 dark:border-l-white border-l-slate-900 border-[3px] border-blue-600 rounded-full">
                      Ui
                    </span>
                  </p>
                    </div>
                    <h3 className="text-white text-3xl font-semibold sm:text-5xl">
                        Page not found
                    </h3>
                    <p className="text-white mt-3">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex justify-center my-4 items-center">
                        <Button>Go back</Button>
                    </div>
                </div>
            </div>

    )
}
 ;`;
const code2 = `export function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex  items-center justify-start h-screen md:px-8">
    <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
      
      <h3 className="text-white text-3xl font-semibold sm:text-5xl">
        404 page
      </h3>
      <p className="text-white mt-3">
        Sorry, the page you are looking for could not be found or has been
        removed.
      </p>
      <div className="flex justify-center my-4 items-center">
          <Button onClick={() => {window.history.reload()}}>Refresh</Button>
      </div>
    </div>
  </div>
  )
}`;
export default function ErrorPage() {
  return (
    <>
      <div className="flex my-5 w-full flex-col px-2">
        <h1 className="font-bold text-white dark:text-black text-2xl">
          Tailwind CSS 404 Pages
        </h1>
        <p className="py-2 text-white dark:text-black">
          Beautifully designed, fully responsive, expertly crafted 404 page
          examples
        </p>

        <TabLayout>
          <Tab key="preview" title={<TabView />}>
            <div className=" border py-3">
              <div className=" mx-auto px-4 flex  items-center justify-start">
                <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
                  <div className="pb-6 flex justify-center py-3">
                    <Logo />
                  </div>
                  <h3 className="text-white dark:text-gray-800 text-2xl font-semibold sm:text-3xl">
                    Page not found
                  </h3>
                  <p className="dark:text-gray-800 text-white mt-3">
                    Sorry, the page you are looking for could not be found or
                    has been removed.
                  </p>
                  <div className="flex justify-center my-4 items-center">
                    <Button
                      onClick={() => {
                        window.history.back();
                      }}
                    >
                      Go back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab key={"code"} title={<TabCode />}>
            <Codelayout code={code1} filename={"./components/not-found.jsx"} />
          </Tab>
        </TabLayout>
      </div>

      <div className="flex my-10 w-full flex-col px-2">
         <h1 className="font-bold text-white dark:text-black text-3xl">
          404 Pages without Logo
        </h1>
      
        <TabLayout>
          <Tab key="preview" title={<TabView />}>
            <div className=" border py-3">
              <div className=" mx-auto px-4 py-3 flex  items-center justify-start">
                <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
                  <h3 className="dark:text-gray-800 text-white text-2xl font-semibold sm:text-3xl">
                    404 page
                  </h3>
                  <p className="dark:text-gray-800 text-white mt-3">
                    Sorry, the page you are looking for could not be found or
                    has been removed.
                  </p>
                  <div className="flex justify-center my-4 items-center">
                    <Button
                      onClick={() => {
                        window.history.reload();
                      }}
                    >
                      Refresh
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab key={"code"} title={<TabCode />}>
            <Codelayout code={code2} filename={"./components/404.jsx"} />
          </Tab>
        </TabLayout>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex  items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
        <div className="pb-6 flex justify-center py-3">
          <Image
            src={"./assests/logo.png"}
            width={40}
            height={40}
            alt="Style UI logo"
          />
          <p className="font-semibold dark:text-black text-[1rem] text-white">
            Style{" "}
            <span className="p-2 dark:border-l-white border-l-slate-900 border-[3px] border-blue-600 rounded-full">
              Ui
            </span>
          </p>
        </div>
        <h3 className="text-white text-3xl font-semibold sm:text-5xl">
          Page not found
        </h3>
        <p className="text-white mt-3">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <div className="flex justify-center my-4 items-center">
          <Button>Go back</Button>
        </div>
      </div>
    </div>
  );
}
