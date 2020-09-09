import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';
import ManHandUp from '../images/mobileMessages.svg';
import { device } from '../theme/deviceSize';
import SquareTitle from '../components/atoms/SquareTitle/SquareTitle';
import TriangleBackground from '../components/atoms/TriangleBackground/TriangleBackground';
import Icons8 from '../images/icons8.png';

const Wrapper = styled.div`
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
  position: relative;
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
  /* display: block; */
  margin: 10px auto;
  @media ${device.laptop} {
    margin: 0;
  }
`;

const WrapperImage = styled.div`
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
  height: 70%;
  width: 100%;
  @media ${device.laptop} {
    margin-bottom: 0;
    height: 40vh;
    width: 30vw;
  }
`;

const Creator = styled.p`
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  z-index: 55;
  @media ${device.laptop} {
    font-size: 1rem;
    right: 50px;
  }
`;
const Icons = styled.a`
  /* display: block; */
  position: absolute;
  height: 15px;
  width: 15px;
  bottom: 17px;
  right: 0px;
  z-index: 550;
  background-image: url(${Icons8});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.laptop} {
    height: 20px;
    width: 20px;
    bottom: 15px;
  }
  @media ${device.laptopL} {
    height: 25px;
    width: 25px;
    bottom: 15px;
  }
`;

const Contact = () => {
  const wrapper = useRef(null);
  const text = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([text.current, image.current], { autoAlpha: 0 });

    gsap.fromTo(
      text.current,
      { x: 100 },
      {
        duration: 1,
        x: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 20%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
    gsap.fromTo(
      image.current,
      { x: -100 },
      {
        duration: 1,
        x: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 20%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
  });
  return (
    <>
      <TriangleBackground left />
      <Wrapper id="contact-section" ref={wrapper}>
        <WrapperContact>
          <WrapperText ref={text}>
            <TopicTitle white>
              <SquareTitle white>Cont</SquareTitle>act
            </TopicTitle>
            <TopicContact>EMAIL</TopicContact>
            <GrayText>jedrzej.borakiewicz@gmail.com</GrayText>
            <TopicContact>GITHUB</TopicContact>
            <GrayText>jedbor</GrayText>
            <TopicContact>LINKEDIN</TopicContact>
            <GrayText>Jędrzej Borakiewicz</GrayText>
            <ButtonCv href="https://drive.google.com/file/d/11fg3L-jMxYyqj3B-_SpW0lh-aVNO3CkN/view?usp=sharing">
              WATCH CV
            </ButtonCv>
          </WrapperText>
          <WrapperImage ref={image}>
            <ContactImage src={ManHandUp} />
          </WrapperImage>
          <Creator> &#169; 2020 BORAKIEWICZ</Creator>
          <Icons href="https://icons8.com/" />
        </WrapperContact>
      </Wrapper>
    </>
  );
};

export default Contact;
