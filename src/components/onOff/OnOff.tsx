import React from 'react';
import styled from "styled-components";

type OnOffPropsType = {
    isOn: boolean
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {
    return (
        <StyledOnOff>
            <On isOn={props.isOn}>On</On>
            <Off isOn={props.isOn}>Off</Off>
            <Light isOn={props.isOn}></Light>
        </StyledOnOff>
    );
};

type StyledType = {
    isOn: boolean
}

const StyledOnOff = styled.div`
  display: flex
`
const On = styled.div<StyledType>`
  width: 30px;
  height: 20px;
  background-color: ${props => props.isOn && 'greenyellow'};
`
const Off = styled.div<StyledType>`
  width: 30px;
  height: 20px;
  background-color: ${props => !props.isOn && 'red'};
`
const Light = styled.div<StyledType>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.isOn ? 'greenyellow' : 'red'};
`