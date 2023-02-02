import "./App.css";
import FormNav from "./components/FormNav/FormNav";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <div className="App">
      <FormNav />
      <div className="container">
        <PersonalInfo />
        {/* <ThankYou /> */}
      </div>
    </div>
  );
}

export default App;
