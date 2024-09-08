import React from "react";

const WorkExperience = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h2 className="text-white font-semibold text-2xl py-5">
          Work Experiences
        </h2>
        <p className="text-white font-medium text-base pb-5">
          Enter your past work experiences:
        </p>
        <form className="">
          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="exp1"
                className="block mb-2 text-sm font-medium text-white"
              >
                Experince 1
              </label>
              <input
                type="text"
                id="exp1"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Past Company"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="pos1"
                className="block mb-2 text-sm font-medium text-white"
              >
                Position 1
              </label>
              <input
                type="text"
                id="pos1"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Working Position"
                required
              />
            </div>
          </div>
          
          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="exp1"
                className="block mb-2 text-sm font-medium text-white"
              >
                Experince 2
              </label>
              <input
                type="text"
                id="exp1"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Past Company"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="pos1"
                className="block mb-2 text-sm font-medium text-white"
              >
                Position 2
              </label>
              <input
                type="text"
                id="pos1"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Working Position"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="exp2"
                className="block mb-2 text-sm font-medium text-white"
              >
                Experince 3
              </label>
              <input
                type="text"
                id="exp2"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Past Company"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="pos3"
                className="block mb-2 text-sm font-medium text-white"
              >
                Position 3
              </label>
              <input
                type="text"
                id="pos3"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Working Position"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WorkExperience;
