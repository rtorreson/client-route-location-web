import styled from 'styled-components';

import { TextStyle } from './interface';
import { defaultTheme } from '@/shared/styles/theme';

export const Typography = styled.p<TextStyle>`
  font-weight: ${(props) => props.$fontWeight || '400'};
  font-size: ${(props) => props.$frontSize || '14'}px;
  color: ${(props) => props.$color || defaultTheme['gray-500']};
  margin: ${(props) => props.$margin};
  line-height: ${(props) => props.$lineheight};
  background-color: ${(props) => props.$backgroundColor};
  width: ${(props) => props.$width};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  line-height: ${(props) => props.$lineheight};
  gap: ${(props) => props.$gap};
  text-align: ${(props) => props.$textAlign};
`;
