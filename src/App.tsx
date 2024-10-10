import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";

function App() {
    return (
        <div>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating starsCount={2}/>
            <OnOff isOn={true}/>
        </div>
    );
}


export default App;