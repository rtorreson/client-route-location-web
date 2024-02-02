import styled from 'styled-components';
import { Card as ICard } from './interface';

export const Card = styled.div<ICard>`
  position: ${(props) => props.$position};
  width: ${(props) => props.$width || '188'}px;
  height: ${(props) => props.$height || '111'}px;
  padding: ${(props) => props.$padding || '10'}px;
  background-color: ${(props) => props.$backgroundColor || 'transparent'};
  gap: ${(props) => props.$gap || '16'}px;
  border-radius: ${(props) => props.$borderRadious || '8'}px;
`;