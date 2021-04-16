import styled, { css } from "styled-components";

export const TopBoxForSmall = styled.div<{ isdanger: boolean }>`
  position: relative;
  height: 145px;
  background: linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%);

  ${({isdanger}) =>
  isdanger && css`
    background: linear-gradient(90deg, #FFB199 0%, #FF0844 100%);
  `}

  @media(max-width: 742px){
    display: none;
  }
`;

export const TopBoxForSmallAdaptive = styled.div<{ isdanger: boolean }>`
  display: none;
  position: relative;
  height: 145px;
  background: linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%);

  ${({isdanger}) =>
  isdanger && css`
    background: linear-gradient(90deg, #FFB199 0%, #FF0844 100%);
  `}

  @media(max-width: 742px) {
    display: block;
  }
`;

export const DinoImage = styled.img`
  display: block;
  position: absolute;
  left: 16px;
  bottom: 0;
  width: 56px;
`;

export const AsteroidImage = styled.img<{ asteroid: string, positionX: number, positionY: number, issmall?: boolean }>`
  display: block;
  position: absolute;

  ${({asteroid, positionX, positionY, issmall}) =>
  asteroid && css`
    width: ${asteroid};
    bottom: ${issmall ? "50%" :  50 - positionX + "%" };
    left: ${issmall ? 10 - positionY + "%" : 10 - positionY + "%"};

    @media(max-width: 742px) {
      width: ${asteroid};
      bottom: 50%;
      left: ${10 - positionY + "%"};
    }
  `}
`;

export const MeteorInfoContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  width: 63%;
  z-index: 10;
`;

export const MeteorInfoBox = styled.div`
  width: 50%;
`;

export const MeteorName = styled.p`
  margin-bottom: 16px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-decoration-line: underline;
  color: black;
`;

export const AppraisalBox = styled.div`
  margin-top: 16px;
  margin-left: auto;
`;

export const Appraisal = styled.p`
  margin-bottom: 8px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const AppraisalDescription = styled.span`
  font-weight: bold;
`;

export const MeteorBox = styled.div<{isdanger: boolean, issmall?: boolean}>`
  position: relative;
  width: 100%;
  height: 200px;
  padding: 24px;
  background: linear-gradient(90deg, #CFF37D 0%, #7DE88C 100%);
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;

  ${({isdanger}) =>
  isdanger && css`
    background: linear-gradient(90deg, #FFB199 0%, #FF0844 100%);
  `}

  ${({issmall}) =>
  issmall && css`
    position: static;
    display: flex;
    flex-direction: column;
    height: 390px;
    padding: 0;
    background: none;

    ${MeteorInfoContainer}{
      width: 100%;
      margin-left: 0;
      flex: 1;
      flex-direction: column;
      background-color: white;
    }

    ${MeteorInfoBox}{
      width: 100%;
      padding: 16px;
    }

    ${AppraisalBox}{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0;
      margin-left: 0;
      margin-bottom: 22px;
    }

    ${DinoImage}{
      width: 35px;
      right: 8px;
      left: unset;
      transform: scale(-1, 1);
    }

    ${MeteorName}{
      position: absolute;
      left: 16px;
      bottom: 8px;
      margin: 0;
    }
  `}

  @media(max-width: 742px) {
    position: static;
    display: flex;
    flex-direction: column;
    height: 390px;
    padding: 0;
    background: none;

    ${MeteorInfoContainer}{
      width: 100%;
      margin-left: 0;
      flex: 1;
      flex-direction: column;
      background-color: white;
    }

    ${MeteorInfoBox}{
      width: 100%;
      padding: 16px;

      & > ${MeteorName} {
        display: none;
      }
    }

    ${AppraisalBox}{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0;
      margin-left: 0;
      margin-bottom: 22px;
    }

    ${DinoImage}{
      width: 35px;
      right: 8px;
      left: unset;
      transform: scale(-1, 1);
    }

    ${MeteorName}{
      position: absolute;
      left: 16px;
      bottom: 8px;
      margin: 0;
    }
  }
`;

export const TopBig = styled.div`
  @media(max-width: 742px){
    display: none;
  }
`;
