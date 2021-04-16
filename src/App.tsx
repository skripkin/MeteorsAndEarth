import React from 'react';
import _get from "lodash/get";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ApiUrl } from "./mock";
import { Home, Destroy, MeteorInfo } from "./pages";

const App = () => {
  const [deleteMeteor, setDeleteMeteor] = React.useState<any>([]);
  const [data, setData] = React.useState([]);
  const [getId, setGetId] = React.useState();

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
  
  const validMeteor = (type: string) => getMeteors().map((item: any) => {
    return { 
      ...item,
      date: item.date.reduce((a: any, c: any) => {
        if(a.miss_distance[type] < c.miss_distance[type]) {
          return a
        } else {
          return c
        }
      })
    }
  });

  const destroyMeteor = (dest: any) => {
    console.log("Dest in func", typeof dest);
    if(typeof dest !== "object") {

      if(deleteMeteor.find((item: any) => item.id === dest)){
        alert("Метеор уже добавлен на уничтожение");
      } else {
        const meteorsArray = validMeteor("kilometers").filter((item: any) => item.id === dest && item);
        setDeleteMeteor([...deleteMeteor, meteorsArray[0]]);
      }

    } else if(deleteMeteor.find((item: any) => item.id === dest.id)) {
      alert("Метеор уже добавлен на уничтожение");
    } else {
      setDeleteMeteor([...deleteMeteor, dest])
    }
  };

  const deleteFromDestroyMeteor = (dest: any) => {
    if(typeof dest === "object"){
      const destArray: any = [];
      const asdf = deleteMeteor.map((item: any) => item.id);

      for(let i = 0; i < deleteMeteor.length; i++) {
        if(!dest.includes(asdf[i])) {
          destArray.push(deleteMeteor[i])
        }
      }
      
      setDeleteMeteor(destArray);
    } else {
      setDeleteMeteor(deleteMeteor.filter((item: any) => item.id !== dest))
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/meteor-${getId}`} component={() => <MeteorInfo id={getId ? getId : ""} onDestroyClick={destroyMeteor}/>} />
        <Route path="/destroy" component={() => <Destroy destroyMeteor={deleteMeteor} onClickDelete={deleteFromDestroyMeteor}/>} />
        <Route path="/" component={() => <Home meteorsArray={validMeteor} onClickDelete={destroyMeteor} onGetId={setGetId}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;