import styled from "styled-components";
import { TitleStyle } from "./interface";
import { defaultTheme } from "@/shared/styles/theme";

export const Title = styled.h4<TitleStyle>`
    font-weight: ${(props) => props.$fontWeight || "700"};
    font-size: ${(props) => props.$fontSize || "32px"};
    color: ${(props) => props.$color || defaultTheme["gray-900"]};
    align-items: ${(props) => props.$alignItens};
    text-align: ${(props) => props.$textAlign};
    margin: ${(props) => props.$margin};
`;