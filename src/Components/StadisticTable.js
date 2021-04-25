import React from "react";

import "./css/StadisticTable.css";
import DataTable from "../Data/dataTable";

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
        {DataTable.map(({ id, country, generation, datetime, year }) => {
          return (
            <div className="row grid-row" key={id}>
              <div className="col">{country}</div>
              <div className="col">{generation}</div>
              <div className="col">{datetime}</div>
              <div className="col">{year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StadisticTable;
