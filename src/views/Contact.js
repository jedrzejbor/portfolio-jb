import React from 'react';
import styled from 'styled-components';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';
import ManHandUp from '../images/man_hand_up.png';
import BgcBlue from '../images/Background_contact.png';

const Wrapper = styled.div`
  /* position: relative; */
  height: 100vh;
  width: 100vw;
`;

const WrapperText = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  padding-top: 50px;
`;

const TopicContact = styled.h3`
  font-size: 1.5rem;
`;

const GrayText = styled.p`
  color: #828282;
  font-weight: lighter;
  font-size: 1.2rem;
  padding: 5px 0 10px 0;
`;

const ButtonCv = styled(Button)`
  display: block;
  margin: 10px auto;
`;

const WrapperImage = styled.div`
  position: relative;
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactImage = styled.img`
  height: 30vh;
  width: 30vw;
`;

const Creator = styled.p`
  position: absolute;
  bottom: 20px;
  right: -5vw;
  font-size: 0.8rem;
  color: #828282;
`;

const BackgroundContact = styled.img`
  position: absolute;
  bottom: 0;
  left: -12.5vw;
  height: 55vh;
  width: 95vw;
  z-index: -1;
`;

const Contact = () => {
  return (
    <Wrapper>
      <WrapperText>
        <TopicTitle>Contact</TopicTitle>
        <TopicContact>EMAIL</TopicContact>
        <GrayText>jedrzej.borakiewicz@gmail.com</GrayText>
        <TopicContact>GITHUB</TopicContact>
        <GrayText>jedbor</GrayText>
        <TopicContact>LINKEDIN</TopicContact>
        <GrayText>Jędrzej Borakiewicz</GrayText>
        <ButtonCv>DOWNLOAD CV</ButtonCv>
      </WrapperText>
      <WrapperImage>
        <ContactImage src={ManHandUp} />
        <Creator>2020 BORAKIEWICZ</Creator>
        <BackgroundContact src={BgcBlue} />
      </WrapperImage>
    </Wrapper>
  );
};

export default Contact;
