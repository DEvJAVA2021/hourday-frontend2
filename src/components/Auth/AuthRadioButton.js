import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import BackButton from "./BackButton";

const RadioButton = ({history}) => {

  const [ inputStatus, setInputStatus ] = useState('')

  const handleBackList = useCallback(() => {
    const params = {
      pathname: '/'
    }
    history.push(params)
  },[history])

  const handleClickRadioButton = useCallback((radioBtnName) => {
    setInputStatus(radioBtnName)
  },[inputStatus])

  return (
    <>
      <BackButton onClick={handleBackList} />

      <RadioBtnContainer>

        <RadioBtnBox>
          <RadioBtn type='radio' id='전체공개' checked={inputStatus === 'public'} onClick={() => handleClickRadioButton('public')}/>
          <label htmlFor='public'>Radio</label>
        </RadioBtnBox>

        <RadioBtnBox>
          <RadioBtn type='radio' id='비공개' checked={inputStatus === 'private'} onClick={() => handleClickRadioButton('private')}/>
          <label htmlFor='private'>Radio1</label>
        </RadioBtnBox>


      </RadioBtnContainer>

      <StateValue> state value : {inputStatus} </StateValue>

     </>
  )
}

export default React.memo(RadioButton)

const RadioBtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  
  @media (max-width: 400px) {
    width: 100%;
    max-width: 400px;
    justify-content: start;
    flex-wrap: wrap;
  }
`

const RadioBtnBox = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
`

const RadioBtn = styled.input`
`

const StateValue = styled.h1`
  text-align: center;
  font-size: 50px;
  
  @media (max-width: 400px) {
    text-align: left;
    font-size: 28px;
  }
`