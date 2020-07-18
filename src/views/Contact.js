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
      <h3>Email: jedrzej.borakiewicz@gmail.com</h3>
    </Wrapper>
  );
};

export default Contact;
