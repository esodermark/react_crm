import React, { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../../contexts/CustomerContext'
import ApiClient from '../../data/api-client'
import { 
    CustomerDetailContainer,
    CustomerDetailsItem, 
    Header, 
    Span
} from './CustomerElements'
import { H1 } from '../baseElements/Typography'
import DeleteCustomer from '../DeleteCustomer/DeleteCustomer'
import EditCustomer from '../EditCustomer/EditCustomer'

const CustomerDetails = ({ id }) => {
    const { customers } = useContext(CustomerContext)
    const [customer, setCustomer] = useState(null)

    const getCustomer = async () => {
        if(customers) {
            filterCustomers(customers)
        } else {
            const customerData = await ApiClient.GetAllCustomers()
            filterCustomers(customerData)
        }
    }

    const filterCustomers = (customers) => {
        const filteredCustomer = customers.find(item => item.id === id)
        setCustomer(filteredCustomer)
    }

    useEffect(() => {
        getCustomer()
    }, [])
    return (
        <div>
            {customer && (
                <>
                <CustomerDetailContainer>
                    <Header>
                        <H1>{customer.name}</H1>
                    </Header>
                    <CustomerDetailsItem><Span>email:</Span> {customer.email}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>phone number:</Span> {customer.phoneNumber}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>organisation number:</Span> {customer.organisationNr}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>vat:</Span> {customer.vatNr}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>reference:</Span> {customer.reference}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>payment term:</Span> {customer.paymentTerm}</CustomerDetailsItem>
                    <CustomerDetailsItem><Span>website: </Span> {customer.website}</CustomerDetailsItem>
                    
                    <EditCustomer customer={customer} setCustomer={setCustomer} />
                </CustomerDetailContainer>

                <DeleteCustomer id={customer.id} />
                </>
            )}
        </div>
    )
}

export default CustomerDetails
