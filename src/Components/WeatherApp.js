import React, { useEffect, useRef, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [cityName, setCityName] = useState("Goa");
  const [input, setInput] = useState("");

  const ApiKeys = "2002508734f5113e8bc05cef83789e34";
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${ApiKeys}`;

  useEffect(() => {
    fetchingData();
  }, [cityName]);

  const fetchingData = async () => {
    try {
      const res = await axios.get(ApiUrl);
      const data = res.data;
      const { name, visibility } = data;
      const { temp, temp_min, temp_max, humidity } = data.main;
      const { country } = data.sys;
      const { speed } = data.wind;
      const { main, description, icon } = data.weather[0];

      const info = {
        name,
        visibility,
        temp,
        temp_min,
        temp_max,
        humidity,
        country,
        speed,
        main,
        description,
        icon,
      };
      setWeatherInfo(info);
    } catch (error) {
      alert("Request failed with status code 404:Enter correct city name");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(input);
    setInput("");
  };

  return (
    <div className="weather-box">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Enter city name..."
          required={true}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div className="weather-card">
        <WeatherCard data={weatherInfo} />
      </div>
    </div>
  );
};

export default WeatherApp;
