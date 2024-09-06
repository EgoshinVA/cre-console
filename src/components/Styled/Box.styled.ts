import styled from "styled-components";
import {Link} from "./Link.styled";

export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor: pointer;
  }
  
  ${Link} {
    cursor: zoom-in;
  }
  
  @media ${({theme})=> theme.media.tablet} {
    flex-direction: column;
  }
`