import React, { useState, useContext, useEffect } from 'react'
import { CustomerFormForm } from './CustomerFormElements'
import { Input, Label, SubmitWrapper, InputSubmit } from '../baseElements/Input'
import ApiClient from '../../data/api-client'
import { CustomerContext } from '../../contexts/CustomerContext'

const CustomerForm = ({ type, setIsOpen, customer, setCustomer }) => {
    const [name, setName] = useState('')
    const [organisationNr, setOrganisationNr] = useState('')
    const [vatNr, setVatNr] = useState(0)
    const [reference, setReference] = useState('')
    const [paymentTerm, setPaymentTerm] = useState(10)
    const [website, setWebsite] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [buttonText, setButtonText] = useState('')

    const { addCustomer, getAllCustomers, editCustomer } = useContext(CustomerContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newCustomer = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber,
            id: customer ? customer.id : ''
        }

        if(type == 'edit') { handleEditCustomer(newCustomer) }
        if(type == 'add') { handleAddCustomer(newCustomer) }
    }

    const handleAddCustomer = async (newCustomer) => {
        const success = await ApiClient.CreateCustomer(newCustomer)
        if(success) { 
            setIsOpen(false) 
            addCustomer(newCustomer)
            getAllCustomers()
        }
    }

    const handleEditCustomer = async (newCustomer) => {
        const success = await ApiClient.EditCustomerById(newCustomer, customer.id)
        if(success) { 
            setIsOpen(false)
            setCustomer(newCustomer)
            editCustomer(newCustomer, customer.id)
            getAllCustomers()
        }
    }

    const determineFormType = () => {
        if(type == 'edit') { 
            setButtonText('Edit Customer')
            fillFormFromContext()
        }
        else if(type == 'add') { setButtonText('Add Customer') }
    }

    const fillFormFromContext = () => {
        setName(customer.name)
        setOrganisationNr(customer.organisationNr)
        setVatNr(customer.vatNr)
        setReference(customer.reference)
        setPaymentTerm(customer.paymentTerm)
        setWebsite(customer.website)
        setEmail(customer.email)
        setPhoneNumber(customer.phoneNumber)
    }

    useEffect(() => {
        determineFormType()
    }, [])
    
    return (
        <>
            <CustomerFormForm onSubmit={handleSubmit}>
                <Label>name</Label>
                <Input
                    type="text" value={name}
                    onChange={(e) => setName(e.target.value)}>
                </Input>

                <Label>organisation number</Label>
                <Input
                    type="text" value={organisationNr}
                    onChange={(e) => setOrganisationNr(e.target.value)}>
                </Input>

                <Label>vatNr</Label>
                <Input
                    type="number" value={vatNr} required
                    onChange={(e) => setVatNr(e.target.value)}>
                </Input>

                <Label>reference</Label>
                <Input
                    type="text" value={reference} required
                    onChange={(e) => setReference(e.target.value)}>
                </Input>

                <Label>payment term</Label>
                <Input
                    type="number" value={paymentTerm}
                    onChange={(e) => setPaymentTerm(e.target.value)}>
                </Input>

                <Label>website</Label>
                <Input
                    type="text" value={website} required
                    onChange={(e) => setWebsite(e.target.value)}>
                </Input>

                <Label>email</Label>
                <Input
                    type="email" value={email} required
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>

                <Label>phone number</Label>
                <Input
                    type="text" value={phoneNumber} required
                    onChange={(e) => setPhoneNumber(e.target.value)}>
                </Input>

                <SubmitWrapper>
                    <InputSubmit type="submit" value={buttonText} />
                </SubmitWrapper>
            </CustomerFormForm>
        </>
    )
}

export default CustomerForm
