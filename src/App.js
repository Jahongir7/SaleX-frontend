import "./App.css";
import SectionTitle from "./components/UI/SectionTitle/SectionTitle";

function App() {

    return <div className="App">
        <SectionTitle
            titleType='filters'
            filterType='property'
        />
    </div>;
}

export default App;
