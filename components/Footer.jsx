"use client";
import Logo from "./Logo";
import { BsGithub } from "react-icons/bs";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  // const footerNavs = [
  //   {
  //     name: "Privacy Policy",
  //   },
  // ];

  const router = useRouter();

  return (
    <footer className="text-gray-500  bg-slate-900 border-t-2 dark:bg-white  px-4 py-5  w-full md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <div className="flex justify-center items-center">
          {" "}
          <Logo size={" h-[35px] w-[35px]"} />
        </div>
        <p className="leading-relaxed mt-2 text-white dark:text-gray-800 text-[15px]">
          Build faster apps with beautiful, responsive UI components with modern
          design, 100% free and open-source.
        </p>
      </div>
  
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 text-white text-sm dark:text-gray-800 sm:mt-0">
          &copy; 2023 Style UI <br /> Created by Nehemiah.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border dark:border-slate-500 rounded-full flex items-center justify-center">
              <span
                onClick={() =>
                  router.push("https://github.com/nehemiahcode", { scroll: false, prefetch: false })
                }
                className=" text-white dark:text-black"
              >
                <BsGithub />
              </span>
            </li>
            <li className="w-10 h-10 border dark:border-slate-500 rounded-full flex items-center justify-center">
              <span
                onClick={() =>
                  router.push("https://twitter.com/codehubby", {
                    scroll: false,
                    prefetch: false,
                  })
                }
                className=" text-white dark:text-black"
              >
                <RiTwitterXFill />
              </span>
            </li>
            <li className="w-10 h-10 border dark:border-slate-500 rounded-full flex items-center justify-center">
              <span
                onClick={() =>
                  router.push("https://www.linkedin.com/in/nehemiah12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", {
                    scroll: false,
                    prefetch: false,
                  })
                }
                className=" text-white dark:text-black"
              >
                <FaLinkedin />
              </span>
            </li>
            {/* <li className="w-10 h-10 border dark:border-slate-500 rounded-full flex items-center justify-center">
              <span
                onClick={() =>
                  router.push("https://www.linkden.com/in/nehemiah12", {
                    scroll: false,
                    prefetch: false,
                  })
                }
                className=" text-white dark:text-black"
              >
                <FaDiscord />
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
