import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

import { BsFillEnvelopeFill } from "react-icons/bs";

export default function MessageNotifications() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <BsFillEnvelopeFill className="text-2xl hover:text-black flex-1 hover:scale-125 transition-all" />
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
          <Menu.Items className=" absolute right-0 mt-6 w-80 p-2 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className=" hover:bg-black text-gray-900group flex w-full items-center rounded-md  text-sm transition-all ">
                  <text className="text-cyan-600 text-center grow w-full px-3 py-2 hover:text-cyan-400 h-full transition-all">
                    View All
                  </text>
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className=" hover:bg-black text-gray-900group flex w-full items-center rounded-md  text-sm transition-all ">
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
