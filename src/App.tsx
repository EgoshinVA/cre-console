import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/onOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeCollapsed = () => setCollapsed(!collapsed)

    const [starsCount, setStarsCount] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const changeStarsCount = (count: 0 | 1 | 2 | 3 | 4 | 5) => setStarsCount(count)

    const [isOn, setIsOn] = useState<boolean>(true)
    const changeIsON = () => setIsOn(!isOn)

    return (
        <div>
            {/*<Accordion title={'Users'} collapsed={collapsed} changeCollapsed={changeCollapsed}/>*/}
            <Rating starsCount={starsCount} changeStarsCount={changeStarsCount}/>
            <OnOff isOn={isOn} changeIsON={changeIsON}/>
        </div>
    );
}


export default App;