import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../../theme/deviceSize';

const MobileMenu = () => {
  const HamburgerButton = styled.button`
    position: fixed;
    top: 12px;
    right: 20px;
    border-width: 0px;
    padding: 10px 1px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    cursor: pointer;
    background-color: transparent;
    @media ${device.tablet} {
      top: 20px;
    }
    @media ${device.laptop} {
      opacity: 0;
    }
  `;

  const HamburgerMenu = styled.span`
    display: block;
    height: 5px;
    width: 30px;
    border-radius: 5px;
    background-color: #9815ff;
    transition: all 2s;
    ${({ isOpen }) =>
      isOpen &&
      css`
        background-color: transparent;
      `}

    &::before {
      /* transition: transform 2.5s; */
      content: '';
      display: block;
      height: 5px;
      width: 30px;
      border-radius: 5px;
      background-color: #9815ff;
      transform: translateY(-10px);
      /* z-index: 9999; */

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: translateY(0px) rotate(-45deg);
          background-color: #fff;
          z-index: 300;
        `}
    }

    &::after {
      content: '';
      display: block;
      height: 5px;
      width: 30px;
      border-radius: 5px;
      background-color: #9815ff;
      transform: translateY(5px);

      ${({ isOpen }) =>
        isOpen &&
        css`
          z-index: 300;
          transform: translateY(-5px) rotate(45deg);
          background-color: #fff;
        `}
    }
  `;

  const MenuWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9815ff;
    transform: translateX(-100%);
    transition: all 2s;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
      `};
    @media ${device.tablet} {
      opacity: 0;
    }
  `;

  const MenuList = styled.ul`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const MenuItem = styled.li`
    list-style: none;
    font-size: 3rem;
    font-weight: bold;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  `;

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <MenuWrapper isOpen={isOpen}>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </MenuWrapper>
      <HamburgerButton onClick={() => setOpen(!isOpen)}>
        <HamburgerMenu isOpen={isOpen} />
      </HamburgerButton>
    </>
  );
};

export default MobileMenu;
