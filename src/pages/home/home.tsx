import React from "react";
import { useHistory } from "react-router-dom";

import moment from "moment";
import 'moment/locale/ru'

import * as Component from "../../components";

import * as Styled from "./styles";

interface IProps {
  meteorsArray: (type: string) => any[];
  onClickDelete: (dest: any) => void;
  onGetId: (id: any) => void;
  
}

const Home = ({ meteorsArray, onClickDelete, onGetId }:IProps) => {
  const history = useHistory();
  const [check, setCheck] = React.useState(false);
  const [distance, setDistance] = React.useState(false);
  const type = distance ? "lunar" : "kilometers";

  const SortArray = [...meteorsArray(type)];

  const sortMeteor = SortArray.sort((a: any, b: any) => Date.parse(a.date.close_approach_date) - Date.parse(b.date.close_approach_date));

  const dangeres = sortMeteor.filter((item: any) => item.isDanger);

  const filterMeteor = check ? dangeres : sortMeteor;

  return(
    <Styled.Container>
      <Styled.Header>
        <Styled.TitleBox>
          <div>
            <Styled.Title>ARMAGGEDON V</Styled.Title>
            <Styled.Description>Сервис мониторинга и уничтожения астероидов,<br/> опасно подлетающих к Земле.</Styled.Description>
          </div>
          <Styled.LinkFlex>
            <Styled.RoomTitle>Астероиды</Styled.RoomTitle>
            <Styled.RoomLink onClick={() => history.push("destroy")}>Уничтожение</Styled.RoomLink>
          </Styled.LinkFlex>
        </Styled.TitleBox>
      </Styled.Header>
      <Styled.FilterCase>
        <Styled.FilterCheckBoxCase>
          <Styled.CheckBox type="checkbox" checked={check} onChange={() => setCheck(!check)}/>
          <Styled.FilterCheckBox />
          <Styled.FilterCheckBoxTitle>Показать только опасные</Styled.FilterCheckBoxTitle>
        </Styled.FilterCheckBoxCase>
        <Styled.FilterFlex> 
          <Styled.DistanceTitle>Расстояние </Styled.DistanceTitle>
          <Styled.DistanceTab isactive={distance ? false : true} onClick={() => setDistance(!distance)}>в километрах,</Styled.DistanceTab>
          <Styled.DistanceTab isactive={distance ? true : false} onClick={() => setDistance(!distance)}>в дистанциях до луны</Styled.DistanceTab>
        </Styled.FilterFlex>
      </Styled.FilterCase>
      {filterMeteor.map((item: any) =>
        <Styled.MeteorBox key={item.name} onClick={() => {onGetId(item.id); history.push(`/meteor-${item.id}`)}}>
          <Component.Meteor 
            name={item.name}
            isDanger={item.isDanger}
            isSmall={false}
            size={Math.round(((item.meters.estimated_diameter_min + item.meters.estimated_diameter_max)/2)/100)}
            onDestroyClick={() => onClickDelete(item)}
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
      <Styled.AssetsTitle>2021 © Все права и планета защищены</Styled.AssetsTitle>
    </Styled.Container>
  )
};

export default Home;