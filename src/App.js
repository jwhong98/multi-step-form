import "./App.css";
import AddOns from "./components/AddOns/AddOns";
import FormNav from "./components/FormNav/FormNav";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <div className="App">
      <FormNav />
      <div className="container">
        {/* <PersonalInfo /> */}
        {/* <SelectPlan /> */}
        {/* <ThankYou /> */}
        <AddOns />
      </div>
    </div>
  );
}

export default App;
