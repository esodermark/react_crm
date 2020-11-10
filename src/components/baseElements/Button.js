import styled from 'styled-components'

export const Button = styled.button`
    background: ${({remove}) => (remove ? '#D0312D' : '#1C1843')};
    border-style: none;
    color: #fff;
    padding: 20px;
    border-radius: 40px;
    cursor: pointer;
    margin: 30px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`