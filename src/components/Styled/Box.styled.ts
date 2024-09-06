import styled from "styled-components";
import {Link} from "./Link.styled";

export const Box = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: white;
  margin: 20vh auto;

  button + button {
    margin-left: 10px;
  }
  
  
  @media ${({theme})=> theme.media.tablet} {
    flex-direction: column;
  }
`