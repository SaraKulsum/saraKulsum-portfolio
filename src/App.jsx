import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Hamd from "./components/ProjectDetailPages/Hamd";
import WeatherApp from "./components/ProjectDetailPages/WeatherApp";
import Netflix from "./components/ProjectDetailPages/Netflix";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Hamd />} path="/work/hamd-e-commerce" />
          <Route element={<WeatherApp />} path="/work/weather-App" />
          <Route element={<Netflix />} path="/work/netlix-clone" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
