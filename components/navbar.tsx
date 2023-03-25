import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { GoThreeBars } from "react-icons/go";
import { AiFillBell } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

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
                <h1 className="text-2xl px-5  py-5">Marketplace</h1>
              </Link>
              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5  py-5">Support</h1>
              </Link>
              <Link className="flex h-full items-center" href="/">
                <h1 className="text-2xl px-5  py-5">Hire Talents</h1>
              </Link>
            </div>
          </Popover.Panel>

          <Link className="flex h-full items-center" href="/">
            <h1 className="text-2xl px-5 py-4">FreelancePH</h1>
          </Link>
          <div className="hidden lg:flex w-full text-gray-500 flex-1">
            <div className="flex w-full">
              <Link
                className="flex flex-1 h-full hover:bg-gray-400 hover:text-white items-center"
                href="/"
              >
                <p className="mx-auto">Find Work</p>
              </Link>
              <Link
                className="flex flex-1 h-full hover:bg-gray-400 hover:text-white items-center"
                href="/"
              >
                <p className="mx-auto">Marketplace</p>
              </Link>
              <Link
                className="flex flex-1 h-full hover:bg-gray-400 hover:text-white items-center"
                href="/"
              >
                <p className="mx-auto">Support</p>
              </Link>
              <Link
                className="flex flex-1 h-full hover:bg-gray-400 hover:text-white items-center"
                href="/"
              >
                <p className="mx-auto">Hire Talents</p>
              </Link>
            </div>
            <div className="hidden md:flex md:flex-1 text-gray-500 items-center">
              <input
                className=" flex-1 indent-4 border-2 border-gray-400 rounded-lg"
                placeholder="Search..."
              />

              <button className="hover:bg-white flex-1">
                <AiFillBell className="text-4xl" />
              </button>
              <button className="hover:bg-white flex-1">
                <BsFillEnvelopeFill className="text-4xl" />
              </button>
              <button className="hover:bg-white flex-1">
                <MdAccountCircle className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;
