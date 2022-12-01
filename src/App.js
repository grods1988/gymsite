import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Plans from "./components/Plans";

function App() {
  return (
    <div className="bg-warning">
      <Home />
      <Plans />
    </div>
  );
}

export default App;
