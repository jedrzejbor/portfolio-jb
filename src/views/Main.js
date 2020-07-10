import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from '../components/atoms/HamburgerMenu/HamburgerMenu';
import Head from './Head';

const Main = () => {
  const Wrapper = styled.div `
  position: relative;
` 
  const HamburgerWrapper = styled.div`
  position:fixed;
  top:0;
  left:0;
  height:45px;
  width:100vw;
  background-color: rgba(255,255,255,0.9);
  box-shadow: 1px 3px rgba(0,0,0,0.2);
  `
  const HamburgerButton = styled(HamburgerMenu)`
  position: fixed;
  top: 20px;
  right: 20px;
`;

  return ( 
  <Wrapper>
    <HamburgerWrapper>
    <HamburgerButton> </HamburgerButton> 
    </HamburgerWrapper>
    <Head/>
  </Wrapper>
  );
}

export default Main;