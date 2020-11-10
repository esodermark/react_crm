import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import ApiClient from '../../data/api-client'
import { InputSubmit, Input, Label, SubmitWrapper } from '../baseElements/Input'
import { LoginContainer, LoginForm } from './LoginElements'
import { CustomerContext } from '../../contexts/CustomerContext'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { getAllCustomers } = useContext(CustomerContext)
    const { loadUser } = useContext(UserContext)
    
    let { search } = useLocation()
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        authLogin()
    }

    const authLogin = async () => {
        const user = {
            email,
            password
        }
        const success = await ApiClient.Login(user)
        if (success) { 
            redirect('/home') 
            getAllCustomers()
            setUserContext()
        }
    }

    const setUserContext = () => {
        loadUser()
    }

    const getQuery = () => {
        const query = new URLSearchParams(search);
        const uid = query.get('uid');
        const token = query.get('token');

        if(uid == null || token == null) return false

        return { uid, token }
    }

    const activateUser = async (uid, token) => {
        await ApiClient.ActivateUser(uid, token)
    }

    const redirect = (link) => {
        history.push(link)
    }

    useEffect(async () => {
        const query = getQuery()
        if(query) {
            const { uid, token } = query
            const success = await activateUser(uid, token)
            if(success) redirect('/login')
        }
    }, [])


    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Label>email</Label>
                <Input
                    type="email" value={email} required
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>

                <Label>password</Label>
                <Input
                    type="password" name="password" value={password} required
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <SubmitWrapper>
                    <InputSubmit type="submit" value="Login"></InputSubmit>
                </SubmitWrapper>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login
