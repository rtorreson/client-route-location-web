import styled from 'styled-components';

import { defaultTheme } from '@/shared/styles/theme';
import { TableStyle } from './interface';

export const StyledTable = styled.table<TableStyle>`
  position: relative;
  width: ${(props) => props.$width || '100%'};
  border-collapse: ${(props) => props.$borderCollapse || 'collapse'};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$alignItens};
  color: ${(props) => props.$color};
  box-shadow: ${(props) => props.$boxShadow};
  text-align: ${(props) => props.$textAlign};
`;

export const Th = styled.th<TableStyle>`
  color: ${(props) => props.$color || defaultTheme['gray-900']};
  font-weight: ${(props) => props.$fontWeight || '500'};
  padding: ${(props) => props.$padding || '10px 0px'};
  text-align: ${(props) => props.$alignItens || 'start'};
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
  border-bottom: ${(props) => props.$borderBottom};
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$backgroundColor};
`;

export const Tr = styled.tr<TableStyle>`
  margin: ${(props) => props.$margin};
  border-bottom: ${(props) => props.$borderBottom};
  text-align: ${(props) => props.$textAlign};
`;

export const Thead = styled.thead<TableStyle>`
  width: ${(props) => props.$width};
`;

export const Tbody = styled.tbody``;

export const Td = styled.td<TableStyle>`
  cursor: ${(props) => props.$cursor};
  font-size: ${(props) => props.$fontSize || '14'}px;
  color: ${(props) => props.$color || defaultTheme['gray-900']};
  font-weight: ${(props) => props.$fontWeight || '400'};
  padding: ${(props) => props.$padding || '9px 0px'};
  align-items: ${(props) => props.$alignItens};
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
`;
