import React from 'react';
import styled from "styled-components";
import InputBox from './InputBox.js'

function MainContainer() {
  return (
    <BackGround>
      <Container>
        <MainTitle>TODOLIST</MainTitle>
        <InputBox></InputBox>
      </Container>
    </BackGround>
  )
}

const BackGround = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(148, 180, 206);
`

const Container = styled.div`
  width: 50%;
  height: 80vh;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(250, 250, 250);
  border-radius: 7px;
`

const MainTitle = styled.div`
  margin-top: 8%;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -1px;
  color: rgb(77, 77, 77);
`

export default MainContainer;