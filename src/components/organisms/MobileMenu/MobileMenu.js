import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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
      transition: transform 2.5s;
      content: '';
      display: block;
      height: 5px;
      width: 30px;
      border-radius: 5px;
      background-color: #9815ff;
      transform: translateY(-10px);

      ${({ isOpen }) =>
        isOpen &&
        css`
          transition: all 2s;
          transform: translateY(0px) rotate(-45deg);
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
          transform: translateY(-5px) rotate(45deg);
        `}
    }
  `;

  const [isOpen, setOpen] = useState(false);
  return (
    <HamburgerButton onClick={() => setOpen(!isOpen)}>
      <HamburgerMenu isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default MobileMenu;
