import styled from 'styled-components';

const HamburgerMenu = styled.span`
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: black;

  &::before {
  content:"";
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: black;
  transform: translateY(-10px);
  }
  &::after {
  content:"";
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: black;
  transform: translateY(5px);
  }
`;

export default HamburgerMenu;
