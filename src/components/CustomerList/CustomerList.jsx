import React, { useContext } from 'react'
import { CustomerContext } from '../../contexts/CustomerContext'
import { CustomerListContainer, CustomerListList, CustomerListItem, CustomerInfo } from './CustomerElements'

const CustomerList = () => {
    const { customers } = useContext(CustomerContext)

    return (
        <div>
            <CustomerListContainer>
                <CustomerListList>
                    {customers && (
                        customers.map((customer, i) => {
                            return (
                                <CustomerListItem key={i} to={`/customer/${customer.id}`}>
                                    <CustomerInfo>{customer.name}</CustomerInfo>
                                    <CustomerInfo>{customer.email}</CustomerInfo>
                                    <CustomerInfo>{customer.phoneNumber}</CustomerInfo>
                                </CustomerListItem>
                            )
                        })
                    )}
                </CustomerListList>
            </CustomerListContainer>
        </div>
    )
}

export default CustomerList
