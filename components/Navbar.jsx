"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Tooltip } from "@nextui-org/react";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Themeswitch from "./Themeswitch";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

const dropdownNavs = [
  {
    navs: [
      {
        title: "Banners",
        path: "/component/banners",
      },
      {
        title: "Contact Sections",
        path: "/component/contact-sections",
      },
    ],
  },

  {
    navs: [
      {
        title: "Footers",
        path: "/component/footers",
      },
      {
        title: "Logo Grid",
        path: "/component/logo-grid",
      },
    ],
  },

  {
    navs: [
      {
        title: "404 Pages",
        path: "/component/404-pages",
      },
      {
        title: "Hero Sections",
        path: "/component/hero-sections",
      },
    ],
  },

  {
    navs: [
      {
        title: "Feature Sections",
        path: "/component/feature-sections",
      },
      {
        title: "Stats",
        path: "/component/stats",
      },
    ],
  },
  {
    navs: [
      {
        title: "Inputs",
        path: "/component/inputs",
      },
      {
        title: "Tables",
        path: "/component/tables",
      },
    ],
  },
  {
    navs: [
      {
        title: "Paginations",
        path: "/component/pignations",
      },
      {
        title: "Cards",
        path: "/component/cards",
      },
    ],
  },
  {
    navs: [
      {
        title: "Alerts",
        path: "/component/alerts",
      },
      {
        title: "Section Headers",
        path: "/component/section-headers",
      },
    ],
  },
  {
    navs: [
      {
        title: "Steps",
        path: "/component/steps",
      },
      {
        title: "Buttons",
        path: "/component/buttons",
      },
    ],
  },
  {
    navs: [
      {
        title: "Tabs",
        path: "/component/tabs",
      },
      {
        title: "Navbars",
        path: "/component/navbars",
      },
    ],
  },
  {
    navs: [
      {
        title: "Select Menus",
        path: "/component/select-menus",
      },
      {
        title: "Modals",
        path: "/component/modals",
      },
    ],
  },
  {
    navs: [
      {
        title: "Avatars",
        path: "/component/avatars",
      },
      {
        title: "Authentication",
        path: "/component/authentication",
      },
    ],
  },
  {
    navs: [
      {
        title: "Sidebars",
        path: "/component/sidebars",
      },
      {
        title: "Context Menu",
        path: "/component/context-menu",
      },
    ],
  },
  {
    navs: [
      {
        title: "Accordions",
        path: "/component/accordions",
      },
      {
        title: "Spinner",
        path: "/component/spinner",
      },
    ],
  },
];

export default function Nav() {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { title: "Introduction", path: "/introduction", isDrapdown: false },
    { title: "installation", path: "/installation", isDrapdown: false },
    {
      title: "Components",
      path: "/component",
      isDrapdown: true,
      navs: dropdownNavs,
    },
    {
      title: "Github",
      path: "https://github.com/nehemiahcode/styleui",
      isDrapdown: false,
    },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);
  function handleActibeBar() {
    setState(!state);
  }

  return (
    <>
      <nav
        className={`nav  relative z-[9999] border-b-2 border-slate-600 bg-slate-900 dark:bg-white w-full  md:text-sm md:border-none `}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Logo />
            <div className="md:hidden">
              <Button isIconOnly onClick={handleActibeBar}>
                {state ? (
                  <span className=" text-xl  dark:text-white text-black">
                    {" "}
                    <AiOutlineClose />
                  </span>
                ) : (
                  <span className=" text-xl   dark:text-white text-black">
                    {" "}
                    <HiOutlineMenuAlt3 />
                  </span>
                )}
              </Button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 block md:flex   md:justify-between  md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex  overflow-y-auto  md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center cursor-default md:cursor-pointer justify-between gap-1 dark:text-black text-white font-medium hover:text-indigo-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <span className=" text-lg text-white dark:text-black font-medium">
                            {" "}
                            <LiaAngleDownSolid />
                          </span>
                        ) : (
                          <span className=" text-lg text-white dark:text-black font-medium">
                            {" "}
                            <LiaAngleUpSolid />
                          </span>
                        )}
                      </button>
                    ) : (
                      <Link
                        scroll={false}
                        prefetch={false}
                        href={item.path}
                        className={`block text-white  ${
                          pathname === item.path
                            ? "text-blue-500"
                            : "text-white"
                        } dark:text-black  font-medium hover:text-indigo-600`}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 bg-slate-900 z-[999]  dark:bg-white w-full md:absolute md:border-y md:mt-0">
                        <ul className="max-w-screen-xl overflow-y-auto h-[300px] mx-auto grid items-center gap-2 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <ul className="mt-5   space-y-5">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <Link
                                      scroll={false}
                                      prefetch={false}
                                      href={navItem.path}
                                      className={` flex gap-3 items-center`}
                                    >
                                      <span
                                        className={` ${
                                          pathname === navItem.path
                                            ? "text-blue-600 dark:text-blue-800"
                                            : "text-white dark:text-black"
                                        }  duration-200 group-hover:text-indigo-600 text-sm  md:text-base`}
                                      >
                                        {navItem.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="items-center justify-start gap-x-6 mt-4 md:mt-0 flex ">
              <Tooltip showArrow={true} content="github">
                <Button
                  isIconOnly
                  onClick={() =>
                    router.push("", { scroll: false, prefetch: false })
                  }
                  className="  bg-slate-800 shadow-lg text-white text-xl"
                >
                  <BsGithub />
                </Button>
              </Tooltip>

              <Tooltip showArrow={true} content="twitter" placement="top">
                <Button
                  isIconOnly
                  onClick={() =>
                    router.push("https://twitter.com/codehubby", {
                      scroll: false,
                      prefetch: false,
                    })
                  }
                  className="  text-black shadow-lg bg-sky-500 dark:text-white text-xl"
                >
                  {" "}
                  <FaTwitter />
                </Button>
              </Tooltip>
              <Themeswitch />
            </div>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className=" z-[99] fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}
