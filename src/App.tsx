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
import {SuperButton} from "./components/Styled/Button.styled";


function App() {
    return (
        <div>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>

            <Box>
                <StyledBtn as='a' href={'#'}>Link</StyledBtn>
                <StyledBtn as={Link} href={'#'}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>Bye bye</SuperButton>
            </Box>
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