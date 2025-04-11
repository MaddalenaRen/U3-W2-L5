import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dettagli from "./Dettagli";

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Rome,it");
  const [search, setSearch] = useState("");

  const apiKey = "aa6354ec4cfda784e7dcdf2964902721";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=it&appid=${apiKey}`;

  const handleSearchChange = (event) => {
    setSearch(event.target.value); // Imposta il valore della ricerca
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCity(search);
    setSearch(""); // Pulisce la barra di ricerca
  };

  useEffect(() => {
    if (!city) return; // Non fare la fetch se la città è vuota
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
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Meteo</h1>

      {/* Barra di ricerca */}
      <form
        onSubmit={handleSearchSubmit}
        className="d-flex justify-content-center mb-4"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-pill"
            value={search}
            onChange={handleSearchChange}
            placeholder="Cerca una città"
          />
          <button type="submit" className="btn btn-primary rounded-pill">
            Cerca
          </button>
        </div>
      </form>

      {loading && <p className="text-center">Caricamento...</p>}
      {error && <p className="text-center text-danger">Errore: {error}</p>}

      {weather && (
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body text-center">
            <h5 className="card-title">{weather.name}</h5>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="mb-3"
              style={{ width: "100px" }}
            />
            <h2 className="card-text">{weather.main.temp}°C</h2>
            <p className="card-text">Vento: {weather.wind.speed} km/h</p>
            <p className="card-text">
              Condizioni: {weather.weather[0].description}
            </p>

            <Link to={`/dettagli/${weather.name}`} className="btn btn-primary">
              Vedi Dettagli
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
