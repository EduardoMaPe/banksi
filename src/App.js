// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
  // Onboarding
import StepOne from "./Onboarding/views/step1";
import StepTwo from "./Onboarding/views/step2";
import StepThree from "./Onboarding/views/step3";
import StepFour from "./Onboarding/views/step4";
  // Home
import HomePage from "./Home/views/homePage";

// Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/one" element={<StepOne />} />
        <Route exact path="/two" element={<StepTwo />} />
        <Route exact path="/three" element={<StepThree />} />
        <Route exact path="/four" element={<StepFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
