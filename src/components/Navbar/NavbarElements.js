import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #1A1640;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 1px 5px 4px rgba(0,0,0,.2);
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;
`

export const NavItem = styled.li`
    height: 80px;
    margin-right: 30px;
`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FF545F;
    white-space: nowrap;
    padding: 10px 22px;
    color: #171717;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.1s ease-in-out;
        background: #F99696;
        color: #010606;
    }
`

export const UserInfo = styled.p`
    color: #fff;
    padding: 10px;
    margin-top: 20px;
`

export const Span = styled.span`
    color:  #FF545F;
`