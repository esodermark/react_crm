import React, { useState } from 'react'
import { ButtonWrapper, Button } from '../baseElements/Button'
import Modal from '../baseElements/Modal'
import CustomerForm from '../CustomerForm/CustomerForm'

const AddCustomer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ButtonWrapper>
                <Button onClick={handleClick}>
                    Add new customer
                </Button>
            </ButtonWrapper>

            {isOpen && (
                <Modal setIsOpen={setIsOpen}

                    body={
                        <CustomerForm type={'add'} setIsOpen={setIsOpen}/>
                    }

                    setIsOpen={setIsOpen}

                >

                </Modal>
            )}
        </>
    )
}

export default AddCustomer