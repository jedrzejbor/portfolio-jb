import styled, { css } from 'styled-components';

const TriangleBackground = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #9815ff;
  -webkit-clip-path: polygon(100% 16%, 100% 85%, 100% 100%, 100% 0);
  clip-path: polygon(0 0, 100% 0, 100% 16%, 0 100%);
  transform: translateY(-1px);

  ${({ left }) =>
    left &&
    css`
      -webkit-clip-path: polygon(100% 16%, 100% 85%, 100% 100%, 0 100%);
      clip-path: polygon(100% 16%, 100% 100%, 100% 100%, 0 100%);
      transform: translateY(1px);
    `}
`;

export default TriangleBackground;
