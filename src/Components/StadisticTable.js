import React, { useState, useEffect } from "react";

import "./css/StadisticTable.css";

//Si quieres verlo con los datos que me enviaron, quitarle los //
//al import TableDataVideo from "../Data/csvjson.json"
//
//import TableDataVideo from "../Data/csvjson.json";
//Nota: Con los datos de arriba se tardara un poquito, pero mostrara
//la tabla completa

import TableDataVideo from "../Data/DataTable.json";

/*Componente de la tabla de estadisticas del video*/
function StadisticTable({ sortData }) {
  /*Conversion de json a objeto*/
  const listVideosData = JSON.parse(JSON.stringify(TableDataVideo));
  /*Guarda los valores de cada video en la lista de tabla de videos*/
  const listTableVideosInfo = Object.values(listVideosData);

  //Algoritmo de busqueda secuencial
  const sortElements = (dataList, element) => {
    let array = [];
    array = dataList.map((video) => {
      //Lista de array que contendra los elementos
      let arrayElement = [];

      //Contador
      let index = 0;

      //Compara si el elemento para hacer sort es igual a la
      //data del video
      if (video.country === element && video[index] !== []) {
        arrayElement[index] = video;
        console.log(arrayElement);
      }

      //Incrementa el contador
      index++;

      //Los elementos del array
      return arrayElement;
    });
  };

  //Funcion que contiene la estructura de la tabla de datos
  const contentTable = (id, country, age_range, timestamp, views) => {
    return (
      <div className="row grid-row" key={id}>
        <div className="col">{country}</div>
        <div className="col">{age_range}</div>
        <div className="col">{timestamp}</div>
        <div className="col">{views}</div>
      </div>
    );
  };

  /*Recorre los datos de la lista de Datos y los plasma en la tabla*/
  const dataTable = (dataList) => {
    return dataList.map(({ id, country, age_range, timestamp, views }) =>
      contentTable(id, country, age_range, timestamp, views)
    );
  };

  //Manejo de datos para la lista de tabla de datos
  const [data, setData] = useState(dataTable(listTableVideosInfo));

  //Dependiendo el tipo de elemento seleccionado por el btn,
  //hara sort con respecto al elemento elegido
  useEffect(() => {
    switch (sortData) {
      case "Millennial":
        sortElements(TableDataVideo, sortData);
        break;

      case "Baby Boomer":
        sortElements(TableDataVideo, sortData);
        break;

      case "Generation X":
        sortElements(TableDataVideo, sortData);
        break;
      default:
        setData(dataTable(listTableVideosInfo));
    }
  }, [sortData]);

  return (
    <div className="StadisticTable">
      <header className="header-table grid-header">
        <div className="header-table-name country">
          <p>Pais</p>
        </div>
        <div className="header-table-name range">
          <p>Rango Etario</p>
        </div>
        <div className="header-table-name datetime">
          <p>Fecha</p>
        </div>
        <div className="header-table-name reproductions">
          <p>Views</p>
        </div>
      </header>
      <div className="body-table">{data}</div>
    </div>
  );
}

export default StadisticTable;
