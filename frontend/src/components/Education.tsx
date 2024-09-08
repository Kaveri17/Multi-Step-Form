import React from "react";

const Education = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h2 className="text-white font-semibold text-2xl py-5">
          Education 
        </h2>
        <p className="text-white font-medium text-base pb-5">
          Enter your education qualifications:
        </p>
        <form className="">
          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="school"
                className="block mb-2 text-sm font-medium text-white"
              >
                School Boards
              </label>
              <input
                type="text"
                id="school"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="HSEB/NEB"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="lname"
                className="block mb-2 text-sm font-medium text-white"
              >
                School Name
              </label>
              <input
                type="text"
                id="lname"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
          </div>
          
          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="school"
                className="block mb-2 text-sm font-medium text-white"
              >
                Highschool Stream
              </label>
              <input
                type="text"
                id="school"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="HSEB/NEB"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="lname"
                className="block mb-2 text-sm font-medium text-white"
              >
                Highschool Name(+2)
              </label>
              <input
                type="text"
                id="lname"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Highschool Name"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="school"
                className="block mb-2 text-sm font-medium text-white"
              >
                Bachelor's Program
              </label>
              <input
                type="text"
                id="school"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter your program"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="bachelor"
                className="block mb-2 text-sm font-medium text-white"
              >
                University/College Name
              </label>
              <input
                type="text"
                id="bachelor"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your University Name"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
