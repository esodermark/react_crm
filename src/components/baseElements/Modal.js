import React from 'react'
import { H1 } from './Typography'
import styled from 'styled-components'

const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.3);
`

const ModalWrapper = styled.div`
    height: auto;
    width: 500px;
    background: #1C1843;
    margin: 100px auto 0;
    padding: 20px 30px;
    color: #fff;
    border-radius: 20px;
    z-index: 20;
    border: 1px solid white;
`

const ModalHeader = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

const ModalBody = styled.div`
    
`

const ModalFooter = styled.div`

`

const Modal = ({ header, body, footer, setIsOpen }) => {

    const exitModal = (e) => {
        if(e.target.id === 'overlay') {
            setIsOpen(false)
        }
    }

    return (
        <ModalContainer id="overlay" onClick={exitModal}>
            <ModalWrapper>
                <ModalHeader>
                    <H1>{header}</H1>
                </ModalHeader>
                <ModalBody>
                    {body && (
                        body
                    )}
                </ModalBody>
                <ModalFooter>
                    {footer && (
                        footer
                    )}
                </ModalFooter>
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal