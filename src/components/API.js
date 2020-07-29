import React, { Component } from "react";

class WeatherApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDetails: "",
      weatherHumidity: "",
      weatherPressure: "",
      weatherTemperature: "",
    };
  }

  componentDidMount() {
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/"
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        const allDetails = data.consolidated_weather[0];
        const weather = data.consolidated_weather[0].wind_speed;
        const pressure = data.consolidated_weather[0].air_pressure;
        const humidity = data.consolidated_weather[0].humidity;
        const temperature = data.consolidated_weather[0].max_temp;
        console.log(allDetails);
        this.setState({ weatherDetails: weather });
        this.setState({ weatherHumidity: humidity });
        this.setState({ weatherPressure: pressure });
        this.setState({ weatherTemperature: temperature });
      })
      .catch((error) => console.log("error fetching API"));
  }
  render() {
    return (
      <div className="fetchDetails">
        <h1>
          The wind speed of your desired location is {this.state.weatherDetails}
        </h1>
        <h1>
          The relative humidity of your desired location is{" "}
          {this.state.weatherHumidity}
        </h1>
        <h1>
          The Air pressure of your desired location is{" "}
          {this.state.weatherPressure}
        </h1>
        <h1>
          The Temperature of your desired location is{" "}
          {this.state.weatherTemperature} celsius
        </h1>
      </div>
    );
  }
}

export default WeatherApi;
