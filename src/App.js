import React from "react";
import Welcome from "./components/Obtainusername";
import WeatherApi from "./components/API.js";

const App = () => {
  return (
    <div>
      <h1 className="header">Daily weather Application</h1>
      <Welcome message="Get near accurate weather details for your desired location" />
      <WeatherApi />
    </div>
  );
};

export default App;
