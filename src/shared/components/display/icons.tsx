import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IconStyle } from "./interface";
import { defaultTheme } from "@/shared/styles/theme";

export const RightArrow = styled(MdKeyboardArrowRight) <IconStyle>`
  font-size: ${(props) => props.$size || '32'}px;
  color: ${(props) => props.color || defaultTheme["gray-800"]};
  cursor: pointer;
`;

export const LeftArrow = styled(MdKeyboardArrowLeft) <IconStyle>`
  font-size: ${(props) => props.$size || '32'}px;
  color: ${(props) => props.$color || defaultTheme["gray-800"]};
  cursor: pointer;
`;