import React from 'react';
import styled from 'styled-components';
import { device } from '../../../theme/deviceSize';

const DesktopMenu = () => {
  const MenuWrapper = styled.div`
    float: right;
    opacity: 0;
    height: 100%;
    width: 50vw;
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
    font-weight: bold;
    &:hover {
      color: blue;
    }
  `;
  return (
    <>
      <MenuWrapper>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </MenuWrapper>
    </>
  );
};

export default DesktopMenu;
