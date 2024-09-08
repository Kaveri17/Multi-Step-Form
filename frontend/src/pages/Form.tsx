import React from "react";
import Sidebar from "../components/Sidebar";
import PersonalDetails from "../components/PersonalDetails";
import ContactDetails from "../components/ContactDetails";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import useStep from "../store/store";

const Form: React.FC = () => {
  const { currentStep, setCurrentStep } = useStep();

  const components = [
    <PersonalDetails />,
    <ContactDetails />,
    <Education />,
    <WorkExperience />,
  ];
  const handleNext = () => {
    if (currentStep < components.length - 1) {
      // next button or next page tabba samma jana milxa jabba samma last step of the form pugeko hudaina so thats why last page ho ki haina bhannera condition check gareko tyo nabhaye samma next wala btn ni dekhauna mmilxa plus tesko logic ni use garna milxa
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    // similarly for this too previous ko btn or  login first page bahek aru sab ma allowed hunxa tei bhayera tyo btn dekhaunu parxa hence leading to the use of this function
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center justify-between bg-sky-950 w-3/5 p-8 rounded-lg h-4/5">
        <div className="left w-2/5">
          <Sidebar />
        </div>

        <div className="right w-3/5 ">
          {components[currentStep]}
          <div className="btn flex justify-end items-center ">
            {currentStep > 0 && (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-1/4 base:w-auto px-5 py-2.5 text-center flex items-center justify-center me-2"
                onClick={handlePrevious}
              >
                <i className="fa-solid fa-arrow-left pe-2"></i>
                Previous
              </button>
            )}
            {currentStep < components.length - 1 && (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-1/4 base:w-auto px-5 py-2.5 text-center flex items-center justify-center "
                onClick={handleNext}
              >
                Next
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            )}

            {currentStep === components.length - 1 && (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-1/4  base:w-auto px-5 py-2.5 text-center flex items-center justify-center "
                onClick={handlePrevious}
              >
                Sumbit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
