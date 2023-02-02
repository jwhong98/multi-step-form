import "./App.css";
import FormNav from "./components/FormNav/FormNav";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <div className="App">
      <FormNav />
      <div className="container">
        <ThankYou />
      </div>
    </div>
  );
}

export default App;
