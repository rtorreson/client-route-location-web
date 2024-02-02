import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaFilter, FaRoute} from 'react-icons/fa'
import styled from "styled-components";
import { IconStyle } from "./interface";
import { defaultTheme } from "@/shared/styles/theme";

export const RightArrow = styled(MdKeyboardArrowRight) <IconStyle>`
  font-size: ${(props) => props.$size || '32'}px;
  color: ${(props) => props.color || defaultTheme["gray-800"]};
  cursor: pointer;
  &:hover {
    color: ${defaultTheme["green-300"]}
  }
`;

export const LeftArrow = styled(MdKeyboardArrowLeft) <IconStyle>`
  font-size: ${(props) => props.$size || '32'}px;
  color: ${(props) => props.$color || defaultTheme["gray-800"]};
  cursor: pointer;
  &:hover {
    color: ${defaultTheme["green-300"]}
  }
`;

export const Plus = styled(FaPlus) <IconStyle>`
  font-size: ${(props) => props.$size || '15'}px;
  color: ${(props) => props.$color || defaultTheme["gray-800"]};
  cursor: pointer;
  &:hover {
    color: ${defaultTheme["green-300"]}
  }
`;

export const Filter = styled(FaFilter) <IconStyle>`
  font-size: ${(props) => props.$size || '15'}px;
  color: ${(props) => props.$color || defaultTheme["gray-800"]};
  cursor: pointer;
  &:hover {
    color: ${defaultTheme["green-300"]}
  }
`;

export const Route = styled(FaRoute) <IconStyle>`
  font-size: ${(props) => props.$size || '15'}px;
  color: ${(props) => props.$color || defaultTheme["gray-800"]};
  cursor: pointer;
  &:hover {
    color: ${defaultTheme["green-300"]}
  }
`;


