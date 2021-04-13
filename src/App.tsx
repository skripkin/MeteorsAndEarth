import React from 'react';
import * as Component from "./components";

import { apiData } from "./mock";

const App = () => {
  console.log("Nasa Data", apiData);

  return (
    <>
      <Component.Meteor />
    </>
  );
}

export default App;
