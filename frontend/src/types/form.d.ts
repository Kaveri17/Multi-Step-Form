type PersonalForm = {
    firstname: string
    lastname: string
    dob: string
    address: string
    gender: string
}
type ContactForm = {
    phoneno: string
    email: string
    instagram: string
    twitter?: string
    linkedin?: string
}
type EducationForm = {
    school: string
    spassout: number
    highshcool: string
    hspassout: number
    bachelor: string
    bspassout:string
}
type WorkForm = {
    experience1: string
    position1: string
    experience2?: string
    position2?: string
    experience3?: string
    position3?: string
}

// zustand store is used instead of useState to manage the state of the forms steps
// type stepsStore={
//     currentStep: number,
//     setCurrentStep:  React.Dispatch<React.SetStateAction<number>>
// }
