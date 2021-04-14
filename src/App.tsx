import React from 'react';
import _get from "lodash/get";
import * as Component from "./components";

import GlobalFonts from "./styles/fonts";
import GlobalStyle from "./styles/global";
import { ApiUrl } from "./mock";

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
      <div style={({width: "920px", margin: "25px"})}>
        <Component.Meteor 
          id={15}
          name="2021 FQ"
          isDanger={false}
          isSmall={false}
          size={85}
          onDestroyClick={() => null}
          meteorInfo={[
            {
              title: "Дата",
              data: "12 сентября 2021"
            },
            {
              title: "Расстояние",
              data: "7 235 024 км"
            },
            {
              title: "Размер",
              data: "850 м"
            }
          ]}
        />
      </div>
    </>
  );
}

export default App;
