import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import manworking from '../images/man_working.png';
import BackgroundHead from '../components/atoms/BackgroundHead/BackgroundHead';
// import BgcBlue from '../images/Background_main.png';
// import BgcBlue from '../images/Background_head.svg';
import { device } from '../theme/deviceSize';

const Head = () => {
  const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #9815ff;
    @media ${device.laptop} and (orientation: landscape) {
      /* display: flex; */
    }
  `;
  const WrapperHead = styled.div`
    height: 100%;
    margin: 0 auto;
    width: 80vw;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  `;
  const TextWrapper = styled.div`
    height: 50vh;
    width: 100%;
    /* background-color: red; */
    @media ${device.laptop} and (orientation: landscape) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `;
  const TextHead = styled.h1`
    padding-top: 100px;
    font-size: 2.5rem;
    color: white;

    @media ${device.mobileM} {
      font-size: 3rem;
    }
    @media ${device.tablet} {
      font-size: 4rem;
    }
    @media ${device.laptop} and (orientation: landscape) {
      font-size: 3rem;
      /* padding: 0 40px; */
    }
    @media ${device.laptopL} {
      font-size: 4.5rem;
    }
    @media ${device.desktop} {
      font-size: 5rem;
    }
  `;
  const Square = styled.span`
    display: inline-block;
    background-color: white;
    color: black;
  `;
  const ButtonHead = styled(Button)`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  `;
  const ImageWrapper = styled.div`
    height: 50vh;
    width: 100%;
    /* background-color: green; */
    margin: 0 auto;
    padding-top: 40px;
    /* display: flex; */
    /* align-items: center; */
  `;
  const ImageMan = styled.img`
    display: block;
    height: 30vh;
    width: 30vw;
    margin: 0 auto;
    @media ${device.mobileM} {
      height: 32vh;
      width: 32vw;
    }
    @media ${device.tablet} {
      height: 34vh;
      width: 34vw;
    }
    @media ${device.laptop} and (orientation: landscape) {
      position: absolute;
      bottom: 30%;
      right: 20%;
      height: 40vh;
      width: 15vw;
    }
    @media ${device.desktop} {
      bottom: 50%;
      right: 50%;
      height: 30vh;
      width: 10vw;
      transform: translate(50%, 50%);
    }
  `;
  return (
    <Wrapper>
      <WrapperHead>
        <TextWrapper>
          <TextHead>
            <Square>
              Hi, <br />
              I’m Jędrzej
            </Square>{' '}
            Borakiewicz, web developer.{' '}
          </TextHead>
          <ButtonHead>About</ButtonHead>
        </TextWrapper>
        <ImageWrapper>
          <ImageMan src={manworking} alt="man working on laptop" />
        </ImageWrapper>
      </WrapperHead>
    </Wrapper>
  );
};

export default Head;
