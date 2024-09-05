import styled from "styled-components";
import {MyAnimation} from "./animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 10px 20px;
  color: aquamarine;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #38006f;
  }

  &:last-child {
    background-color: #303d19;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: darkolivegreen;
  
  &:hover {
    animation: ${MyAnimation} 2s;
  }
  
`