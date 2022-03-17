// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
import StepOne from "./Onboarding/views/step1";
import StepTwo from "./Onboarding/views/step2";
import StepThree from "./Onboarding/views/step3";
import StepFour from "./Onboarding/views/step4";

// Styles
import "./App.css";
import Checking from "./Onboarding/views/check";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StepOne />} />
        <Route exact path="/two" element={<StepTwo />} />
        <Route exact path="/three" element={<StepThree />} />
        <Route exact path="/four" element={<StepFour />} />
        <Route exact path="/five" element={<Checking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
