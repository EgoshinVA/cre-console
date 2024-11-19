import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemType} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";

function App() {
    const [starsCount, setStarsCount] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const changeStarsCount = (count: 0 | 1 | 2 | 3 | 4 | 5) => setStarsCount(count)

    const [isOn, setIsOn] = useState<boolean>(true)
    const changeIsON = () => setIsOn(!isOn)

    const items:ItemType[] = [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Ivan', value: '3'}
    ]

    return (
        <div>
            {/*<Accordion title={'Users'} collapsed={collapsed} changeCollapsed={changeCollapsed}/>*/}
            <UncontrolledAccordion title={'Users'} items={items} onClick={() => {}}/>
            {/*<Rating starsCount={starsCount} changeStarsCount={changeStarsCount}/>*/}
            {/*<OnOff isOn={isOn} changeIsON={changeIsON}/>*/}
            <UncontrolledRating/>
        </div>
    );
}


export default App;