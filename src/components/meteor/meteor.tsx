import React from "react";
import MeteorData from "../meteor-data";
import Button from "../button";

import * as Styled from "./styles";

interface IInfo {
  title: string,
  data: string,
}

interface IMeteor {
  meteorInfo: IInfo[],
  isDanger: boolean,
  name: string,
  size: number,
  onDestroyClick: () => void;
  isSmall?: boolean;
  status?: "addet" | "not addet" | "out";
}

const Meteor = ({meteorInfo, isDanger, name, size, onDestroyClick, isSmall = false, status = "not addet"}: IMeteor) => {
  const getHowBigMeteor = () => {
    const meteor = size
    if(isSmall){
      return Math.round(meteor/1.4);
    }
    return Math.round(meteor/1.2);
  }

  const getPositionX = () => {
    const pixels = getHowBigMeteor();
    if(isSmall){
      return Math.round((pixels-61)/31);
    }
    return Math.round((pixels-71)/31);
  }

  const getPositionY = () => {
    const pixels = getHowBigMeteor();
    if(isSmall){
      return Math.round((pixels-61)/25);
    }
    return Math.round((pixels-71)/25);
  }
  return(
    <Styled.MeteorBox isdanger={isDanger} issmall={isSmall}>
        <Styled.TopBoxForSmallAdaptive isdanger={isDanger}>
          <Styled.AsteroidImage src="./asteroid.svg" alt="asteroid" asteroid={`${getHowBigMeteor()}px`} positionX={getPositionX()} positionY={getPositionY()} issmall={isSmall}/>
          <Styled.DinoImage src="./dino.svg" alt="Dino"/>
          <Styled.MeteorName>{name}</Styled.MeteorName>
        </Styled.TopBoxForSmallAdaptive>
      {isSmall ?
        <Styled.TopBoxForSmall isdanger={isDanger}>
          <Styled.AsteroidImage src="./asteroid.svg" alt="asteroid" asteroid={`${getHowBigMeteor()}px`} positionX={getPositionX()} positionY={getPositionY()} issmall={isSmall}/>
          <Styled.DinoImage src="./dino.svg" alt="Dino"/>
          <Styled.MeteorName>{name}</Styled.MeteorName>
        </Styled.TopBoxForSmall>
      :
        <Styled.TopBig>
          <Styled.AsteroidImage src="./asteroid.svg" alt="asteroid" asteroid={`${getHowBigMeteor()}px`} positionX={getPositionX()} positionY={getPositionY()}/>
          <Styled.DinoImage src="./dino.svg" alt="Dino"/>
        </Styled.TopBig>
      }
      <Styled.MeteorInfoContainer>
        <Styled.MeteorInfoBox>
          {!isSmall && 
            <Styled.MeteorName>{name}</Styled.MeteorName>
          }
          <MeteorData meteorData={meteorInfo}/>
        </Styled.MeteorInfoBox>
        <Styled.AppraisalBox>
          <Styled.Appraisal>Оценка:<br/> <Styled.AppraisalDescription>{isDanger ? "опасен" : "не опасен"}</Styled.AppraisalDescription></Styled.Appraisal>
          <Button status={status} onClick={onDestroyClick}/>
        </Styled.AppraisalBox>
      </Styled.MeteorInfoContainer>
    </Styled.MeteorBox>
  )
};

export default Meteor;