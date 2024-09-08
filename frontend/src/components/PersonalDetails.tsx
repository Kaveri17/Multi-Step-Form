// import { ErrorMessage, input, Form, Formik } from 'formik';
// import React from "react";
// import useStep from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const PersonalDetails = ({firstname,lastname,address,dob,gender}:PersonalForm) => {
const PersonalDetails = () => {
  // const {currentStep,setCurrentStep} = useStep()

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-white font-semibold text-2xl py-5">
        Personal Information
      </h2>
      <p className="text-white font-medium text-base pb-5">
        Enter your Personal Information:
      </p>
      <form className="">
        <div className="mb-5 flex w-full justify-between">
          <div className="w-[49%]">
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="w-[49%]">
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-white"
            >
              Last Name
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
        <div className="mb-5">
          <label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-white "
          >
            Date Of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="bg-gray-50 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-white"
          >
            Gender
          </label>
          <div className="flex items-center justify-between w-1/2">
            <label>
              <input type="radio" id="gender" name="gender" value="male"  />
              <span className="text-white pl-2">Male</span>
            </label>
            <label>
              <input type="radio" id="gender" name="gender" value="female" />
              <span className="text-white pl-2">Female</span>
            </label>
            <label>
              <input type="radio" id="gender" name="gender" value="other" />
              <span className="text-white pl-2">Other</span>
            </label>
          </div>
        </div>

        {/* <button
          className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-base w-1/5  base:w-auto px-5 py-2.5 text-center flex items-center justify-end "
        >
          Next 
          <i className="fa-solid fa-arrow-right ps-2"></i>
          
        </button> */}
        {/* <div className="btn">
          {currentStep < components.length - 1 && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-base w-1/5  base:w-auto px-5 py-2.5 text-center flex items-center justify-center "
              onClick={handleNext}
            >
              Next
              <i className="fa-solid fa-arrow-right ps-2"></i>
            </button>
          )}

          {currentStep > 0 && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-base w-1/5  base:w-auto px-5 py-2.5 text-center flex items-center justify-center "
              onClick={handlePrevious}
            >
              Previous
              <i className="fa-solid fa-arrow-left ps-2"></i>
            </button>
          )}

          {currentStep === components.length-1 && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-base w-1/5  base:w-auto px-5 py-2.5 text-center flex items-center justify-center "
              onClick={handlePrevious}
            >
              Sumbit
            </button>
          )}
        </div> */}
      </form>
    </div>
  );
};

export default PersonalDetails;
