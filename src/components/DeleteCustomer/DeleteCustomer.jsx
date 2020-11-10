import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, ButtonWrapper } from '../baseElements/Button'
import ApiClient from '../../data/api-client'
import { CustomerContext } from '../../contexts/CustomerContext'

const DeleteCustomer = ({ id }) => {
    let history = useHistory()
    const { deleteCustomerById } = useContext(CustomerContext)

    const removeCustomer = async () => {
        ApiClient.DeleteCustomerById(id)
        deleteCustomerById(id)
        history.push('/home')
    }

    return (
        <ButtonWrapper>
            <Button onClick={removeCustomer} remove="true">Delete customer</Button>
        </ButtonWrapper>
    )
}

export default DeleteCustomer
