import styled, {css} from "styled-components";
import {MyAnimation} from "./animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    outlined?: boolean
    primary?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  background-color: ${props => props.color || '#5ddcdc'};
  padding: 10px 20px;
  color: aquamarine;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  &:hover {
    background-color: #1963a9;
  }

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#5ddcdc'};
    color: ${props => props.color || '#5ddcdc'};
    background-color: transparent;

    &:hover {
      border-color: #1963a9;
      color: #1963a9;
      background-color: transparent;
    }
  `}

  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#5ddcdc'};
    color: snow;
  `}
`