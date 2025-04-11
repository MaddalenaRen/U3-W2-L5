import React from "react";

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
    <div className="card h-100">
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
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
