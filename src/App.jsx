import React, { useContext } from "react";
import Countries from "./pages/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={`${
        dark ? "bg-[#202d36]" : "bg-[#fff]"
      } h-[100vh] overflow-hidden`}
    >
      <Navbar />
      <div className="lg:container px-5 mx-auto">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="/*" element={<p> not page</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
