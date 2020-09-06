import styled from 'styled-components';
import { device } from '../../../theme/deviceSize';

const TechnologiesLogo = styled.img`
  height: 20px;
  @media ${device.laptop} {
    height: 40px;
  }
`;

export default TechnologiesLogo;
