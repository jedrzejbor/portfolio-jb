import React from 'react';
import styled from 'styled-components';
import MobileMenu from '../components/organisms/MobileMenu/MobileMenu';
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
      height: 65px;
    }
  `;
  const HamburgerLogo = styled.p`
    position: fixed;
    top: 20px;
    left: 20px;
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
    @media ${device.tablet} {
      height: 30px;
      width: 30px;
      background-size: 30px;
    }
  `;

  return (
    <Wrapper>
      <LinkedinLogo />
      <GithubLogo />
      <HamburgerWrapper>
        <HamburgerLogo>
          <BlueLogo>JEDRZEJ</BlueLogo> BORAKIEWICZ
        </HamburgerLogo>
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
