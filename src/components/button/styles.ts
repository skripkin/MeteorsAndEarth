import styled, { css } from "styled-components";

export const ButtonTitle = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

export const Container = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 24px;

  ${({color}) =>
  color && css`
    background: ${color};
  `}
`;