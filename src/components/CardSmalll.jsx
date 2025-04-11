import React from "react";
// https://api.openweathermap.org/data/2.5/forecast?q=rome,it,{country%20code}&appid=aa6354ec4cfda784e7dcdf2964902721

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

function CardSmalll(day) {
  return (
    <div>
      <h1>Giorno {getNameDay(day.dt_txt)}</h1>
      {/* Aggiungi qui il contenuto dei dettagli della città */}
    </div>
  );
}

export default CardSmalll;
