import React from "react";

function AddCard() {
  return (
    <form>
      <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden h-full flex-1 p-10 items-center">
        <div className="bg-white rounded-lg p-10 flex flex-col w-96 gap-2 drop-shadow-2xl">
          <text className="font-bold">Post a listing</text>
          <div className="flex flex-col">
            <text> What kind of service are you offering?</text>
            <input className="bg-gray-200 rounded-lg"></input>
          </div>
          <div className="flex flex-col">
            <text> Describe what you will do.</text>
            <textarea className="bg-gray-200 h-20 rounded-lg"></textarea>
          </div>
          <div className="flex flex-col">
            <text> How much are you asking?</text>
            <input className="bg-gray-200 rounded-lg"></input>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex-1"> Add a background image</span>
            <div className="hover:scale-105">
              <input
                className="block text-sm text-gray-300 mx-auto
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-black file:text-white  file:overflow-hidden w-28"
                type="file"
              ></input>
            </div>
            <button className="mt-5 bg-cyan-400 hover:bg-cyan-500 p-2 hover:scale-110 text-white rounded-lg">
              Sumbit
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="hover:scale-125 bg-black text-white rounded-lg  p-4 flex flex-col gap-2 drop-shadow-xl"
          >
            View all my listings
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddCard;
