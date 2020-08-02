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
  padding-top: 100px;
`;

const GrayText = styled.p`
  color: #828282;
  font-weight: lighter;
  font-size: 1.6rem;
  padding: 5px 0 10px 0;
`;

const ButtonCv = styled(Button)`
  display: block;
  margin: 20px auto;
`;

const WrapperImage = styled.div`
  position: relative;
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ContactImage = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 100px;
`;

const Creator = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 0.8rem;
  color: #828282;
`;

const BackgroundContact = styled.img`
  position: absolute;
  bottom: 0;
  left: -12.5vw;
  height: 110%;
  width: 95vw;
  z-index: -1;
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
      <WrapperImage>
        <ContactImage src={ManHandUp} />
        <Creator>2020 BORAKIEWICZ</Creator>
        <BackgroundContact src={BgcBlue} />
      </WrapperImage>
    </Wrapper>
  );
};

export default Contact;
