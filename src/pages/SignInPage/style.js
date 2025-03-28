import styled from "styled-components";
import InputComponent from "../../components/InputComponent/InputComponent";


export const WrapInputComponent = styled(InputComponent)`
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: unset;
    &:focus {
        background-color: rgb(232, 240, 254);
    }
`

export const WraperForgotPass = styled.p`
    color: rgb(13, 92, 182);
    font-size: 13px;
    margin: 20px 0px 0px;
    cursor: pointer;
    display: inline-block;
`

export const WraperCreateAccout = styled.p`
    color: rgb(120, 120, 120);
    font-size: 13px;
    margin: 10px 0px 0px;
`

export const WraperCreateAccoutSpan = styled.span`
    color: rgb(13, 92, 182);
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
`