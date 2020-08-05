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
  padding-top: 50px;
`;

const WrapperProject = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  height: 30vh;
  width: 30vh;
`;
const ProjectName = styled.h3`
  font-size: 1.8rem;
`;

const WrapperTechnologiesGithub = styled.div`
  display: flex;
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
  /* display: flex; */
`;

const TextBig = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const TextLow = styled.p`
  font-size: 1.1rem;
`;
const Link = styled.a`
  font-size: 1.1rem;
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
  /* margin-top: 20px; */
`;

const WrapperButtonProject = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
`;

const ButtonProject = styled.button`
  height: 30px;
  width: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px 0;
`;

const Project = () => {
  return (
    <Wrapper>
      <WrapperTitle>
        <TopicTitle> Projects </TopicTitle> <ProjectName> 01. Weather App </ProjectName>
        <WrapperTechnologiesGithub>
          <TechnologiesWrapper>
            <TextBig> Technologies </TextBig> <TextLow> React, OpenWeatherApi </TextLow>
          </TechnologiesWrapper>
          <Line />
          <GithubWrapper>
            <TextBig> Github </TextBig> <Link href="https://github.com/jedrzejbor"> Link </Link>
          </GithubWrapper>
        </WrapperTechnologiesGithub>
        <WrapperButtonProject>
          <ButtonProject> D - </ButtonProject> <ButtonProject> -D </ButtonProject>
        </WrapperButtonProject>
        <ButtonContact> Contact </ButtonContact>
      </WrapperTitle>
      <WrapperProject>
        <ProjectImage src={projectView} />
      </WrapperProject>
    </Wrapper>
  );
};

export default Project;
