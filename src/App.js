import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
// import Forecast from "./Forecast"; <Forecast />
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-wrapper">
          <Weather defaultCity={"London"} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
