import React, { createContext, useState, useEffect } from 'react'
import ApiClient from '../data/api-client'


export const CustomerContext = createContext()

const CustomerContextProvider = ({ children }) => {
    const [customers, setCustomers] = useState(null)

    const getAllCustomers = async () => {
        const data = await ApiClient.GetAllCustomers()
        setCustomers(data)
    }

    const addCustomer = async (customer) => {
        setCustomers([...customers, customer])
    }
    
    const editCustomer = async (customer, id) => {
        const index = customers.findIndex(customer => customer.id == id)
        let updatedCustomers = customers
        updatedCustomers[index] = customer
        setCustomers(updatedCustomers)
    }

    const deleteCustomerById = async (id) => {
        setCustomers(customers.filter(customer => customer.id !== id))
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) { getAllCustomers() }
    }, [])

    return (
        <>
            <CustomerContext.Provider value={{ customers, getAllCustomers, addCustomer, editCustomer, deleteCustomerById, setCustomers }}>
                {children}
            </CustomerContext.Provider>
        </>
    )
}

export default CustomerContextProvider
