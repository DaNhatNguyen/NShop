import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WraperTypeProduct =styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    height: 44px;
`

export const WraperButtonMore = styled(ButtonComponent)`
    &:hover {
        background: rgba(0, 96, 255, 0.12) !important
    }
`