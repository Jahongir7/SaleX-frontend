import "./App.css";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";

function App() {
    const elementConfig = {type: 'text', placeholder: 'Search'}
    const options = [
        {value: 'cars', displayValue: 'Cars'},
        {value: 'jobs', displayValue: 'Jobs'},
        {value: 'services', displayValue: 'Services'}
    ]

    return <div className="App">
        <Input
            elementConfig={elementConfig}
            elementType='input'
            label='Search products'
        />
        <Input
            elementType='select'
            options={options}
            label='Choose'
        />
        <Button
            btnType='Main'
        >
            Click
        </Button>

    </div>;
}

export default App;
