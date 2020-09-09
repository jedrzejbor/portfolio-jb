import styled from 'styled-components';
import {
  device
} from '../../../theme/deviceSize';

const Button = styled.a `
  border: 1px solid white;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: background-color color .3s;
  text-decoration:none;
  display:flex;
  justify-content:center;
  align-items:center;
  /* font-weight:bold; */

  &:hover {
    background-color: #FFF;
    color: #9815FF;
  }

  @media ${device.tablet} {
      height: 50px;
      width: 250px;
      font-size:2rem;
    }
  @media ${device.laptop} {
      height: 40px;
      width: 200px;
      font-size: 1.7rem;
    }
    @media ${device.laptopL} {
      height:40px;
      width:250px;
    }
    
`;


export default Button;