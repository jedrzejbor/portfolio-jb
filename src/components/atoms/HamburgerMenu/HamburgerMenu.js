import styled from 'styled-components';

const HamburgerMenu = styled.span`
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: #9815FF;

  &::before {
  content:"";
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: #9815FF;
  transform: translateY(-10px);
  }
  &::after {
  content:"";
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: #9815FF;
  transform: translateY(5px);
  }
`;

export default HamburgerMenu;
