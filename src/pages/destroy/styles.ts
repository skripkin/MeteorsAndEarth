import styled from "styled-components";

export const MeteorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 920px){
    justify-content: center;
  }

  @media(max-width: 588px){
    flex-direction: column;
  }
`;

export const MeteorBox = styled.div`
  max-width: 288px;
  width: 100%;
  margin-right: 12px;
  margin-bottom: 12px;
  cursor: pointer;

  :nth-child(3n-3){
    margin-right: 0;
  }

  @media(max-width: 880px){
    :nth-child(3n-3){
      margin-right: 12px;
    }

    :nth-child(2n-2){
      margin-right: 0;
    }
  }

  @media(max-width: 588px){
    :nth-child(3n-3){
      margin-right: 0;
    }

    margin-right: 0;
  }
`;

export const DestroyButtonTitle = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

export const DestroyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-left: auto;
  margin-right: 12px;
  padding: 14px 16px;
  border-radius: 24px;
  background-color: #186DD6;

  @media(max-width: 867px){
    margin: 0 auto;
    margin-top: 24px;
  }

  @media(max-width: 400px){
    padding: 7px 8px;
    margin: 0 12px;
    margin-top: 12px;
  }
`;