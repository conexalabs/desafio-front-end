import {TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
`

export const SearchHeader = styled.div `
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const SearchBox = styled.div `
    padding: 3vh 0vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
`

export const SearchButton = styled.button `
    width: 25vh;
    border: 0px;
    border-radius: 20px;
    height: 6vh;
    background-color: rgba(58,137,112);
    color: white;
    box-shadow: 2px 2px 5px gray;

    :hover {
        opacity: 0.8;
        cursor: pointer;
    }
`


export const SearchInput = styled(TextField)`
    width: 70%;
`

export const SearchInputBox = styled.div `
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

// app

export const HeaderTitle = styled.div `
    display: flex;
    height: 25vh;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    width: 100%;
`

// companyCard

export const CompanyBox = styled.div `
    width: 100%;
    height: 71vh;
    background-image: linear-gradient(to left, #3a8970, #199e9a);
`

export const CompanyCard = styled.div `
    width: 350px;
    background-color: white;
`