import React from 'react';
import _get from "lodash/get";
import * as Component from "./components";

import GlobalFonts from "./styles/fonts";
import GlobalStyle from "./styles/global";
import { ApiUrl } from "./mock";

// const data = async () => {
//   const allData = async () => {
//     const data = await fetch(ApiUrl).then((response) => { return response.json() }).then((data) => { return data });
//     return data;
//   }
  
//   const data = await allData();
//   return data;
// }

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const data = await fetch(ApiUrl).then((response) => { return response.json() }).then((data) => { return data });
      setData(data);
    };

    loadData();
  }, []);

  if (!Object.values(data).length) {
    return <span>Loading...</span>
  }

  const meteors = _get(data, "near_earth_objects", []);
  console.log("Nasa Data", data);
  console.log("Meteors", meteors);

  return (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <Component.Meteor />
      <div style={({width: "289px"})}>
        <Component.Information leftData="Data" rightData="12 сентября 2021" />
      </div>
    </>
  );
}

export default App;
