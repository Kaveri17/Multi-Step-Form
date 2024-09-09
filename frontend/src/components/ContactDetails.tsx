import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h2 className="text-white font-semibold text-2xl py-5">
          Contact Information
        </h2>
        <p className="text-white font-medium text-base pb-5">
          Enter your contact information:
        </p>
        <form className="">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phoneno"
              className="block mb-2 text-sm font-medium text-white"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneno"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mb-5 flex w-full justify-between">
            <div className="w-[49%]">
              <label
                htmlFor="insta"
                className="block mb-2 text-sm font-medium text-white"
              >
                Instagram
              </label>
              <input
                type="text"
                id="insta"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your Instagram Username"
                required
              />
            </div>
            <div className="w-[49%]">
              <label
                htmlFor="linkedin"
                className="block mb-2 text-sm font-medium text-white"
              >
                LinkedIn
              </label>
              <input
                type="text"
                id="linkedin"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Enter Your LinkedIn Account"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactDetails;
