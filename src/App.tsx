import React from 'react';
import './App.css';
import {Box} from "./components/Styled/Box.styled";
import styled from "styled-components";
import Rectangle from './image/Rectangle.png'
import {RectangleImageStyled} from "./components/Styled/RectangleImage.styled";
import {TitleAppStyled} from "./components/Styled/TitleApp.styled";
import {AppTextStyled} from "./components/Styled/AppText.styled";
import {StyledBtn} from "./components/Styled/Button.styled";

function App() {
    return (
            <Box>
                <RectangleImageStyled src={Rectangle} alt='rectangle'/>
                <TitleAppStyled>Headline</TitleAppStyled>
                <AppTextStyled>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</AppTextStyled>
                <StyledBtn>See more</StyledBtn>
                <StyledBtn outlined>Save</StyledBtn>
            </Box>
    );
}


export default App;