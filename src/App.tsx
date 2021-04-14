import React from 'react';
import * as Component from "./components";

import { apiData } from "./mock";

const App = () => {
  console.log("Nasa Data", apiData);

  return (
    <>
      <div style={({width: "289px"})}>
        <Component.Information leftData="Data" rightData="12 сентября 2021" />
      </div>
    </>
  );
}

export default App;
