import React from 'react'
import styled from "styled-components"
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AuthButton from "./AuthButton";


function Header() {
    return (
        <Container>
            <Main>
            <AuthButton/>
            </Main>
            <UserContainer>
                <Name>
                    User
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 40px;
    background: #202223;
    color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%)
`
const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left: 16px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`
const Name = styled.div`
    padding-right: 16px;
`
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img {
        width: 100%;
    }
`
