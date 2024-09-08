import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
// import Education from "./components/Education";
// import WorkExperience from "./components/WorkExperience";
// import ContactDetails from "./components/ContactDetails";

const MyRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>}/>
        {/* <Route path="/education" element={<Education/>}/>
        <Route path="/work" element={<WorkExperience/>}/>
        <Route path="/contact" element={<ContactDetails/>}/> */}

      </Routes>
    </Router>
  );
};

export default MyRoutes;
