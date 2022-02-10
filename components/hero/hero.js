import SunLogo from "../../resources/svg/logo-sun.svg";
import TextLogo from "../../resources/svg/logo-text.svg";
import styles from "./hero.module.scss";

/*
  This component requires Tailwind CSS v2.0+ 

  This component requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { MailIcon, UserIcon } from "@heroicons/react/solid";
import JoiningSteps from "./joiningSteps/joiningSteps";

const navigation = [
  { name: "Schedule", href: "#" },
  { name: "News", href: "#" },
  { name: "Staff", href: "#" },
  { name: "Support Us", href: "#" },
  { name: "Merchandise", href: "#" },
];

export default function Hero({ children, home }) {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6">
          <nav
            className="relative max-w-7xl pb-5 mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            {/* <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300"
              >
                Log in
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                Start free trial
              </a>
            </div> */}
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-orange-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-orange-600 text-white font-medium hover:bg-orange-700"
                  >
                    Start free trial
                  </a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-gray-900 hover:underline">
                      Login
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <TextLogo className="lg:relative z-50 md:px-10 " />

            <div className="z-auto lg:-mt-48 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-orange-500 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a> */}
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl md:text-5xl md:pt-2 xl:text-6xl">
                    <span className="block">Rise and shine, the</span>
                    <span className="block text-blue">2022 season</span>
                    <span className="block">is here</span>
                  </h1>

                  <p className="mt-3 text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    The Sunrisers Drum & Bugle Corps is back in{" "}
                    <span className="font-bold">Long Island, New York</span> and
                    the North-Atlantic area for the 2022 season. Whether it&apos;s as
                    a spectator enjoying the performance, or
                  </p>

                  <div className="mt-10 sm:mt-12">
                    <h2 className="mt-2 text-2xl font-bold tracking-tight mb-5 text-gray-700">
                      Join the Sunrisers
                    </h2>
                    <JoiningSteps />

                    {/* <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Get ready for the </span>
                    <span className="block text-blue">2022 season</span>
                  </h1> */}

                    <div className="mb-2 mt-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Sarah Smith"
                        />
                      </div>
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number (optional)
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="focus:ring-orange-500 focus:border-orange-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                          >
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-500 sm:mt-4">
                      We&apos;ll review your information then reach out to you, or
                      you can email us at email@email.com. By providing your
                      email, you agree to our{" "}
                      <a href="#" className="font-medium text-black">
                        terms of service
                      </a>
                      .
                    </p>

                    <button
                      type="button"
                      className="my-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Submit
                    </button>

                    {/* <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{" "}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form> */}
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                {/* <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 "> */}
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                {/* <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-orange-400.svg"
                    alt=""
                  /> */}
                <SunLogo
                  className={`z-10 w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none ${styles.sunlogo} `}
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        {children}
      </main>
    </div>
  );
}
