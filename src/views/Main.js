import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import MobileMenu from '../components/organisms/MobileMenu/MobileMenu';
import DesktopMenu from '../components/organisms/DesktopMenu/DesktopMenu';
import Head from './Head';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';
import { device } from '../theme/deviceSize';

const Main = () => {
  const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    overflow-x: hidden;
  `;
  const FirstScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #9815ff;
    z-index: 99999;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Name = styled.h2``;
  const HamburgerWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.2);
    z-index: 100;
    @media ${device.tablet} {
      height: 50px;
    }
  `;
  const HamburgerLogo = styled.p`
    position: fixed;
    /* top: 10px; */
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-weight: bold;
    font-size: 0.9rem;
    @media ${device.tablet} {
      font-size: 1.4rem;
    }
  `;

  const BlueLogo = styled.span`
    color: #9815ff;
  `;

  const LinkedinLogo = styled.a`
    position: fixed;
    bottom: 50px;
    left: 10px;
    height: 20px;
    width: 20px;
    background-image: url(${Linkedin});
    background-repeat: no-repeat;
    background-size: 20px;
    z-index: 100;
    @media ${device.tablet} {
      bottom: 60px;
      height: 30px;
      width: 30px;
      background-size: 30px;
    }
  `;
  const GithubLogo = styled.a`
    position: fixed;
    bottom: 20px;
    left: 10px;
    height: 20px;
    width: 20px;
    background-image: url(${Github});
    background-repeat: no-repeat;
    background-size: 20px;
    z-index: 100;
    @media ${device.tablet} {
      height: 30px;
      width: 30px;
      background-size: 30px;
    }
  `;

  const logo = useRef(null);
  const screen = useRef(null);
  const name = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    gsap.set([logo.current, name.current], { autoAlpha: 0 });
    const tl = gsap.timeline();

    tl.delay(0.5)
      .fromTo(name.current, { y: 100, autoAlpha: 0 }, { duration: 1.5, y: 0, autoAlpha: 1 })
      .fromTo(screen.current, { x: 0 }, { duration: 2, x: '100%' })
      .fromTo(logo.current, { y: -100 }, { duration: 1.5, y: 0, autoAlpha: 1 });
  });
  return (
    <Wrapper>
      <FirstScreen ref={screen}>
        <Name ref={name}>JEDRZEJ BORAKIEWICZ</Name>
      </FirstScreen>
      <LinkedinLogo />

      <GithubLogo />
      <HamburgerWrapper ref={menu}>
        <HamburgerLogo ref={logo}>
          <BlueLogo>JEDRZEJ</BlueLogo> BORAKIEWICZ
        </HamburgerLogo>
        <DesktopMenu aboutSection />
        <MobileMenu />
      </HamburgerWrapper>
      <Head />
      <About />
      <Project />
      <Contact />
    </Wrapper>
  );
};

export default Main;
