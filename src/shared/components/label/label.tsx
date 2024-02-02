import styled from "styled-components";
import { LabelStyle } from "./interface";

export const Label = styled.label<LabelStyle>`
  font-weight: ${(props) => props.$fontWeight || "400"};
  font-size: ${(props) => props.$fontSize || "20px"};
  line-height: ${(props) => props.$lineHeight || "26.68px"};
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  margin: ${(props) => props.$margin};
  color: ${(props) => props.$color};
  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$alignItens};
  gap: ${(props) => props.$gap};
  cursor: ${(props) => props.$cursor};
`;
