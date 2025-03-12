import { Col, Row } from "antd";
import styled from "styled-components";

export const WraperHeader = styled(Row)`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgb(26, 148, 255);
    gap: 16px;
    flex-wrap: nowrap;
`

export const WraperTextHeader = styled.span`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`

export const WraperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px
`

export const WraperTextHeaderSmall = styled.span`
    font-size: 14px;
    color: #fff;
    white-space: nowrap;
`
export const WraperIconHeader = styled.span`
    font-size: 30px;
    color: #fff;
`