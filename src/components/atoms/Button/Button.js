import styled from 'styled-components';

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
`;


export default Button;