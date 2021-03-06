import styled, { css } from "styled-components";

export const MeteorName = styled.p`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  text-decoration-line: underline;
  color: #000000;

  @media(max-width: 688px){
    text-align: center;
  }
`;

export const MeteorImageBox = styled.div<{isdanger: boolean}>`
  display: flex;
  flex: 1;
  height: 288px;
  background: linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%);
  border: 1.5px solid black;
  border-radius: 10px;
  
  ${({isdanger}) =>
  isdanger && css`
    background: linear-gradient(90deg, #FFB199 0%, #FF0844 100%);
  `}

  @media(max-width: 688px){
    margin-bottom: 12px;
  }
`;

export const MeteorImage = styled.img`
  margin: auto;
  display: block;
  width: 144px;

  @media(max-width: 688px){
    width: 288px;
  }
`;

export const TopInfoMeteorBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;

  @media(max-width: 920px){
    padding-left: 24px;
    padding-right: 24px;
  }

  @media(max-width: 688px){
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 24px;

  @media(max-width: 688px){
    margin-right: 0;
    width: 100%;
  }
`;

export const DataBox = styled.div`
  margin-top: 16px;
`;

export const ApproachData = styled.div`
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  margin-top: 24px;
`;

export const ApproachTitle = styled.p`
  margin-bottom: 8px;
  font-family: Helvetica;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: black;

  @media(max-width: 370px){
    font-size: 24px;
    line-height: 24px;
  }
`;

export const ApproachBox = styled.div`
  padding: 12px;
  margin: 12px 0;
  border: 1.5px solid black;
  border-radius: 10px;

  @media(max-width: 625px){
    margin: 12px;
  }
`;

export const Date = styled.div`
  margin-bottom: 12px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: black;
`;

export const DestroyButtonBox = styled.div`
  margin: 0 auto;
  margin-top: 36px;
`;