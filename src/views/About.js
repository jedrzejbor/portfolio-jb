import React from 'react';
import styled from 'styled-components';
import manStanding from '../images/Man_simple.png';
import ManSimple from '../images/Man_simple.svg';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';
import SquareTitle from '../components/atoms/SquareTitle/SquareTitle';
import { device } from '../theme/deviceSize';

const About = () => {
  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    @media ${device.laptop} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  const WrapperAbout = styled.div`
    height: 100%;
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    @media ${device.laptop} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  const WrapperText = styled.div`
    height: 50%;
    width: 100%;
    margin: 0 auto;
    padding-top: 100px;
    @media ${device.laptop} {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: center;
      padding-top: 0;
      order: 2;
      margin: 0;
    }
  `;

  const DesktopText = styled.div`
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.7rem;
      width: 80%;
    }
  `;

  const Text = styled.p`
    padding: 20px 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    @media ${device.mobileM} {
      font-size: 1.5rem;
    }
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
    @media ${device.laptop} {
      font-size: 1.7rem;
    }
    @media ${device.laptopL} {
      font-size: 2rem;
    }
  `;

  const WrapperImage = styled.div`
    height: 50%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @media ${device.laptop} {
      height: 100%;
      width: 50%;
      margin: 0;
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
    @media ${device.laptop} {
      height: 40vh;
      width: 15vw;
    }
    @media ${device.desktop} {
      height: 30vh;
      width: 10vw;
    }
  `;

  return (
    <Wrapper>
      <WrapperAbout>
        <WrapperText>
          <DesktopText>
            <TopicTitle>
              <SquareTitle>Abo</SquareTitle>ut
            </TopicTitle>
            <Text>
              Hi, I am 22 years old student of informatics specialization front-end developer. My
              hobby is programing, car and race. In my projects I use HTML, CSS, JS, React and I
              started learn Node JS.
            </Text>
            {/* <ButtonProjects>Projects</ButtonProjects> */}
          </DesktopText>
        </WrapperText>
        <WrapperImage>
          {/* <ImageMan src={manStanding} alt="man standing" /> */}
          <ImageMan src={ManSimple} alt="man standing" />
        </WrapperImage>
      </WrapperAbout>
    </Wrapper>
  );
};

export default About;
