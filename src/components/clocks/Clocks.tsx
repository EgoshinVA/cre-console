import React, {useEffect, useState} from 'react';
import styled from "styled-components";

type Props = {
    type: 'analog' | 'digital'
}

export const Clocks = (props: Props) => {
    const [hourDegrees, setHourDegrees] = useState<number>(90)
    const [minutesDegrees, setMinutesDegrees] = useState<number>(90)
    const [secondsDegrees, setSecondsDegrees] = useState<number>(90)

    const getTimeString = (time: number) => time < 10 ? '0' + time : time

    function setNewDate() {
        const date = new Date();

        const seconds = date.getSeconds();
        setSecondsDegrees(((seconds / 60) * 360) + 90)
        const minutes = date.getMinutes();
        setMinutesDegrees(((minutes / 60) * 360) + ((seconds / 60) * 6) + 90)
        const hours = date.getHours();
        setHourDegrees(((hours / 12) * 360) + ((minutes / 60) * 30) + 90)
    }


    useEffect(() => {
        setInterval(setNewDate, 1000)
    }, [])


    return <CLockModule>
        <ClockFace>
            {props.type === 'digital' && (date.getHours()) + ':' + getTimeString(date.getMinutes()) + ':' + getTimeString(date.getSeconds())}
            <HourHand deg={hourDegrees}></HourHand>
            <MinuteHand deg={minutesDegrees}></MinuteHand>
            <SecondHand deg={secondsDegrees}></SecondHand>
        </ClockFace>
    </CLockModule>
}

const CLockModule = styled.div`
    width: 300px;
    height: 300px;
    border: 20px solid black;
    border-radius: 50%;
    position: relative;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    background: white;
`

const ClockFace = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px)`

const HourHand = styled.div<{ deg: number }>`
    width: 50%;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(${props => props.deg}deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    height: 6px;
`

const MinuteHand = styled.div<{ deg: number }>`
    width: 50%;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(${props => props.deg}deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    height: 4px;
`

const SecondHand = styled.div<{ deg: number }>`
    width: 50%;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(${props => props.deg}deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    height: 2px;
    background: red;`