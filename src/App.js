import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import CardSlider from "./components/CardSlider/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Destination from "./components/Destination/Destination";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<CardSlider></CardSlider>}></Route>
        <Route path="/home" element={<CardSlider></CardSlider>}></Route>
        <Route
          path="/destination"
          element={<Destination></Destination>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
