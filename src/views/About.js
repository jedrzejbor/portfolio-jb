import React from 'react';
import styled from 'styled-components';
import manStanding from '../images/Man_simple.png';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';
import { device } from '../theme/deviceSize';

const About = () => {
  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
  `;
  const WrapperText = styled.div`
    height: 50vh;
    width: 75vw;
    margin: 0 auto;
    padding-top: 100px;
  `;
  const Title = styled(TopicTitle)`
    @media ${device.mobileM} {
      font-size: 4rem;
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
  `;

  const ButtonProjects = styled(Button)`
    display: block;
    margin: 0 auto;
  `;

  const WrapperImage = styled.div`
    height: 50vh;
    width: 75vw;
    margin: 0 auto;
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
  `;

  return (
    <Wrapper>
      <WrapperText>
        <Title>About</Title>
        <Text>
          Hi, I am 22 years old student of informatics specialization front-end developer. My hobby
          is programing, car and race. In my projects I use HTML, CSS, JS, React and I started learn
          Node JS.
        </Text>
        <ButtonProjects>Projects</ButtonProjects>
      </WrapperText>
      <WrapperImage>
        <ImageMan src={manStanding} alt="man standing" />
      </WrapperImage>
    </Wrapper>
  );
};

export default About;
