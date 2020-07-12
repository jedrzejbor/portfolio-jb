import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import manworking from '../images/man_working.png';


const Head = () => {
  const Wrapper = styled.div`
  height:100vh;
  width: 100vw;
  /* background-color:red; */
  `;
  const TextWrapper = styled.div`
    height:50vh;
    width: 75vw;
    margin: 0 auto;
  `;
  const TextHead = styled.h1`
  padding-top:100px;
  `;
 const Square = styled.span`
  display:inline-block;
  background-color: #9815FF;
  color: white;
 `;
 const ButtonHead = styled(Button)`
 display: block;
  margin: 0 auto;
  margin-top: 20px;
 `
 const ImageWrapper = styled.div`
  height:50vh;
  width: 75vw;
  margin: 0 auto;
 `;
 const ImageMan = styled.img`
 display:block;
  height:300px;
  width: 150px;
  margin: 0 auto;
 `
  return ( 
   <Wrapper>
    <TextWrapper>
  <TextHead><Square>Hi, <br/>I’m Jędrzej</Square> Borakiewicz,
    web developer. </TextHead>
    <ButtonHead>About</ButtonHead>
    </TextWrapper>
    <ImageWrapper> 
    <ImageMan src={manworking} alt='man working on laptop'/>
    </ImageWrapper>
    </Wrapper>
  )
};

export default Head;