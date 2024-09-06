import styled, {css} from "styled-components";
import {MyAnimation} from "./animations/Animations";

type StyledBtnPropsType = {
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: 2px solid #4E71FE;
  border-radius: 5px;
  padding: 5px 20px;
  margin-top: 10px;
  margin-left: 20px;
  font-family: Inter;
  font-weight: 700;
  color: white;
  background-color: #4E71FE;
  
  ${props => props.outlined && css<StyledBtnPropsType>`
    background-color: transparent;
    color: #4E71FE
  `}
;
`