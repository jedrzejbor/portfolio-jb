import React from 'react';
import styled from 'styled-components';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';
import ManHandUp from '../images/man_hand_up.png';
import BgcBlue from '../images/Background_contact.png';
import { device } from '../theme/deviceSize';
import SquareTitle from '../components/atoms/SquareTitle/SquareTitle';

const Wrapper = styled.div`
  /* position: relative; */
  height: 100vh;
  width: 100vw;
  background-color: #9815ff;
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperContact = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
`;

const WrapperText = styled.div`
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  @media ${device.laptop} {
    order: 2;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
  }
`;

const TopicContact = styled.h3`
  font-size: 1.5rem;
  color: white;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const GrayText = styled.p`
  color: white;
  font-weight: lighter;
  font-size: 1.2rem;
  padding: 5px 0 10px 0;
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

const ButtonCv = styled(Button)`
  display: block;
  margin: 10px auto;
  @media ${device.laptop} {
    margin: 0;
  }
`;

const WrapperImage = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    height: 100%;
    width: 50vw;
  }
`;

const ContactImage = styled.img`
  height: 30vh;
  width: 30vw;
  @media ${device.tablet} {
    height: 36vh;
    width: 36vw;
    margin-bottom: 6vh;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
    height: 40vh;
    width: 15vw;
  }
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
  @media ${device.tablet} {
    height: 65vh;
  }
  @media ${device.laptop} {
    left: -10vw;
    width: 62.5vw;
    height: 100vh;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <WrapperContact>
        <WrapperText>
          <TopicTitle white>
            <SquareTitle white>Cont</SquareTitle>act
          </TopicTitle>
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
      </WrapperContact>
    </Wrapper>
  );
};

export default Contact;
