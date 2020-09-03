import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import manworking from '../images/man_working.png';
import SquareTitle from '../components/atoms/SquareTitle/SquareTitle';
import TriangleBackground from '../components/atoms/TriangleBackground/TriangleBackground';
import BarTechnologies from '../components/molecules/BarTechnologies/BarTechnologies';
import { device } from '../theme/deviceSize';

const Head = () => {
  const Wrapper = styled.div`
    position: relative;
    height: 85vh;
    width: 100vw;
    background-color: #9815ff;
  `;
  const WrapperHead = styled.div`
    height: 100%;
    width: 70%;
    max-width: 1440px;
    margin: 0 auto;
    @media ${device.laptop} and (orientation: landscape) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const TextWrapper = styled.div`
    height: 50%;
    width: 100%;
    @media ${device.laptop} and (orientation: landscape) {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `;

  const TextHead = styled.h1`
    padding-top: 60px;
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
      padding: 0;
    }
    @media ${device.laptopL} {
      font-size: 3.5rem;
    }
    @media ${device.desktop} {
      font-size: 4rem;
    }
  `;
  const ButtonHead = styled(Button)`
    margin: 0 auto;
    margin-top: 10px;
  `;
  const ImageWrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    @media ${device.laptop} and (orientation: landscape) {
      height: 100vh;
      width: 50%;
    }
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
      height: 40vh;
      width: 15vw;
    }
    @media ${device.desktop} {
      height: 30vh;
      width: 10vw;
    }
  `;
  return (
    <>
      <Wrapper>
        <WrapperHead>
          <TextWrapper>
            <TextHead>
              <SquareTitle white>
                Hi, <br />
                I’m Jędrzej
              </SquareTitle>{' '}
              Borakiewicz, web developer.{' '}
            </TextHead>
            <BarTechnologies />
            <ButtonHead>About</ButtonHead>
          </TextWrapper>
          <ImageWrapper>
            <ImageMan src={manworking} alt="man working on laptop" />
          </ImageWrapper>
        </WrapperHead>
      </Wrapper>
      <TriangleBackground />
    </>
  );
};

export default Head;
