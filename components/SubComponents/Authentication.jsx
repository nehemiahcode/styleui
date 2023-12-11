"use client";
import Codelayout, { TabLayout } from "../Codelayout";
import TabView, { TabCode } from "../Tabview";
import { Tab, Link, Image } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

export default function Authentication() {
  const code = `
  import { FcGoogle } from "react-icons/fc";
  import { BsGithub } from "react-icons/bs";
  import { FaTwitter } from "react-icons/fa";

  export default function Authentication() {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-8">
              <div className="text-center">
                <div className="mt-5 space-y-2">
                  <h3 className="dark:text-gray-800 text-white text-2xl font-bold sm:text-3xl">
                    Log in to your account
                  </h3>
                  <p className="dark:text-gray-800 text-white ">
                    Don't have an account?{" "}
                    <Link
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Sign in
                </button>
              </form>
              <div className="relative">
                <span className="block w-full h-px bg-gray-300"></span>
                <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                  Or continue with
                </p>
              </div>
              <div className="space-y-4 text-sm font-medium">
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span>
                    <FcGoogle />
                  </span>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span className="text-white dark:text-black">
                    <FaTwitter />
                  </span>
                  Continue with Twitter
                </button>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span className="text-white dark:text-black">
                    <BsGithub />
                  </span>
                  Continue with Github
                </button>
              </div>
              <div className="text-center">
                <a
                  href="javascript:void(0)"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
    )
  };`;
  const code2 = `
  export default () => {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="dark:text-gray-800 text-white  text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <a
              href="javascript:void(0)"
              className="text-center text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
        </form>
        <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </button>
        <p className="text-center dark:text-gray-800 text-white ">
          Don't have an account?{" "}
          <a
            href="javascript:void(0)"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </main>
    )
}
  `;
  const code3 = `
  export default () => {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?{" "}
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
          <div className="text-center">
            <a
              href="javascript:void(0)"
              className="hover:text-indigo-600"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </main>
    )
}
  `;
  const code4 = `
  export default () => {
    return (
      <main className="w-full flex">
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 shadow-xl  text-gray-600 py-2">
          <div className="">
            <Image
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="dark:text-gray-800 text-white text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="dark:text-gray-800 text-white  text-whit">
                Already have an account?{" "}
                <a
                  href="javascript:void(0)"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <FcGoogle />
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <FaTwitter />
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <BsGithub />
            </button>
          </div>
          <div className="relative">
            <span className="block w-full h-px"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
    )
}
  `;
  return (
    <section className=" border px-2  my-5">
      <h1 className="font-bold text-white dark:text-black text-3xl">
        Tailwind CSS Authentications
      </h1>
      <p className="py-2 text-white dark:text-black">
        Beautifully designed, fully responsive, expertly crafted Authentication
        examples
      </p>
      <TabLayout>
        <Tab key="preview" title={<TabView />}>
          <div className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 shadow-xl px-2 py-2 sm:px-4 space-y-8">
              <div className="text-center">
                <div className="mt-5 space-y-2">
                  <h3 className="dark:text-gray-800 text-white text-2xl font-bold sm:text-3xl">
                    Log in to your account
                  </h3>
                  <p className="dark:text-gray-800 text-white ">
                    Don't have an account?{" "}
                    <Link
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Sign in
                </button>
              </form>
              <div className="relative">
                <span className="block w-full h-px bg-gray-300"></span>
                <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                  Or continue with
                </p>
              </div>
              <div className="space-y-4 text-sm font-medium">
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span>
                    <FcGoogle />
                  </span>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span className="text-white dark:text-black">
                    <FaTwitter />
                  </span>
                  Continue with Twitter
                </button>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg">
                  <span className="text-white dark:text-black">
                    <BsGithub />
                  </span>
                  Continue with Github
                </button>
              </div>
              <div className="text-center">
                <a href="" className="text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </Tab>
        <Tab key={"code"} title={<TabCode />}>
          <Codelayout code={code} filename={"./components/auth.jsx"} />
        </Tab>
      </TabLayout>{" "}
      <div className=" my-5">
        <h1 className="dark:text-gray-800 text-white text-lg py-2">
          Login with google provider
        </h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
              <div className="max-w-sm w-full text-gray-600 shadow-xl px-2 py-2 sm:px-4 space-y-5">
                <div className="text-center pb-8">
                  <div className="mt-5">
                    <h3 className="dark:text-gray-800 text-white  text-2xl font-bold sm:text-3xl">
                      Log in to your account
                    </h3>
                  </div>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Password</label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        id="remember-me-checkbox"
                        className="checkbox-item peer hidden"
                      />
                      <label
                        htmlFor="remember-me-checkbox"
                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                      <span>Remember me</span>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="text-center text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                    Sign in
                  </button>
                </form>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                  <span>
                    <FcGoogle />
                  </span>
                  Continue with Google
                </button>
                <p className="text-center dark:text-gray-800 text-white ">
                  Don't have an account?{" "}
                  <a
                    href=""
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </main>
          </Tab>
          <Tab code={code2} title={<TabCode />}>
            <Codelayout code={code2} filename={"./components/auth.jsx"} />
          </Tab>
        </TabLayout>
      </div>
      <div className=" my-5">
        <h1 className="dark:text-gray-800 text-white text-lg py-2">
          Basic Login form
        </h1>
        <TabLayout>
          <Tab key={"preview"} title={<TabView />}>
            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
              <div className="max-w-sm w-full text-gray-600 shadow-2xl px-2 py-2 rounded">
                <div className="text-center">
                  <div className="mt-5 space-y-2">
                    <h3 className="dark:text-gray-800 text-whitetext-2xl font-bold sm:text-3xl">
                      Log in to your account
                    </h3>
                    <p className="dark:text-gray-800 text-white">
                      Don't have an account?{" "}
                      <a
                        href="javascript:void(0)"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Password</label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                    Sign in
                  </button>
                  <div className="text-center">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-indigo-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
            </main>
          </Tab>
          <Tab code={code3} title={<TabCode />}>
            <Codelayout code={code3} filename={"./components/auth.jsx"} />
          </Tab>
        </TabLayout>
      </div>
      <div className=" my-5">
        <h1 className="dark:text-gray-800 text-white text-lg py-2">
          Sign up form with grid providers
        </h1>
        <TabLayout>
          <Tab key="preview" title={<TabView />}>
            <main className="w-full flex">
              <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full max-w-md space-y-8 px-4 shadow-xl  text-gray-600 py-2">
                  <div className="">
                    <Image
                      src="https://floatui.com/logo.svg"
                      width={150}
                      className="lg:hidden"
                    />
                    <div className="mt-5 space-y-2">
                      <h3 className="dark:text-gray-800 text-white text-2xl font-bold sm:text-3xl">
                        Sign up
                      </h3>
                      <p className="dark:text-gray-800 text-white  text-whit">
                        Already have an account?{" "}
                        <a
                          href="javascript:void(0)"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-3">
                    <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      <FcGoogle />
                    </button>
                    <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      <FaTwitter />
                    </button>
                    <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      <BsGithub />
                    </button>
                  </div>
                  <div className="relative">
                    <span className="block w-full h-px"></span>
                    <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                      Or continue with
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                  >
                    <div>
                      <label className="font-medium">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Password</label>
                      <input
                        type="password"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                      Create account
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </Tab>
          <Tab code={code4} title={<TabCode />}>
            <Codelayout code={code4} filename={"./componenets/auth.jsx"} />
          </Tab>
        </TabLayout>
      </div>
    </section>
  );
}
