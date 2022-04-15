import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App vh-100">
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
