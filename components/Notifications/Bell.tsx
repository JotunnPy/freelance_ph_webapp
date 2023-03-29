import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiFillBell } from "react-icons/ai";

export default function BellNotifications() {
  const name = ["John Doe", "Mary Jane"];
  const status = ["followed", "messaged"];

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hover:text-black flex-1 hover:scale-125 transition-all">
            <span className="absolute flex h-2 w-2 right-0 hover:hidden">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <AiFillBell className="text-2xl" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-6 w-80 p-2 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link
                  href="/"
                  className=" hover:bg-black text-gray-900group items-center rounded-md  text-sm text-center grow w-full px-3 py-2 hover:text-white h-full transition-all flex "
                >
                  <div className="text-left flex flex-1">
                    <text className="flex-1">
                      {name[0]} has {status[0]} you.
                    </text>
                  </div>

                  <text className="text-gray-400"> 30s</text>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link
                  href="/"
                  className=" hover:bg-black text-gray-900group  items-center rounded-md  text-sm text-center grow w-full px-3 py-2 hover:text-white h-full transition-all flex "
                >
                  <div className="text-left flex flex-1">
                    <text className="flex-1">
                      {name[1]} has {status[1]} you.
                    </text>
                  </div>

                  <text className="text-gray-400"> 30s</text>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link
                  href="/"
                  className=" hover:bg-black text-gray-900group items-center rounded-md  text-sm  text-center grow w-full px-3 py-2 hover:text-white h-full transition-all flex "
                >
                  <div className="text-left flex flex-1">
                    <text className="flex-1">
                      {name[0]} has {status[0]} you.
                    </text>
                  </div>

                  <text className="text-gray-400"> 30s</text>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="hover:bg-black text-gray-900 group flex w-full items-center rounded-md  text-sm transition-all ">
                  <text className="text-cyan-600 text-center grow w-full px-3 py-2 hover:text-cyan-400 h-full transition-all">
                    View All
                  </text>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
