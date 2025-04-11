import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSmall from "./cardSmall";

import "bootstrap/dist/css/bootstrap.min.css";

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

function Dettagli() {
  const { cityName } = useParams();
  const [forecast, setForecast] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "aa6354ec4cfda784e7dcdf2964902721";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=it&appid=${apiKey}`;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        return response.json();
      })
      .then((data) => {
        const today = new Date();
        const todayDateString = `${today.getFullYear()}-${(today.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

        // Prendi la prima previsione disponibile per il giorno corrente
        const todayForecast = data.list.find((item) =>
          item.dt_txt.startsWith(todayDateString)
        );
        setCurrentDay(todayForecast);

        // Filtra le previsioni per orario "12:00:00"
        const filteredData = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cityName, url]);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">
        Previsioni meteo per {cityName}
      </h1>
      {loading && <p className="text-center">Caricamento...</p>}
      {error && <p className="text-center text-danger">Errore: {error}</p>}

      {/* Card per il giorno corrente */}
      {currentDay && (
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src={`https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`}
                alt={currentDay.weather[0].description}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{getNameDay(currentDay.dt_txt)}</h5>
                <p className="card-text">
                  Temperatura: {currentDay.main.temp}°C
                </p>
                <p className="card-text">
                  Condizioni: {currentDay.weather[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Previsioni settimanali */}
      <div className="row">
        {forecast.map((day, index) => (
          <div key={index} className="col-md-4 mb-4">
            <CardSmall day={day} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dettagli;
