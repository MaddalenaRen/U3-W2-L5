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
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={day.weather[0].description}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{getNameDay(day.dt_txt)}</h5>
        <p className="card-text">Temperatura: {day.main.temp}°C</p>
        <p className="card-text">Condizioni: {day.weather[0].description}</p>
      </div>
    </div>
  );
}

export default CardSmall;
