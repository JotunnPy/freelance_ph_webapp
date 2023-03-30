import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

function Index() {
  return (
    <div className="">
      <div className="px-12 md:px-36 py-28 flex flex-col xl:flex-row justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-0 animate-sl translate-x-0">
          <span className="text-5xl font-semibold leading-tight text-center md:text-left">
            Start your Freelance
            <br /> journey with US!
          </span>
          <br />
          <span className="text-center md:text-left">
            <text className="text-2xl text-gray-600 font-medium ">
              Part-time / Full-time
            </text>
          </span>
          <input
            className="p-3 rounded-xl mt-5 border-gray-400 border-2 "
            placeholder="Search"
          />
          <div className="py-3 gap-1 md:gap-3 items-center hidden md:flex">
            <text>Popular: </text>
            <button className="p-2 rounded-xl text-white bg-black hover:scale-105 transition-all">
              Web developer
            </button>
            <button className="p-2 rounded-xl text-white bg-black hover:scale-105 transition-all">
              Data analyst
            </button>
            <button className="p-2 rounded-xl text-white bg-black hover:scale-105 transition-all">
              Voice actor
            </button>
          </div>
        </div>

        <div className="relative pt-20 pr-3 animate-slide translate-x-0">
          <div className="items-center gap-4 w-72 md:w-96 rounded-xl aspect-video bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] flex justify-between from-orange-300 via-pink-500 to-blue-500  absolute p-2 md:p-5 text-white animate-pop ">
            <div className="relative">
              <text className="absolute right-0">$</text>
              <text className="text-9xl text-shadow-lg">5</text>
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <text>
                For as low as Php 270 you can get a freelancer to do anything
                for you!
              </text>
              <button className="bg-white rounded-lg p-1 md:p-3 shadow-xl text-black hover:scale-105 transition-all duration-700">
                Get started
              </button>
            </div>
          </div>

          <div className="w-72 md:w-96 rounded-xl aspect-video bg-black shadow-custom"></div>
        </div>
      </div>
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 pt-6">
        <div className="pl-10 md:pl-36 flex flex-col md:flex-row gap-5 lg:gap-0">
          <div className="flex gap-3">
            <text className="text-3xl font-bold text-white text-shadow-lg">
              Featured Talents
            </text>
            <AiOutlineArrowDown size={30} color={"red"} />
          </div>
          <div className=" hidden md:flex items-center lg:px-36 gap-5">
            <button className="p-3 text-white bg-black rounded-xl shadow-xl hover:scale-110 transition-all">
              Music
            </button>
            <button className="p-3 text-white rounded-xl bg-black shadow-xl hover:scale-110 transition-all">
              Art
            </button>
            <button className="p-3 text-white rounded-xl bg-black hover:scale-110 transition-all">
              Code
            </button>
            <button className="p-3 shadow-xl rounded-xl bg-gray-300 hover:scale-110 transition-all">
              <BsArrowRightCircle size={25} />
            </button>
          </div>
        </div>

        <div className="py-3 mt-3 ">
          <div className=" pl-10 flex overflow-scroll  scrollbar-thumb-white scrollbar-thumb-rounded-xl scrollbar-thin gap-3 md:px-36 pb-6 pt-3">
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
            <div className="w-48 bg-white p-5 rounded-xl shadow-xl flex-none">
              <div className="flex items-center gap-3">
                <div className="bg-black aspect-square w-10 rounded-full" />
                <div className="flex flex-col">
                  <text className="text-gray-600 text-sm">@jsax</text>
                  <text>Jee Saxx</text>
                </div>
              </div>

              <div className="mt-3">
                <text className="">
                  Hi! Im a motion designer with 5 years of experience. You can
                  hire me per component for 50 dollars each.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
