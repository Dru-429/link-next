import React from "react";

const generate = () => {
  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <div className="col-1 border-yellow-300 border-r-2 rounded-r-xl max-h-screen overflow-y-auto flex flex-col gap-10 justify-center items-center">
        <h1 className="font-bold text-5xl text-yellow-400 capitalize tracking-tighter leading-none ">
          claim your own Link Next
        </h1>

        <div className="flex flex-col justify-start items-start text-lg gap-7 ">
          {/* //step1: claiming handel  */}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none">
              Step 1: Claim your handel
            </h2>
            <input
              type="text"
              placeholder="Enter your handel "
              className="px-4 py-1 mx-10 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
            />
          </div>

          {/* //step2: claiming handel  */}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none ">
              Step 2: Add Links
            </h2>

            <div className="flex items-start gap-5 mx-10">
              <input
                type="text"
                placeholder="Enter link text"
                className="px-4 py-1 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
              />
              <input
                type="text"
                placeholder="Enter link"
                className="px-4 py-1 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
              />
            </div>

            <button className="px-4 py-1 mx-10 w-fit text-sm rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09]">
              Add Link
            </button>
          </div>

          {/* //step1: claiming handel  */}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none">
              Step 3: Add picture url & submit
            </h2>
            <input
              type="text"
              placeholder="Enter your image url "
              className="px-4 py-1 mx-10 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
            />

            <button className=" mt-10 px-4 py-1 mx-10 w-fit text-sm rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09]">
              Done...
            </button>
          </div>
        </div>
      </div>

      <div className="col-2 hidden md:flex justify-center items-end pb-10 box-border h-screen">
        <img
          src="generate.png"
          alt="generate-img"
          className="w-[70%] h-[80%] object-fill bg-yellow-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default generate;
