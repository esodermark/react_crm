import React, { useContext } from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    UserInfo,
    Span
} from './NavbarElements'
import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>CRM</NavLogo>
                    <NavMenu>
                        {user.firstName ? (
                            <>
                            <NavItem>
                                <UserInfo>
                                    {user.firstName} {user.lastName} <Span>{user.email}</Span>
                                </UserInfo>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to="/logout">Logout</NavBtnLink>
                            </NavBtn>
                            </>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLinks to="/register">Register</NavLinks>
                                    </NavItem>
                                    <NavBtn>
                                        <NavBtnLink to="/login">Login</NavBtnLink>
                                    </NavBtn>
                                </>
                            )}

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
