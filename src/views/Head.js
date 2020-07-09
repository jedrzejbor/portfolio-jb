import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';


const Head = () => {
 const Square = styled.span`
 display:inline-block;
 /* height: 20px; */
 /* width: 20px; */
  background-color: #9815FF;
  color: white;
 `;
  return ( 
   <div>
  <h1><Square>Hi, <br/>I’m Jędrzej</Square> Borakiewicz,
    web developer. </h1>
    <Button>About</Button>
    </div>
  )
};

export default Head;