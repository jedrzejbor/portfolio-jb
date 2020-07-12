import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import projectView from '../images/project.png';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const WrapperTitle = styled.div`
  height:50vh;
  width: 75vw;
  margin: 0 auto;
`;

const WrapperProject = styled.div`
  height:50vh;
  width: 75vw;
  margin: 0 auto;
`;

const ProjectImage = styled.img`
  height:270px;
  width: 230px;
`;

const Project = () => {
  return ( 
    <Wrapper>
      <WrapperTitle>
      <TopicTitle>Projects</TopicTitle>
      <Button>Contact</Button>
      </WrapperTitle>
      <WrapperProject>
        <ProjectImage src={projectView}/>
      </WrapperProject>
    </Wrapper>
  )
};

export default Project;