import styled from "styled-components";

import { InputStyle } from "./interace";
import { defaultTheme } from "@/shared/styles/theme";

export const Input = styled.input<InputStyle>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height || "40px"};
    color: ${(props) => props.$color || defaultTheme["gray-900"]};
    font-weight: ${(props) => props.$fontWeight || "400"};
    font-size: ${(props) => props.$fontSize || "16px"};
    margin: ${(props) => props.$margin || "0px"};
    border: ${(props) => props.$border || "1px solid #0000003B"};
    border-radius: ${(props) => props.$borderRadius || '4px'};
    padding: ${(props) => props.$padding || '8px 16px 8px 16px'};
    background-color: ${(props) => props.$backgroundColor};
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;