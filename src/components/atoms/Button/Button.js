import styled from 'styled-components';
import {
  device
} from '../../../theme/deviceSize';

const Button = styled.button `
  border: 1px solid #9815FF;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  background-color: transparent;
  color: #9815FF;
  transition: .3s;
  font-weight:bold;

  &:hover {
    background-color: #9815FF;
    color: #FFF;
  }

  @media ${device.tablet} {
      height: 50px;
      width: 250px;
      font-size:2rem;
    }
  @media ${device.laptop} {
      height: 40px;
      width: 200px;
      /* font-size:2rem; */
    }
    @media ${device.laptopL} {
      height:50px;
      width:300px;
    }
    
`;


export default Button;