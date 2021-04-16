import React from "react";
import { useHistory } from "react-router-dom";

import moment from "moment";
import 'moment/locale/ru'

import { API } from "../../mock";
import * as Home from "../home/styles";
import * as Styled from "./styles";

import * as Component from "../../components";

interface IProp {
  id: any;
  onDestroyClick: (id: any) => void;
}


const MeteorInfo = ({ id, onDestroyClick }: IProp) => {
  const history = useHistory();
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const data = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API}`).then((response) => { return response.json() }).then((data) => { return data });
      setData(data);
    };

    loadData();
  }, []);

  if (!Object.values(data).length) {
    return <span>Loading...</span>
  }

  return(
    <Home.Container>
      <Home.Header>
        <Home.TitleBox>
          <div>
            <Home.Title>ARMAGGEDON V</Home.Title>
            <Home.Description>Сервис мониторинга и уничтожения астероидов,<br/> опасно подлетающих к Земле.</Home.Description>
          </div>
          <Home.LinkFlex>
            <Home.RoomTitle>Астероиды</Home.RoomTitle>
            <Home.RoomLink onClick={() => history.goBack()}>Вернуться на главную</Home.RoomLink>
          </Home.LinkFlex>
        </Home.TitleBox>
      </Home.Header>
      <Styled.TopInfoMeteorBox>
        <Styled.InfoBox>
          <Styled.MeteorName>{data.name}</Styled.MeteorName>
          <Styled.DataBox>
            <Component.Information leftData="Размер(мин)" rightData={data.estimated_diameter.meters.estimated_diameter_min}/>
          </Styled.DataBox>
          <Styled.DataBox>
            <Component.Information leftData="Размер(макс)" rightData={data.estimated_diameter.meters.estimated_diameter_max}/>
          </Styled.DataBox>
          <Styled.DataBox>
            <Component.Information leftData="Потенциальная опастность" rightData={data.is_potentially_hazardous_asteroid ? "Опасен" : "Не опасен"}/>
          </Styled.DataBox>
          <Styled.DataBox>
            <Component.Information leftData="Пересечение с орбитой(мин)" rightData={data.orbital_data.minimum_orbit_intersection}/>
          </Styled.DataBox>
          <Styled.DestroyButtonBox>
            <Component.Button status="not addet" onClick={() => onDestroyClick(id)}/>
          </Styled.DestroyButtonBox>
        </Styled.InfoBox>
        <Styled.MeteorImageBox isdanger={data.is_sentry_object}>
          <Styled.MeteorImage src="./asteroid.svg" alt="Asteroid"/>
        </Styled.MeteorImageBox>
      </Styled.TopInfoMeteorBox>
      <Styled.ApproachData>
        <Styled.ApproachTitle>Данные о сближении с землей</Styled.ApproachTitle>
        {data.close_approach_data.map((item: any) =>
          <Styled.ApproachBox key={item.close_approach_date}>
            <Styled.Date>{moment(item.close_approach_date_full).locale("ru").format("D MMMM YYYY в hh:mm")}</Styled.Date>
            <Styled.DataBox>
              <Component.Information leftData="Скорость относительно земли(км/ч)" rightData={item.relative_velocity.kilometers_per_hour}/>
            </Styled.DataBox>
            <Styled.DataBox>
              <Component.Information leftData="Дистанция сближения(км)" rightData={item.miss_distance.kilometers}/>
            </Styled.DataBox>
            <Styled.DataBox>
              <Component.Information leftData="Дистанция сближения(LD)" rightData={item.miss_distance.lunar}/>
            </Styled.DataBox>
            <Styled.DataBox>
              <Component.Information leftData="Орбита вращения" rightData={item.orbiting_body}/>
            </Styled.DataBox>
          </Styled.ApproachBox>
        )}
      </Styled.ApproachData>
    </Home.Container>
  )
};

export default MeteorInfo;