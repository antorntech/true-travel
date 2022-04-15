import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import CardSlider from "./components/CardSlider/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App vh-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<CardSlider></CardSlider>}></Route>
      </Routes>
    </div>
  );
}

export default App;
