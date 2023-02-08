import "./App.css";
import AddOns from "./components/AddOns/AddOns";
import FormNav from "./components/FormNav/FormNav";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou/ThankYou";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FormNav />
        <div className="container">
          <Routes>
            <Route index element={<PersonalInfo />} />
            <Route path="/selectPlan" element={<SelectPlan />} />
            <Route path="/addOns" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
            {/* <ThankYou /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
