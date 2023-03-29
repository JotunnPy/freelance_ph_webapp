import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { GoThreeBars } from "react-icons/go";
import BellNotifications from "./Notifications/Bell";
import MessageNotifications from "./Notifications/Message";
import Account from "./Notifications/Account";

function Navbar() {
  return (
    <div className="w-full fixed top-0 z-50 bg-white">
      <Popover className="flex flex-col">
        <div className="w-5/6 flex font-bold mx-auto">
          <Popover.Button className="hover:bg-gray-400 hover:text-white">
            <GoThreeBars
              className="block lg:hidden mx-3 focus:bg-gray-400"
              size="30px"
            ></GoThreeBars>
          </Popover.Button>
          <Popover.Panel className="lg:hidden absolute mx-auto my-7 w-5/6 top-10 origin-top-right transform transition">
            <div className="bg-gray-400 text-white rounded-b-lg">
              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5 py-5">Find Work</h1>
              </Link>

              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5  py-5">Support</h1>
              </Link>
              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5  py-5">Hire Talents</h1>
              </Link>
              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5  py-5">Account</h1>
              </Link>
            </div>
          </Popover.Panel>

          <Link
            className="flex flex-1 h-full items-center lg:flex-none"
            href="/"
          >
            <h1 className="text-2xl px-5 py-4">FreelancePH</h1>
          </Link>
          <div className="hidden lg:flex w-full text-gray-500 flex-1">
            <div className="flex w-full p-1 gap-2">
              <Link
                className="flex flex-1 h-full border-black items-center rounded-lg transition-all focus:border-l-4  focus:border-b-4 focus:text-black focus:border-t-[1px] focus:border-r-[1px] hover:text-black hover:border-t-[1px] hover:border-r-[1px]  hover:border-b-4 hover:border-l-4"
                href="/work"
              >
                <text className="mx-auto">Find Work</text>
              </Link>
              <Link
                className="flex flex-1 h-full border-black items-center rounded-lg transition-all focus:border-l-4  focus:border-b-4 focus:text-black focus:border-t-[1px] focus:border-r-[1px] hover:text-black hover:border-t-[1px] hover:border-r-[1px]  hover:border-b-4 hover:border-l-4"
                href="/test"
              >
                <text className="mx-auto">Hire Talents</text>
              </Link>

              <Link
                className="flex flex-1 h-full border-black items-center rounded-lg transition-all focus:border-l-4  focus:border-b-4 focus:text-black focus:border-t-[1px] focus:border-r-[1px] hover:text-black hover:border-t-[1px] hover:border-r-[1px]  hover:border-b-4 hover:border-l-4"
                href="/"
              >
                <text className="mx-auto text-ellipsis overflow-hidden">
                  Support
                </text>
              </Link>
            </div>
            <div className="hidden xl:flex xl:flex-1 text-gray-500 items-center">
              <input
                className=" flex-1 indent-4 border-2 border-gray-400 rounded-xl p-2 ml-3"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="hidden lg:flex gap-5 lg:gap-3 mx-3 items-center">
            <BellNotifications />

            <MessageNotifications />

            <Account />
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;
