import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/onOff/OnOff";
import {SelfControlAccordion} from "./components/Accordion/SelfControlAccordion";
import {SelfControlRating} from "./components/Rating/SelfControlRating";
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeCollapsed = () => setCollapsed(!collapsed)

    const [starsCount, setStarsCount] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const changeStarsCount = (count: 0 | 1 | 2 | 3 | 4 | 5) => setStarsCount(count)

    return (
        <div>
            <SelfControlAccordion title={'Menu'}/>
            <Accordion title={'Users'} collapsed={collapsed} changeCollapsed={changeCollapsed}/>
            <SelfControlRating/>
            <Rating starsCount={starsCount} changeStarsCount={changeStarsCount}/>
            <OnOff/>
        </div>
    );
}


export default App;