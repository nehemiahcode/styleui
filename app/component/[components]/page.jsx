"use client";
import { useState } from "react";
import Layout from "@/components/Layout.jsx";
import { getAllPost } from "../../../components/Dynamics";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Page({ params }) {
  const dropdownNavs = [
    {
      title: "Banners",
      path: "/component/banners",
    },
    {
      title: "Contact Sections",
      path: "/component/contact-sections",
    },

    {
      title: "Footers",
      path: "/component/footers",
    },
    {
      title: "Logo Grid",
      path: "/component/logo-grid",
    },
    {
      title: "404 Pages",
      path: "/component/404-pages",
    },
    {
      title: "Hero Sections",
      path: "/component/hero-sections",
    },

    {
      title: "Feature Sections",
      path: "/component/feature-sections",
    },
    {
      title: "Stats",
      path: "/component/stats",
    },

    {
      title: "Inputs",
      path: "/component/inputs",
    },
    {
      title: "Tables",
      path: "/component/tables",
    },

    {
      title: "Paginations",
      path: "/component/pignations",
    },
    {
      title: "Cards",
      path: "/component/cards",
    },

    {
      title: "Alerts",
      path: "/component/alerts",
    },
    {
      title: "Section Headers",
      path: "/component/section-headers",
    },
    {
      title: "Steps",
      path: "/component/steps",
    },
    {
      title: "Buttons",
      path: "/component/buttons",
    },

    {
      title: "Tabs",
      path: "/component/tabs",
    },
    {
      title: "Navbars",
      path: "/component/navbars",
    },

    {
      title: "Select Menus",
      path: "/component/select-menus",
    },
    {
      title: "Modals",
      path: "/component/modals",
    },

    {
      title: "Avatars",
      path: "/component/avatars",
    },
    {
      title: "Authentication",
      path: "/component/authentication",
    },

    {
      title: "Sidebars",
      path: "/component/sidebars",
    },
    {
      title: "Context Menu",
      path: "/component/context-menu",
    },

    {
      title: "Accordions",
      path: "/component/accordions",
    },
    {
      title: "Spinner",
      path: "/component/spinner",
    },
  ];
  const [filter, setFilter] = useState("");
  const { components } = params;
  const post = getAllPost(components);

  const Navs = dropdownNavs.filter((value) => {
    if (filter == "") {
      return value;
    } else if (
      value.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ) {
      return value;
    }
  });
  const paths = usePathname();
  return (
    <section className=" h-screen w-full flex">
      <aside
        className={` w-[22%] hidden lg:flex fixed
        flex-col h-screen bg-slate-900 text-white overflow-hidden`}
      >
        <div className=" flex items-center px-4 py-5">
          <Logo />
        </div>
        <div className=" w-full relative flex items-center px-4 my-3">
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Search..."
            className=" rounded bg-slate-800 text-white border py-2 outline-none pl-7 pr-3 text-sm w-full"
          />
          <span className=" absolute top-3 left-6 font-extrabold text-white">
            <FiSearch />
          </span>
        </div>

        {Navs.length === 0 ? (
          <span className="text-white py-3 bg-slate-800 text-sm text-center">
            No match for <strong>{filter}</strong>
          </span>
        ) : (
          <nav className="overflow-y-auto h-auto overflow-x-hidden px-4">
            {Navs.map((value, idx) => (
              <ul key={idx} className="flex flex-col ">
                <li
                  className={`${
                    paths === value.path
                      ? " border-blue-500"
                      : " border-slate-900"
                  } flex flex-col gap-y-3 hover:border-blue-500  border-l-2 `}
                >
                  <Link
                    scroll={false}
                    prefetch={false}
                    href={value.path}
                    className={` ${
                      paths === value.path
                        ? " font-bold text-white"
                        : "text-gray-300"
                    } py-2 rounded px-2 text-sm hover:bg-slate-700`}
                  >
                    {value.title}
                  </Link>
                </li>
              </ul>
            ))}
          </nav>
        )}
      </aside>

      {post.map((p) => (
        <section
          key={p.components}
          className={`right-0 flex-col flex-1 w-screen  overflow-y-scroll lg:ml-[22%]`}
        >
          <Layout style={'md:hidden'}>{p.Element}</Layout>
        </section>
      ))}
    </section>
  );
}

export async function generateStaticParams() {
  const mypost = getAllPost();

  return mypost.map(() => ({
    components: mypost.components,
    fallback: false,
  }));
}
