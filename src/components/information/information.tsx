import React from "react";

import * as Styled from "./styles";

interface IInfo {
  leftData: string;
  rightData: string;
}

const Information = ({leftData, rightData}:IInfo) => {
  return(
    <Styled.Container>
      <Styled.InfoText>{leftData}</Styled.InfoText>
      <Styled.DotBox/>
      <Styled.InfoText>{rightData}</Styled.InfoText>
    </Styled.Container>
  )
};

export default Information;