import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import * as Component from "../../components";

import * as Home from "../home/styles";
import * as Styled from "./styles";

interface IProp {
  destroyMeteor: any[];
  onClickDelete: (dest: any | any[]) => void;
}

const Destroy = ({ destroyMeteor, onClickDelete }: IProp) => {
  const history = useHistory();
  const [check, setCheck] = React.useState(false);
  const [distance, setDistance] = React.useState(false);
  const [destroyMeteors, setDestroyMeteor] = React.useState<any>([]);
  const type = distance ? "lunar" : "kilometers";

  const sortMeteor = destroyMeteor.sort((a: any, b: any) => Date.parse(a.date.close_approach_date) - Date.parse(b.date.close_approach_date));

  const dangeres = sortMeteor.filter((item: any) => item.isDanger);

  const filterMeteor = check ? dangeres : sortMeteor;

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
            <Home.RoomLink onClick={() => history.goBack()}>Верунться на главную</Home.RoomLink>
          </Home.LinkFlex>
        </Home.TitleBox>
      </Home.Header>
      <Home.FilterCase>
        <Home.FilterCheckBoxCase>
          <Home.CheckBox type="checkbox" checked={check} onChange={() => setCheck(!check)}/>
          <Home.FilterCheckBox />
          <Home.FilterCheckBoxTitle>Показать только опасные</Home.FilterCheckBoxTitle>
        </Home.FilterCheckBoxCase>
        <Home.FilterFlex> 
          <Home.DistanceTitle>Расстояние </Home.DistanceTitle>
          <Home.DistanceTab isactive={distance ? false : true} onClick={() => setDistance(!distance)}>в километрах,</Home.DistanceTab>
          <Home.DistanceTab isactive={distance ? true : false} onClick={() => setDistance(!distance)}>в дистанциях до луны</Home.DistanceTab>
        </Home.FilterFlex>
      </Home.FilterCase>

      <Styled.MeteorContainer>
        {filterMeteor.map((item: any) =>
          <Styled.MeteorBox key={item.name} onClick={() => setDestroyMeteor([...destroyMeteors, item.id ])}>
            <Component.Meteor 
              name={item.name}
              isDanger={item.isDanger}
              isSmall={true}
              size={Math.round(((item.meters.estimated_diameter_min + item.meters.estimated_diameter_max)/2)/100)}
              onDestroyClick={() => onClickDelete(item.id)}
              status="out"
              meteorInfo={[
                {
                  title: "Дата",
                  data: moment(item.date.close_approach_date).locale("ru").format("D MMMM YYYY")
                },
                {
                  title: "Расстояние",
                  data: `${Math.round(item.date.miss_distance[type])}  ${distance ? "LD" : "км"}`
                },
                {
                  title: "Размер",
                  data: `${Math.round(((item.meters.estimated_diameter_min + item.meters.estimated_diameter_max)/2))} м`
                }
              ]}
            />
          </Styled.MeteorBox>
        )}
      </Styled.MeteorContainer>
      <Styled.DestroyButton onClick={() => onClickDelete(destroyMeteors)}>
        <Styled.DestroyButtonTitle>Заказать бригаду для уничтожения {destroyMeteors.length === 0 ? "0" : `(${destroyMeteors.length})`} астероидов</Styled.DestroyButtonTitle>
      </Styled.DestroyButton>
      <Home.AssetsTitle>2021 © Все права и планета защищены</Home.AssetsTitle>
    </Home.Container>
  )
};

export default Destroy;