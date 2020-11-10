import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomerListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CustomerListList = styled.ul`
    margin: 30px 0 0 0;
    padding: 20px;
`

export const CustomerListItem = styled(Link)`
    margin: 10px;
    padding: 10px;
    list-style: none;
    display: flex;
    border-radius: 8px;
    background: #FF545F;
    text-decoration: none;
    color: #171717;
    
    &:hover {
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        background: #F99696;
        color: #000;
    }

    &:active {
        color: #171717;
    }
`

export const CustomerInfo = styled.p`
    padding: 14px;
    font-size: 18px;
`

export const CustomerDetailContainer = styled.div`
    width: 90%;
    max-width: 300px;
    margin: 100px auto 0 auto;
    background: #FF545F;
    border-radius: 15px;
    padding: 5px 15px;
`

export const CustomerDetailsItem = styled.p`
    font-size: 18px;
    padding: 7px;
`

export const Header = styled.div`
    text-align: center;
    padding: 7px;
    color: #1C1843;
`

export const Span = styled.span`
    color: white;
`