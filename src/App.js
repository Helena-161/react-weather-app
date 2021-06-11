import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
