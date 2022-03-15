// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
import StepOne from "./Onboarding/views/step1";
import StepTwo from "./Onboarding/views/step2";

// Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StepOne />} />
        <Route exact path="/two" element={<StepTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
