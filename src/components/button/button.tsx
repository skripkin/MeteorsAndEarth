import React from "react";

import * as Styled from "./styles";

interface IButton {
  status: "addet" | "not addet" | "out",
  onClick: () => void;
}

const Button = ({status, onClick}: IButton) => {
  const statusColor = status === "not addet" ? "#186DD6" : status === "addet" ? "#13ff09" : status === "out" ? "#ffc107" : "white";

  return(
    <Styled.Container color={statusColor} onClick={(e) => { e.stopPropagation(); onClick() }}>
      {status === "addet" ?
        <Styled.ButtonTitle>Добавлен на уничтожение</Styled.ButtonTitle>
      : status === "not addet" ?
        <Styled.ButtonTitle>На уничтожение</Styled.ButtonTitle>
      : status === "out" ?
        <Styled.ButtonTitle>Убрать с уничтожения</Styled.ButtonTitle>
      : <div/>}
    </Styled.Container>
  )
}

export default Button;