import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 37px;
  margin-bottom: 24px;

  @media(max-width: 920px){
    margin-top: 24px;
  }
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-family: Helvetica;
  font-size: 36px;
  line-height: 48px;
  color: black;

  @media(max-width: 350px){
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  color: black;

  @media(max-width: 412px){
    .adaptive{
      display: none;
    }
  }
`;


export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid black;

  @media(max-width: 920px){
    padding: 24px;
  }

  @media(max-width: 575px){
    display: block;
  }
`;

export const LinkFlex = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 575px){
    margin-top: 20px;
  }
`;

export const RoomTitle = styled.p`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: black;
`;

export const RoomLink = styled.button`
  margin-left: 24px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: black;
`;

export const FilterCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 24px;

  @media(max-width: 920px){
    margin: 24px;
  }

  @media(max-width: 470px){
    display: block;
  }
`;

export const FilterFlex = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 635px){
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media(max-width: 470px){
    margin-top: 14px;
    justify-content: flex-start;
  }
`;

export const FilterCheckBox = styled.div`
  width: 18px;
  height: 18px;
  border: 3px solid black;
  background-color: white;
  border-radius: 3px;
`;

export const FilterCheckBoxTitle = styled.p`
  margin-left: 8px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  color: black;

  @media(max-width: 635px){
    white-space: nowrap;
  }
`;

export const FilterCheckBoxCase = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;

  :checked {
    ~ ${FilterCheckBox} {
      background-color: black;
    }
  }
`;

export const DistanceTitle = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  color: black;
`;

export const DistanceTab = styled.p<{isactive: boolean}>`
  margin-left: 5px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: black;
  cursor: pointer;

  ${({isactive}) => 
  isactive && css`
    font-weight: bold;
    text-decoration-line: none;
  `}
`;

export const MeteorBox = styled.div`
  margin-bottom: 16px;
  cursor: pointer;
  
  :last-child {
    margin-bottom: 0;
  }

  @media(max-width: 920px){
    padding: 0 24px;
  }
`;

export const AssetsTitle = styled.p`
  margin-top: 56px;
  margin-bottom: 46px;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: black;

  @media(max-width: 350px){
    margin: 24px;
    margin-top: 32px;
  }
`;