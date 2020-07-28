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
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  padding-top: 100px;
`;

const WrapperProject = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ProjectImage = styled.img`
  height: 270px;
  width: 270px;
`;
const ProjectName = styled.h3`
  font-size: 2rem;
`;
const TechnologiesWrapper = styled.div`
  display: inline-block;
  height: 60px;
  width: 37vw;
`;

const GithubWrapper = styled.div`
  display: inline-block;
  height: 60px;
  width: 37vw;
  padding-left: 20px;
  /* display:flex; */
`;

const TextBig = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const TextLow = styled.p`
  font-size: 1.4rem;
`;
const Link = styled.a`
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
`;

const Line = styled.span`
  display: inline-block;
  height: 60px;
  width: 3px;
  background-color: #000;
  transform: translateY(5px);
`;

const ButtonContact = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
`;

const ButtonProject = styled.button`
  height: 30px;
  width: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
`;

const Project = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <TopicTitle> Projects </TopicTitle> <ProjectName> 01. Weather App </ProjectName>{' '}
        <TechnologiesWrapper>
          <TextBig> Technologies </TextBig> <TextLow> React, OpenWeatherApi </TextLow>{' '}
          <ButtonProject> D - </ButtonProject> <ButtonProject> -D </ButtonProject>{' '}
        </TechnologiesWrapper>{' '}
        <Line />
        <GithubWrapper>
          <TextBig> Github </TextBig> <Link href="https://github.com/jedrzejbor"> Link </Link>{' '}
        </GithubWrapper>{' '}
        <ButtonContact> Contact </ButtonContact>{' '}
      </WrapperTitle>{' '}
      <WrapperProject>
        <ProjectImage src={projectView} />{' '}
      </WrapperProject>{' '}
    </Wrapper>
  );
};

export default Project;
