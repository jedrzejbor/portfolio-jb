import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import TechnologiesLogo from '../../atoms/TechnologiesLogo/TechnologiesLogo';
import html from '../../../images/html5.png';
import css3 from '../../../images/css35.png';
import js from '../../../images/javascript.png';
import reactLogo from '../../../images/react.png';
import reduxLogo from '../../../images/redux.png';
import { device } from '../../../theme/deviceSize';

const BarTechnologies = () => {
  const Wrapper = styled.div`
    margin: 10px 0;
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media ${device.laptop} {
      margin: 30px 0;
    }
  `;

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);

  useEffect(() => {
    const first = one.current;
    const second = two.current;
    const third = three.current;
    const fourth = four.current;
    const fifth = five.current;
    gsap.set([first, second, third, fourth, fifth], { autoAlpha: 0 });
    const tl = gsap.timeline();
    tl.fromTo(fifth, { x: -100 }, { duration: 0.3, x: 0, autoAlpha: 1 })
      .fromTo(fourth, { x: -100 }, { duration: 0.3, x: 0, autoAlpha: 1 })
      .fromTo(third, { x: -100 }, { duration: 0.3, x: 0, autoAlpha: 1 })
      .fromTo(second, { x: -100 }, { duration: 0.3, x: 0, autoAlpha: 1 })
      .fromTo(first, { x: -100 }, { duration: 0.3, x: 0, autoAlpha: 1 })
      .delay(3.5);
  });

  return (
    <Wrapper>
      <TechnologiesLogo ref={one} src={html} />
      <TechnologiesLogo ref={two} src={css3} />
      <TechnologiesLogo ref={three} src={js} />
      <TechnologiesLogo ref={four} src={reactLogo} />
      <TechnologiesLogo ref={five} src={reduxLogo} />
    </Wrapper>
  );
};

export default BarTechnologies;
