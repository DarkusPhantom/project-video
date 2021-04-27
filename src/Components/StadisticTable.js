import React from "react";

import "./css/StadisticTable.css";
import DataList from "../Data/dataTable";
//import TableDataVideo from "../Data/csvjson.json";
import TableDataVideo from "../Data/DataTable.json";

const listVideosData = JSON.parse(JSON.stringify(TableDataVideo));
const listTableVideosInfo = Object.values(listVideosData);

/*Componente de la tabla de estadisticas del video*/
function StadisticTable() {
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
      <div className="body-table">
        {
          /*Recorre los datos de la lista de Datos y los plasma en la tabla*/
          listTableVideosInfo.map(
            ({ id, country, age_range, timestamp, views }) => {
              return (
                <div className="row grid-row" key={id}>
                  <div className="col">{country}</div>
                  <div className="col">{age_range}</div>
                  <div className="col">{timestamp}</div>
                  <div className="col">{views}</div>
                </div>
              );
            }
          )
        }
      </div>
    </div>
  );
}

export default StadisticTable;
