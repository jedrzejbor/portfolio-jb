import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from '../components/atoms/HamburgerMenu/HamburgerMenu';
import Head from './Head';
import About from './About';
import Project from './Project';
import Contact from './Contact';

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
  `;
  const HamburgerLogo = styled.p`
    position: fixed;
    top: 20px;
    left: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 100;
  `;
  const HamburgerButton = styled(HamburgerMenu)`
    position: fixed;
    top: 20px;
    right: 20px;
  `;
  const BlueLogo = styled.span`
    color: #9815ff;
  `;

  return (
    <Wrapper>
      <HamburgerWrapper>
        <HamburgerLogo>
          <BlueLogo>JEDRZEJ</BlueLogo> BORAKIEWICZ
        </HamburgerLogo>
        <HamburgerButton> </HamburgerButton>
      </HamburgerWrapper>
      <Head />
      <About />
      <Project />
      <Contact />
    </Wrapper>
  );
};

export default Main;
