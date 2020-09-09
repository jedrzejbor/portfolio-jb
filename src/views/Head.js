import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Button from '../components/atoms/Button/Button';
// import manworking from '../images/man_working.png';
import ManFreelancer from '../images/manworking.svg';
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
    /* margin-top: 10px; */
  `;
  const ImageWrapper = styled.div`
    /* background-color: red; */
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
    height: 70%;
    width: 100%;
    margin: 0 auto;
    @media ${device.laptop} and (orientation: landscape) {
      height: 40vh;
      width: 30vw;
    }
    @media ${device.desktop} {
      height: 30vh;
      width: 30vw;
    }
  `;

  const square = useRef(null);
  const image = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    gsap.set([button.current, square.current, image.current], { autoAlpha: 0 });
    const tl = gsap.timeline();
    // const tlImage = gsap.timeline();
    // const tlButton = gsap.timeline();

    tl.fromTo(square.current, { y: -100 }, { duration: 0.5, y: 0, autoAlpha: 1 })
      .fromTo(image.current, { y: 100 }, { duration: 0.5, y: 0, autoAlpha: 1 })
      .fromTo(button.current, { y: 100 }, { duration: 0.5, y: 0, autoAlpha: 1 })
      .delay(3.5);
  });

  return (
    <>
      <Wrapper id="home-section">
        <WrapperHead>
          <TextWrapper>
            <TextHead ref={square}>
              <SquareTitle white>
                Hi, <br />
                I’m Jędrzej
              </SquareTitle>
              Borakiewicz, web developer.
            </TextHead>
            <BarTechnologies />
            <ButtonHead href="#about-section" ref={button}>
              About
            </ButtonHead>
          </TextWrapper>
          <ImageWrapper>
            <ImageMan ref={image} src={ManFreelancer} alt="man working on laptop" />
            {/* <ImageMan src={manworking} alt="man working on laptop" /> */}
            {/* <ManFreelancer /> */}
          </ImageWrapper>
        </WrapperHead>
      </Wrapper>
      <TriangleBackground />
    </>
  );
};

export default Head;
