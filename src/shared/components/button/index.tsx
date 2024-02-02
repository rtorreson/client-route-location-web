import styled from 'styled-components';

import { defaultTheme } from '@/shared/styles/theme';
import { ButtonStyle } from './interface';

export const Button = styled.button<ButtonStyle>`
  width: ${(props) => props.$width || '155px'};
  height: ${(props) => props.$height || '42px'};
  border: ${(props) => props.$border || 'none'};
  border-radius: ${(props) => props.$borderRadius || '4px'};
  padding: ${(props) => props.$padding || '8px 22px 8px 22px'};
  background: ${(props) => props.$backgroundColor || defaultTheme['gray-100']};
  font-weight: ${(props) => props.$fontWeight || '500'};
  color: ${(props) => props.$fontColor || defaultTheme['gray-900']};
  gap: ${(props) => props.$gap || '8px'};
  cursor: pointer;
  margin: ${(props) => props.$margin};
  position: ${(props) => props.$position};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  &:hover {
    background-color: ${defaultTheme["green-300"]};
    color: white
  }
`;
