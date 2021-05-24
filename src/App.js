import { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { changeLanguage } from "./redux/actions/lang";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";

const App = () => {
  useEffect(() => {
    changeLanguage("uz");
  }, []);

  const elementConfig = { type: "text", placeholder: "Search" };
  const options = [
    { value: "cars", displayValue: "Cars" },
    { value: "jobs", displayValue: "Jobs" },
    { value: "services", displayValue: "Services" },
  ];

  return (
    <Provider store={store}>
      <div className="App">
        <Input
          elementConfig={elementConfig}
          elementType="input"
          label="Search products"
        />
        <Input elementType="select" options={options} label="Choose" />
        <Button btnType="Main">Click</Button>
      </div>
    </Provider>
  );
};

export default App;
