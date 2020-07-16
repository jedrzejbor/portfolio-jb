import React from 'react';
import styled from 'styled-components';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Contact = () => {

  return (
    <Wrapper>
      <TopicTitle>Contact</TopicTitle>
    </Wrapper>
  )
}

export default Contact;