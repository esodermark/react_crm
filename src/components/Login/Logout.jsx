import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { CustomerContext } from '../../contexts/CustomerContext'

const Logout = () => {
    const history = useHistory()
    const { setUser } = useContext(UserContext)
    const { setCustomers } = useContext(CustomerContext)

    const handleLogOut = () => {
        removeToken()

        history.push('/home')

        resetContexts()
    }

    const removeToken  = () => {
        localStorage.removeItem('token')
    }

    const resetContexts = () => {
        setUser({})
        setCustomers([])
    }

    useEffect(() => {
        handleLogOut()
    }, [])

    return (
        <>
        </>
    )
}

export default Logout
