import "./App.css";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import Navbar from "./components/landing/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/landing/Footer";

function App() {
  const elementConfig = { type: "text", placeholder: "Search" };
  const options = [
    { value: "cars", displayValue: "Cars" },
    { value: "jobs", displayValue: "Jobs" },
    { value: "services", displayValue: "Services" },
  ];

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Input
          elementConfig={elementConfig}
          elementType="input"
          label="Search products"
        />
        <Input elementType="select" options={options} label="Choose" />
        <Button btnType="Main">Click</Button>

        <Footer />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
