import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ManSimple from '../images/mobileLife.svg';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
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
    height: 70%;
    width: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
      height: 40vh;
      width: 30vw;
    }
    @media ${device.desktop} {
      height: 30vh;
      width: 30vw;
    }
  `;

  const title = useRef(null);
  const text = useRef(null);
  const wrapper = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([text.current, image.current, title.current], { autoAlpha: 0 });

    gsap.fromTo(
      [title.current, text.current],
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
    <Wrapper ref={wrapper}>
      <WrapperAbout>
        <WrapperText>
          <DesktopText>
            <TopicTitle ref={title}>
              <SquareTitle>Abo</SquareTitle>ut
            </TopicTitle>
            <Text ref={text}>
              Hi, I am 22 years old student of informatics specialization front-end developer. My
              hobby is programing, car and race. In my projects I use HTML, CSS, JS, React and I
              started learn Node JS.
            </Text>
            {/* <ButtonProjects>Projects</ButtonProjects> */}
          </DesktopText>
        </WrapperText>
        <WrapperImage>
          {/* <ImageMan src={manStanding} alt="man standing" /> */}
          <ImageMan ref={image} src={ManSimple} alt="man standing" />
        </WrapperImage>
      </WrapperAbout>
    </Wrapper>
  );
};

export default About;
