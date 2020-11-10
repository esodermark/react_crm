import React, { useContext } from 'react'
import AddCustomer from '../components/AddCustomer/AddCustomer'
import CustomerList from '../components/CustomerList/CustomerList'
import { UserContext } from '../contexts/UserContext'

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            {user.id && (
                <>
                    <CustomerList />
                    <AddCustomer />
                </>

            )}
        </>
    )
}

export default Home
