import React from 'react';
import styled from "styled-components";

function InputBox() {
  return (
    <Container>
      <InputContainer>
        <InputText />
        <InputButton>+</InputButton>
      </InputContainer>
      {/* <ListContainer>
        <ListBox>
          <InputList></InputList>
          <ListEditContainer>

          </ListEditContainer>
        </ListBox>
      </ListContainer> */}
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3%;
`

const InputText = styled.input`
  width:600px; 
  height:40px;
  text-align: center;
  font-size: 15px;
  border: solid 1px sandybrown;
  &:focus {
    outline: solid 1px sandybrown;
  }
`

const InputButton = styled.button`
  width: 50px;
  display: flex;
  align-items: center;
  margin-left: 0.7%;
  justify-content: center;
  color:rgb(250, 250, 250);
  font-size: 30px;
  background-color: rgb(148, 180, 206);
  border: none;
`

const ListContainer = styled.div`
margin-top: 3%;
`

export default InputBox;