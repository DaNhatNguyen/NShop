import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapImageProd = styled.div`
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgb(235, 235, 240);
`

export const WrapContent = styled.div`
    padding: 16px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
`

export const WrapColImageSmall = styled(Col)`
    flex-basis: unset;
    display: flex;
    justify-content: space-between;
`

export const WrapNameRateProd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const WrapNameProd = styled.h1`
    margin: 0px;
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`

export const WrapProdPrice = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 8px;
`

export const WrapPriceProd = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
`

export const WrapDiscPrice = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    padding: 0px 4px;
    background: rgb(245, 245, 250);
    border-radius: 8px;
`

export const WrapContentShipInf = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const WrapShipInf = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: rgb(39, 39, 42);
`
export const WrapLocaInf = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0px;
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: rgb(39, 39, 42);
    gap: 8px;
`

export const WrapNameLocaInf = styled.div`
    color: rgb(39, 39, 42);
    overflow: hidden;
`

// Wrap quantityInput
export const WrapQuantityInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
` 
export const WrapQuanButton = styled.button`
    height: 32px;
    color: rgb(36, 36, 36);
    font-size: 14px;
    text-align: center;
    outline: none;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 1px solid rgb(166, 166, 176);
    background: white;
` 
export const WrapQuanInput = styled.input`
    height: 29px;
    color: rgb(36, 36, 36);
    font-size: 14px;
    text-align: center;
    outline: none;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 1px solid rgb(166, 166, 176);
    background: white;
`
export const WrapLabel = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin: 0px;
`

// WrapGroupButton
export const WrapGroupBtn = styled.div`
    
`
export const WrapBuyBtn = styled.div`
    background: rgb(255, 66, 78);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    white-space: nowrap;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 150%;
    width: 50%;
`
export const WrapAddToCardBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-left: 8px;
    white-space: nowrap;
    width: 50%;
    cursor: pointer;
    background: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 150%;
    color: rgb(10, 104, 255);
    border: 1px solid rgb(10, 104, 255);
    border-radius: 4px;
`
