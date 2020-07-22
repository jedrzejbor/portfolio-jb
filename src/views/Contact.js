import React from 'react';
import styled from 'styled-components';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const WrapperText = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
`;

const GrayText = styled.p`
  color: #828282;
  font-weight: lighter;
  font-size: 1.6rem;
  padding: 5px 0;
`;

const ButtonCv = styled(Button)`
  display: block;
  margin: 20px auto;
`;

const Contact = () => {
  return (
    <Wrapper>
      <WrapperText>
        <TopicTitle>Contact</TopicTitle>
        <h3>EMAIL</h3>
        <GrayText>jedrzej.borakiewicz@gmail.com</GrayText>
        <h3>GITHUB</h3>
        <GrayText>jedbor</GrayText>
        <h3>LINKEDIN</h3>
        <GrayText>Jędrzej Borakiewicz</GrayText>
        <ButtonCv>DOWNLOAD CV</ButtonCv>
      </WrapperText>
    </Wrapper>
  );
};

export default Contact;
