import React from "react";

import "./css/Stadistic.css";
import NavbarTable from "./NavbarTable";
import StadisticTable from "./StadisticTable";

function Stadistic() {
  return (
    <div className="Stadistic slideinFast">
      <NavbarTable />
      <StadisticTable />
    </div>
  );
}

export default Stadistic;
