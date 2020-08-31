import styled, { css } from 'styled-components';

const SquareTitle = styled.span`
  display: inline-block;
  background-color: #9815ff;
  color: white;
  ${({ white }) =>
    white &&
    css`
      background-color: white;
      color: black;
    `}
`;

export default SquareTitle;
