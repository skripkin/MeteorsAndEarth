import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import * as Component from "../../components";

import * as Styled from "./styles";

interface IProp {
  destroyMeteor: any;
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
    <Styled.Container>
      <Styled.Header>
        <Styled.TitleBox>
          <div>
            <Styled.Title>ARMAGGEDON V</Styled.Title>
            <Styled.Description>Сервис мониторинга и уничтожения астероидов,<br/> опасно подлетающих к Земле.</Styled.Description>
          </div>
          <Styled.LinkFlex>
            <Styled.RoomTitle>Астероиды</Styled.RoomTitle>
            <Styled.RoomLink onClick={() => history.goBack()}>Верунться на главную</Styled.RoomLink>
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
      <Styled.AssetsTitle>2021 © Все права и планета защищены</Styled.AssetsTitle>
    </Styled.Container>
  )
};

export default Destroy;