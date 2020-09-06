import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { device } from '../../../theme/deviceSize';

const DesktopMenu = () => {
  const MenuWrapper = styled.div`
    float: right;
    opacity: 0;
    height: 100%;
    width: 30vw;
    @media ${device.laptop} {
      opacity: 1;
    }
  `;

  const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
  `;

  const MenuItem = styled.li`
    list-style: none;
    font-size: 1.6rem;
    &:hover {
      color: blue;
    }
  `;

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    gsap.set([home.current, about.current, projects.current, contact.current], { autoAlpha: 0 });
    const tl = gsap.timeline();

    tl.fromTo(home.current, { y: -100 }, { duration: 0.35, y: 0, autoAlpha: 1 })
      .fromTo(about.current, { y: -100 }, { duration: 0.35, y: 0, autoAlpha: 1 })
      .fromTo(projects.current, { y: -100 }, { duration: 0.35, y: 0, autoAlpha: 1 })
      .fromTo(contact.current, { y: -100 }, { duration: 0.35, y: 0, autoAlpha: 1 })
      .delay(3.5);
  });
  return (
    <>
      <MenuWrapper>
        <MenuList>
          <MenuItem ref={home}>Home</MenuItem>
          <MenuItem ref={about}>About</MenuItem>
          <MenuItem ref={projects}>Projects</MenuItem>
          <MenuItem ref={contact}>Contact</MenuItem>
        </MenuList>
      </MenuWrapper>
    </>
  );
};

export default DesktopMenu;
