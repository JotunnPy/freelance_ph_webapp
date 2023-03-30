import React from "react";
import AddCard from "./publish";
import Card from "./card";

function Index() {
  return (
    <div className="  flex gap-1 ">
      <div className=" bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 pt-6">
        <div>
          <AddCard />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 grid-flow-row w-full px-24 py-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" pb-10 w-full flex gap-10 px-20">
          <button className="bg-black flex-1 rounded-lg p-2  text-white hover:scale-105">
            Previous
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-black h-5 w-5 p-1 rounded-full"></div>
            <div className="bg-gray-400 h-5 w-5 p-1 rounded-full"></div>
            <div className="bg-gray-400 h-5 w-5 p-1 rounded-full"></div>
            <div className="bg-gray-400 h-5 w-5 p-1 rounded-full"></div>
            <div className="bg-gray-400 h-5 w-5 p-1 rounded-full"></div>
          </div>
          <button className="bg-black flex-1 rounded-lg p-2 text-white hover:scale-105">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
