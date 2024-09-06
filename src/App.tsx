import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import User from "./components/User/User";
import Rating from "./components/Rating/Rating";
import styled from "styled-components";
import {StyledBtn} from "./components/Styled/Button.styled";
import {Link} from "./components/Styled/Link.styled";
import {Box} from "./components/Styled/Box.styled";
import {Menu} from "./components/Styled/Menu.styled";


function App() {
    return (
        <div>

        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;