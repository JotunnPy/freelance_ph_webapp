import React from "react";

function card() {
  return (
    <>
      <div className="h-fit hover:scale-105 transition-all hover:text-white bg-white hover:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-300 via-pink-500 to-blue-500  rounded-lg  flex flex-col gap-2 drop-shadow-2xl w-60 items-center py-4">
        <div className="flex items-center  w-full px-6">
          <div className="bg-black h-8 w-8 rounded-full flex-inital mx-2 p-4"></div>
          <div className="flex  w-full flex-col p-2 indent-5">
            <text className="font-bold text-sm">John Doe</text>
            <text className="text-[10px]">@username</text>
          </div>
        </div>
        <text className="font-bold text-sm">I will do anything you want.</text>
        <text>Price: $5 - $10</text>
        <div className="flex flex-row-reverse gap-2 w-full px-5">
          <button className="bg-cyan-400 text-white w-fit rounded-lg py-1 flex-1 hover:bg-cyan-200 hover:text-black">
            Message
          </button>
          <button className="bg-red-400 text-white w-fit rounded-lg flex-1 hover:bg-red-200 hover:text-black">
            Follow
          </button>
        </div>
      </div>
    </>
  );
}

export default card;
