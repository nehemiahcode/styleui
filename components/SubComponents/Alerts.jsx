"use client";
import Codelayout, { TabLayout } from "../Codelayout";
import TabView, { TabCode } from "../Tabview";
import { Tab, Link, Image } from "@nextui-org/react";

export default function Alerts() {
  const code1 = `
  export default () => {
    return (
        <div className="mt-12 mx-4 px-4 rounded-md bg-blue-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-blue-500 font-semibold">
                            Info
                        </span>
                        <div className="text-blue-500">
                            <div className="mt-1">
                                New sales from the last subscribers - 20K USD in revenue.
                            </div>
                            <div className="mt-2">
                                <a 
                                    href="javascript:void(0)" 
                                    className="flex items-center text-sm font-medium underline">
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="self-start text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
  `;
  const code2 = `
  export default () => {
    return (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-green-600 font-semibold">
                            Success
                        </span>
                        <p className="text-green-600 mt-1">
                            Team member has been added successfully.
                        </p>
                    </div>
                </div>
                <button className="self-start text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

  `;
  const code3 = `
  export default () => {
    return (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-red-600 font-semibold">
                            Error
                        </span>
                        <p className="text-red-600 mt-1">
                            Sorry something wrong happened, please enter a correct email.
                        </p>
                    </div>
                </div>
                <button className="self-start text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
  `;
  const code4 = `
  export default () => {
    return (
        <div className="mt-12 mx-4 px-4 rounded-md bg-amber-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="py-3">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-amber-600 font-semibold">
                            Warning
                        </span>
                        <p className="text-amber-600 mt-1">
                            Manage your team members permissions from your <a className="underline" href="javascript:void(0)">dashboard</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

  `;
  const code5 = `
  export default () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
                <div className="flex gap-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="self-center">
                        <span className="text-blue-600 font-medium">
                            New update available
                        </span>
                        <div className="text-blue-600">
                            <p className="mt-2 sm:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="mt-2">
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center font-medium hover:underline sm:text-sm">
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  `;
  return (
    <section className="px-2 my-5">
      <div>
        <h1 className=" text-white dark:text-black text-lg">
          {" "}
          Tailwind CSS Alerts
        </h1>
        <p className=" text-white dark:text-black text-sm">
          Beautifully designed, fully responsive, expertly crafted alert
          examples
        </p>
        <h1 className="text-lg text-white dark:text-black">Alert Info</h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div className="mt-12 mx-4 px-4 rounded-md bg-blue-50 md:max-w-2xl md:mx-auto md:px-8">
              <div className="flex justify-between py-3">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="self-center ml-3">
                    <span className="text-blue-500 font-semibold">Info</span>
                    <div className="text-blue-500">
                      <div className="mt-1">
                        New sales from the last subscribers - 20K USD in
                        revenue.
                      </div>
                      <div className="mt-2">
                        <a
                          href="javascript:void(0)"
                          className="flex items-center text-sm font-medium underline"
                        >
                          Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="self-start text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Tab>
          <Tab code={code1} title={<TabCode />}>
            <Codelayout code={code1} filename={"./components/alert.jsx"} />
          </Tab>
        </TabLayout>
      </div>

      <div className=" py-5">
        <h1 className="text-lg text-white dark:text-black">Alert Success</h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
              <div className="flex justify-between py-3">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rounded-full text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="self-center ml-3">
                    <span className="text-green-600 font-semibold">
                      Success
                    </span>
                    <p className="text-green-600 mt-1">
                      Team member has been added successfully.
                    </p>
                  </div>
                </div>
                <button className="self-start text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Tab>
          <Tab code={code2} title={<TabCode />}>
            <Codelayout code={code2} filename={"./components/alert.jsx"} />
          </Tab>
        </TabLayout>
      </div>

      <div className=" py-5">
        <h1 className="text-lg text-white dark:text-black">Error</h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
              <div className="flex justify-between py-3">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="self-center ml-3">
                    <span className="text-red-600 font-semibold">Error</span>
                    <p className="text-red-600 mt-1">
                      Sorry something wrong happened, please enter a correct
                      email.
                    </p>
                  </div>
                </div>
                <button className="self-start text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Tab>
          <Tab code={code3} title={<TabCode />}>
            <Codelayout code={code3} filename={"./components/alert.jsx"} />
          </Tab>
        </TabLayout>
      </div>
      <div className=" py-5">
        <h1 className="text-lg text-white dark:text-black">Alert Warning</h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div className="mt-12 mx-4 px-4 rounded-md bg-amber-50 md:max-w-2xl md:mx-auto md:px-8">
              <div className="py-3">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rounded-full text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="self-center ml-3">
                    <span className="text-amber-600 font-semibold">
                      Warning
                    </span>
                    <p className="text-amber-600 mt-1">
                      Manage your team members permissions from your{" "}
                      <a className="underline" href="javascript:void(0)">
                        dashboard
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab code={code4} title={<TabCode />}>
            <Codelayout code={code4} filename={"./components/alert.jsx"} />
          </Tab>
        </TabLayout>
      </div>
      <div className=" py-5">
        <h1 className="text-lg text-white dark:text-black">Alert Detail</h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <div className="max-w-5xl mx-auto px-4 md:px-8">
              <div className="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
                <div className="flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="self-center">
                    <span className="text-blue-600 font-medium">
                      New update available
                    </span>
                    <div className="text-blue-600">
                      <p className="mt-2 sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="mt-2">
                        <a
                          href="javascript:void(0)"
                          className="inline-flex items-center font-medium hover:underline sm:text-sm"
                        >
                          Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab code={code5} title={<TabCode />}>
            <Codelayout code={code5} filename={"./components/alert.jsx"} />
          </Tab>
        </TabLayout>
      </div>
    </section>
  );
}
