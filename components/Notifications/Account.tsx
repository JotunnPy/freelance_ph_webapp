import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { MdAccountCircle } from "react-icons/md";

export default function Account() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <MdAccountCircle className="text-2xl hover:text-black flex-1 hover:scale-125 transition-all" />
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
          <Menu.Items className="absolute right-0 mt-6 w-80 p-2 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div
                  className="
                     text-gray-900
                     group flex flex-col w-full items-center rounded-md px-2 py-2 text-sm gap-2"
                >
                  <div className="flex">
                    <div className="bg-black h-20 rounded-full w-20 grow"></div>
                    <div className="flex flex-col p-2 grow  w-44 gap-1">
                      <div className="flex flex-col">
                        <text className="text-center">
                          Josephine Mackintoshibaidk
                        </text>
                        <text className="text-gray-400 text-[10px] text-center">
                          @username
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </Menu.Item>
            </div>

            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex flex-col grow gap-2">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <text className="font-light">Bio:</text>
                      <text className="px-3 text-justify">
                        Hi! Im a motion designer with 5 years of experience. You
                        can hire me per component for 50 dollars each.
                      </text>
                    </div>
                  </div>
                </div>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="hover:bg-black hover:text-cyan-400 text-cyan-500 transition-all group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <text className="grow">View Full Profile</text>
                </button>
              </Menu.Item>
            </div>

            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="hover:bg-black hover:text-red-400 text-red-500 transition-all group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <text className="grow">Log Out</text>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
