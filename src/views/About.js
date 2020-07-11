import React from 'react';
import styled from 'styled-components';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import Button from '../components/atoms/Button/Button';

const About = () => {
  const Wrapper = styled.div`
    height:100vh;
    width: 100vw;
  `;

  return(
    <Wrapper>
      <TopicTitle>About</TopicTitle>
      <p>Hi, I am 22 years old student of 
informatics specialization front-end 
developer. My hobby is 
programing, car and race.
In my projects I use  HTML, CSS, JS, 
React and I started learn Node JS.</p>
<Button>Projects</Button>
    </Wrapper>
  )
};

export default About;