import React from 'react';
import BgcHead from '../../../images/Background_head.svg';
import styled from 'styled-components';

const BackgroundHead = () => {
  const Bgc = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    /* transform: translateY(10vh); */
    overflow: hidden;
    background-image: url(${BgcHead});
    height: 100%;
    width: 100%;
    background-size: cover;
    /* background-size: 50vw 100vh; */
    background-repeat: no-repeat;
    background-position: 100% 100%;
    /* background-color: red; */
    /* padding-bottom: 90%; */
    z-index: -50;
  `;
  return <Bgc></Bgc>;
};

export default BackgroundHead;
