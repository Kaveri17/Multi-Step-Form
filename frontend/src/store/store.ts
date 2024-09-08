import {create} from "zustand";

interface stepState{
    currentStep: number
    setCurrentStep: (step: number)=> void
}

const useStep = create<stepState>((set) => ({
    currentStep: 0,
    setCurrentStep: (step)=>set({currentStep:step}),
}))

export default useStep