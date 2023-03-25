import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

function Index() {
  return (
    <div className="">
      <div className="px-36 py-28 flex  justify-between items-center">
        <div className="flex flex-col gap-0">
          <span className="text-5xl font-semibold leading-tight">
            Start your Freelance
            <br /> journey with us
          </span>
          <br />
          <span className="">
            <text className="text-2xl text-gray-600  font-medium">
              Remote / Full-time
            </text>
          </span>
          <input className="p-3 rounded-xl mt-5" placeholder="Search" />
          <div className="flex py-3 gap-3 items-center">
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
        <div className="relative pt-10 pr-10">
          <div className="items-center gap-4 w-96 rounded-xl aspect-video bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] flex justify-between from-orange-300 via-pink-500 to-blue-500 left-10 bottom-10 absolute p-5 text-white">
            <div className="relative">
              <text className="absolute right-0">$</text>
              <text className="text-9xl text-shadow-lg">5</text>
            </div>
            <div className="flex flex-col gap-3">
              <text>
                For as low as Php 270 you can get a freelancer to do anything
                for you!
              </text>
              <button className="bg-white rounded-lg p-3 shadow-xl text-black hover:scale-105 transition-all">
                Get started
              </button>
            </div>
          </div>
          <div className=" w-96 rounded-xl aspect-video bg-black shadow-custom"></div>
        </div>
      </div>
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 pt-6">
        <div className="flex items-center px-36 gap-5 ">
          <text className="text-3xl font-bold text-white text-shadow-lg">
            Featured Talents
          </text>
          <AiOutlineArrowDown size={30} color={"red"} />
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
        <div className="py-3 mt-3 ">
          <div className="flex overflow-scroll gap-3 px-36 pb-6 pt-3 scrollbar-thumb-white scrollbar-thumb-rounded-xl scrollbar-thin">
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
