import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { RegisterContainer, RegisterFormWrapper, RegisterForm } from './RegisterElements'
import { InputSubmit, Input, Label, SubmitWrapper } from '../baseElements/Input'
import ApiClient from '../../data/api-client'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [organisationName, setOrganisationName] = useState('')
    const [organisationKind, setOrganisationKind] = useState(0)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        registerUser()

        history.push('/logout') // fullösning hehe, annars hänger admin-inloggning för att kunna registrera användare kvar
        history.push('/registered-success')
    }

    const registerUser = async () => {
        const user = {
            firstName,
            lastName,
            email,
            password,
            organisationName,
            organisationKind
        }

        await authenticate()

        ApiClient.CreateUser(user)
    }

    const authenticate = async () => {
        const adminUser = {
            email: 'webb19@willandskill.se',
            password: 'javascriptoramverk'
        }
        await ApiClient.Login(adminUser)
    }

    return (
        <RegisterContainer>
            <RegisterFormWrapper>
                <RegisterForm onSubmit={handleSubmit}>
                    <Label>firstname</Label>
                    <Input
                        type="text" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}>
                    </Input>

                    <Label>lastname</Label>
                    <Input
                        type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}>
                    </Input>

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

                    <Label>organisation name</Label>
                    <Input
                        type="text" value={organisationName}
                        onChange={(e) => setOrganisationName(e.target.value)}>
                    </Input>

                    <Label>organisation kind</Label>
                    <Input
                        type="number" value={organisationKind} required
                        onChange={(e) => setOrganisationKind(e.target.value)}>
                    </Input>

                    <SubmitWrapper>
                        <InputSubmit type="submit" value="Register"></InputSubmit>
                    </SubmitWrapper>
                </RegisterForm>
            </RegisterFormWrapper>

        </RegisterContainer>
    )
}

export default Register
