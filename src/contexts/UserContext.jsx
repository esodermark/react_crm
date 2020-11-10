import React, { createContext, useState, useEffect } from 'react'
import ApiClient from '../data/api-client'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const loadUser = async () => {
        const userInfo = await ApiClient.GetUser()
        setUser(userInfo)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) { loadUser() }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, loadUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider
