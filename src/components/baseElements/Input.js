import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 5px;
  border: 1px solid #3c1f3c;
  border-radius: 15px;
  color: #171717;
`

export const SubmitWrapper = styled.div`
    text-align: center;
`

export const InputSubmit = styled.input.attrs(props => ({
    type: "submit"
}))`
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  margin: 6px 0;
  background: #FF545F;
  color: #171717;
  border-style: none;
  border-radius: 40px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
        transition: all 0.1s ease-in-out;
        background: #F99696;
  }
`

export const Label = styled.label`
    text-align: left;
    color: #fff;
    padding: 0 7px;
`