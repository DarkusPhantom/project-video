import React from "react";

import "./css/StadisticTable.css";
import DataList from "../Data/dataTable";

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
          DataList.map(({ id, country, generation, datetime, year }) => {
            return (
              <div className="row grid-row" key={id}>
                <div className="col">{country}</div>
                <div className="col">{generation}</div>
                <div className="col">{datetime}</div>
                <div className="col">{year}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default StadisticTable;
