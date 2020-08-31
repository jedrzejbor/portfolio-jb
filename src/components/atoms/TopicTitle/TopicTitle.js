import styled, { css } from 'styled-components';
import { device } from '../../../theme/deviceSize';

const TopicTitle = styled.h2`
  font-size: 3rem;
  color: #9815ff;
  font-weight: bold;
  @media ${device.mobileM} {
    font-size: 4rem;
  }
  @media ${device.tablet} {
    font-size: 6rem;
  }
  @media ${device.laptop} {
    font-size: 4.5rem;
  }
  @media ${device.laptopL} {
    font-size: 5rem;
  }
  ${({ white }) =>
    white &&
    css`
      color: white;
    `}
`;
export default TopicTitle;
