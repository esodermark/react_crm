import React, { useState } from 'react'
import { CustomerDetailsFooter, Edit } from './EditCustomerElements'
import Modal from '../baseElements/Modal'
import CustomerForm from '../CustomerForm/CustomerForm'

const EditCustomerElements = ({ customer, setCustomer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <CustomerDetailsFooter>
            <Edit onClick={handleClick}>
                Edit
            </Edit>
        </CustomerDetailsFooter>

        {isOpen && (
                <Modal setIsOpen={setIsOpen}

                    body={
                        <CustomerForm customer={customer} setCustomer={setCustomer} type={'edit'} setIsOpen={setIsOpen}/>
                    }

                    setIsOpen={setIsOpen}

                >

                </Modal>
            )}
        
        </>
    )
}

export default EditCustomerElements