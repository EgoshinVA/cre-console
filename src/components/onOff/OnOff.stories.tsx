import {OnOff} from "./OnOff";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    component: OnOff
}

const callBackOnChange = action('on or off click')

export const RedLamp = () => <OnOff isOn={false} changeIsON={callBackOnChange}/>
export const GreenLamp = () => <OnOff isOn={true} changeIsON={callBackOnChange}/>
export const OnOffDemo = () => {
    const [isOn, setIsOn] = useState<boolean>(true)

    return <OnOff isOn={isOn} changeIsON={setIsOn}/>
}