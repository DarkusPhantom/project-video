import React from "react";

import "./css/StadisticTable.css";

function StadisticTable() {
  return (
    <div className="StadisticTable">
      <header className="header-table grid-header">
        <div className="header-table-name id">
          <p>Id</p>
        </div>
        <div className="header-table-name country">
          <p>Pais</p>
        </div>
        <div className="header-table-name range">
          <p>Rango etario</p>
        </div>
        <div className="header-table-name datetime">
          <p>Fecha</p>
        </div>
        <div className="header-table-name reproductions">
          <p>Views</p>
        </div>
      </header>
      <div className="body-table">
        <div className="row grid-row">
          <div className="col">1</div>
          <div className="col">Argentina</div>
          <div className="col">Millennial</div>
          <div className="col">2020-09-01</div>
          <div className="col">2014</div>
        </div>
        <div className="row grid-row">
          <div className="col">1</div>
          <div className="col">Argentina</div>
          <div className="col">Millennial</div>
          <div className="col">2020-09-01</div>
          <div className="col">2014</div>
        </div>
        <div className="row grid-row">
          <div className="col">1</div>
          <div className="col">Argentina</div>
          <div className="col">Millennial</div>
          <div className="col">2020-09-01</div>
          <div className="col">2014</div>
        </div>
      </div>
    </div>
  );
}

export default StadisticTable;
