import React from 'react';
import './App.css';
import {OnOff} from "./components/onOff/OnOff";
import {SelfControlAccordion} from "./components/Accordion/SelfControlAccordion";
import {SelfControlRating} from "./components/Rating/SelfControlRating";

function App() {
    console.log('render app')
    return (
        <div>
            <SelfControlAccordion title={'Menu'}/>
            <SelfControlAccordion title={'Users'}/>
            <SelfControlRating/>
            <OnOff/>
        </div>
    );
}


export default App;