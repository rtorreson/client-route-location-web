import styled from 'styled-components';
import { ContainerStyle } from './interface';

export const Div = styled.div<ContainerStyle>`
  display: ${(props) => props.$display || 'flex'};
  grid-template-columns: ${(props) => props.$templateColumns};
  grid-template-rows: ${(props) => props.$templateRows};
  flex-direction: ${(props) => props.$diretion};
  margin: ${(props) => props.$margin};
  justify-content: ${(props) => props.$justify};
  flex-wrap: ${(props) => props.$wrap};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$alignItens};
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  margin-top: ${(props) => props.$marginTop};
  height: ${(props) => props.$height};
  position: ${(props) => props.$position};
  border-radius: ${(props) => props.$borderRadius};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => props.$border};
  border-bottom: ${(props) => props.$borderBottom};
  border-top: ${(props) => props.$borderTop};
  box-shadow: ${(props) => props.$boxShadow};
  z-index: ${(props) => props.$zIndex};
  cursor: ${(props) => props.$cursor};
  flex: ${(props) => props.$flex};
  max-height: ${(props) => props.$maxHeight};
  overflow: ${(props) => props.$overFlow};  
`;

export const Container = styled.div<ContainerStyle>`
  padding: ${(props) => props.$padding};
  max-width: ${(props) => props.$maxWidth || "80vw"};
  width: ${(props) => props.$width || '70vw'};
  gap: ${(props) => props.$gap || '4vh'};
  height: ${(props) => props.$height || "auto"};
  margin: ${(props) => props.$margin || "30px 0"};
  margin-left: ${(props) => props.$marginLeft || "12"}%;
  box-shadow: ${(props) => props.$boxShadow};
  margin-right: ${(props) => props.$marginRight};
  min-width: ${(props) => props.$minWidth};
  transition: .5s;

  @media (max-width: 1100px) {
    min-width: 650px;
    margin-left: ${(props) => props.$marginLeft || "5"}%;
    transition: .5s;
  }
`;
