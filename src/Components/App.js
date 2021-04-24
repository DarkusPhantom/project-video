import React, { Fragment } from "react";

import MediaPlayer from "./MediaPlayer";
import Navbar from "./Navbar";
import StadisticTable from "./StadisticsTable";

function App() {
  return (
    <Fragment>
      <MediaPlayer />
      <Navbar />
      <StadisticTable />
    </Fragment>
  );
}

export default App;
