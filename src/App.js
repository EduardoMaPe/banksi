// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
import StepOne from "./Step1/views/step1";
// Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StepOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
