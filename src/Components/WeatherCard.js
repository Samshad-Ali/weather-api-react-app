import React from "react";

const WeatherCard = ({ data }) => {
  const {
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
  } = data;

  return (
    <>
      <header>
        <div className="city-name">
          {name},{country}
        </div>
        <div className="status">{main}</div>
      </header>

      <main>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="phto"
          />
        </div>
        <div className="temp">{temp}° C</div>
        <div className="min-max">
          <div className="min">Min {temp_min}° C </div>
          <div className="max">Max {temp_max}° C</div>
        </div>
      </main>

      <hr />
      <footer>
        <div className="footer-box">
          <i className="fa-solid fa-droplet"></i>
          <span>Humidity {humidity}% </span>
        </div>
        <div className="footer-box">
          <i className="fa-solid fa-wind"></i>
          <span>Wind Speed {speed} km/hr </span>
        </div>
        <div className="footer-box">
          <i className="fa-solid fa-eye-slash"></i>
          <span>Visibility {visibility / 1000} km</span>
        </div>
      </footer>
    </>
  );
};

export default WeatherCard;
