import React, {useState} from 'react';
import styled from "styled-components";

type OnOffPropsType = {
    isOn: boolean
    changeIsON: (value: boolean) => void
}

export const OnOff: React.FC<OnOffPropsType> = ({isOn, changeIsON}) => {
    return (
        <StyledOnOff>
            <On onClick={() => changeIsON(true)} isOn={isOn}>On</On>
            <Off onClick={() => changeIsON(false)} isOn={isOn}>Off</Off>
            <Light isOn={isOn}></Light>
        </StyledOnOff>
    );
};

type StyledType = {
    isOn: boolean
}

const StyledOnOff = styled.div`
  display: flex;
  gap: 5px;
`
const On = styled.button<StyledType>`
  width: 30px;
  height: 20px;
  background-color: ${props => props.isOn && 'greenyellow'};
`
const Off = styled.button<StyledType>`
  width: 30px;
  height: 20px;
  background-color: ${props => !props.isOn && 'red'};
`
const Light = styled.div<StyledType>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.isOn ? 'greenyellow' : 'red'};
  border: black 2px solid;
`
