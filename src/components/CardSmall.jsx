import React from "react";
import getWeatherIcon from "./GetWeatherIcons";

const giorniDellaSettimana = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

function getNameDay(dateString) {
  const date = new Date(dateString);

  return giorniDellaSettimana[date.getDay()];
}

function CardSmall({ day }) {
  return (
    <div className="card h-100 weather-card ">
      <img
        src={getWeatherIcon(day.weather[0].main)}
        alt={day.weather[0].description}
        className="card-img-top"
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-semibold">{getNameDay(day.dt_txt)}</h5>
        <p className="card-text mb-1">
          🌡️ <strong>{day.main.temp}°C</strong>
        </p>
        <p className="card-text mb-1">
          🔻 {day.main.temp_min}°C | 🔺 {day.main.temp_max}°C
        </p>

        <p className="card-text text-muted fst-italic text-capitalize">
          Condizioni: {day.weather[0].description}
        </p>
      </div>
    </div>
  );
}

export default CardSmall;
