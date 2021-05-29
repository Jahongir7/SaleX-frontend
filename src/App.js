import { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { changeLanguage } from "./redux/actions/lang";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import SectionTitle from "./components/UI/SectionTitle/SectionTitle";

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
        <Navbar />
        <Input
          elementConfig={elementConfig}
          elementType="input"
          label="Search products"
        />
        <Input elementType="select" options={options} label="Choose" />
        <Button btnType="Main">Click</Button>
        <SectionTitle />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
