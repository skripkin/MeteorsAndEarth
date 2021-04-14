import React from "react";
import Information from "../information/information";

import * as Styled from "./styles";

interface IData {
  title: string;
  data: string;
}

interface IDataArray {
  meteorData: IData[]
}

const MeteorData = ({ meteorData }:IDataArray) => {
  return(
    <Styled.Container>
      {meteorData.map(item => 
        <Styled.InfoBox key={item.title}>
          <Information leftData={item.title} rightData={item.data}/>
        </Styled.InfoBox>
      )}
    </Styled.Container>
  )
};

export default MeteorData;