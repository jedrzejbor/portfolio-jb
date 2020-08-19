import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import manworking from '../images/man_working.png';
import BgcBlue from '../images/Background_main.png';
import { device } from '../theme/deviceSize';

const Head = () => {
  const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
  `;
  const BackgroundHead = styled.img`
    position: absolute;
    bottom: 0;
    right: -10px;
    height: 65vh;
    width: 95vw;
    z-index: -1;
    @media ${device.tablet} {
      height: 80vh;
    }
  `;
  const TextWrapper = styled.div`
    height: 50vh;
    width: 75vw;
    margin: 0 auto;
  `;
  const TextHead = styled.h1`
    padding-top: 100px;
    font-size: 2.5rem;

    @media ${device.mobileM} {
      font-size: 3rem;
    }
    @media ${device.tablet} {
      font-size: 4rem;
    }
  `;
  const Square = styled.span`
    display: inline-block;
    background-color: #9815ff;
    color: white;
  `;
  const ButtonHead = styled(Button)`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  `;
  const ImageWrapper = styled.div`
    height: 50vh;
    width: 75vw;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    align-items: center;
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
      height: 36vh;
      width: 36vw;
    }
  `;
  return (
    <Wrapper>
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
      <BackgroundHead src={BgcBlue} />
    </Wrapper>
  );
};

export default Head;
