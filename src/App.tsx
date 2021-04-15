import React from 'react';
import _get from "lodash/get";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ApiUrl } from "./mock";
import { Home } from "./pages";

const App = () => {
  const [deleteMeteor, setDeleteMeteor] = React.useState<any>([]);
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
  const getMeteors = () => {
    const meteorsNewArray: any[] = meteors.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        meters: item.estimated_diameter.meters,
        isDanger: item.is_potentially_hazardous_asteroid,
        date: item.close_approach_data.filter((item: any) => {
          return new Date() <= new Date(item.close_approach_date)
        })
      }
    }
  );
    return meteorsNewArray;
  }

  const destroyMeteor = (dest: any) => {
    if(deleteMeteor.find((item: any) => item.id === dest.id)) {
      alert("Метеор уже добавлен на уничтожение");
    } else {
      setDeleteMeteor([...deleteMeteor, dest])
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <Home meteorsArray={getMeteors()} onClickDelete={destroyMeteor}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;